import { execFileSync } from 'node:child_process';
import { readFile, writeFile, mkdir, access, readdir } from 'node:fs/promises';
import { constants as fsConstants } from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const manifestPath = path.join(rootDir, 'content', 'repositories.json');
const outputPath = path.join(rootDir, 'src', 'data', 'projects.generated.ts');
const reviewPath = path.join(rootDir, 'content', 'project-review.json');
const cacheDir = path.join(rootDir, '.cache', 'repo-scan');
const owner = 'harshad-k-135';

const STACK_PATTERNS = [
  ['Next.js', /(^|[^a-z])next([^a-z]|$)/i],
  ['React', /react/i],
  ['Vite', /vite/i],
  ['Tailwind CSS', /tailwind/i],
  ['Framer Motion', /framer-motion/i],
  ['FastAPI', /fastapi/i],
  ['LangGraph', /langgraph/i],
  ['LangChain', /langchain/i],
  ['CrewAI', /crewai/i],
  ['PyTorch', /pytorch|torch/i],
  ['TensorFlow', /tensorflow/i],
  ['ONNX', /onnx/i],
  ['OpenCV', /opencv/i],
  ['Redis', /redis/i],
  ['PostgreSQL', /postgres|psql/i],
  ['Docker', /docker/i],
  ['Rust', /cargo|rust/i],
  ['TypeScript', /typescript|tsconfig/i],
  ['Python', /python|requirements\.txt|pyproject\.toml/i],
];

function repoNameFromUrl(url) {
  return url.replace(/\.git$/, '').split('/').filter(Boolean).at(-1) || 'repo';
}

function ownerFromUrl(url) {
  const segments = url.replace(/\.git$/, '').split('/').filter(Boolean);
  return segments.at(-2) || '';
}

function slugToTitle(slug) {
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\b(ai|ml|cv|ocr|rag|api|ui|db)\b/gi, word => word.toUpperCase())
    .replace(/\b\w/g, letter => letter.toUpperCase());
}

function truncate(text, limit) {
  const trimmed = text.replace(/\s+/g, ' ').trim();
  return trimmed.length > limit ? `${trimmed.slice(0, limit - 1).trimEnd()}…` : trimmed;
}

function stripMarkdown(text) {
  return text
    .replace(/```[\s\S]*?```/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[[^\]]*\]\(([^)]*)\)/g, '$1')
    .replace(/^>\s?/gm, '')
    .replace(/[*_`#-]/g, ' ');
}

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

async function readJson(filePath) {
  const raw = await readFile(filePath, 'utf8');
  return JSON.parse(raw);
}

async function cloneRepo(url, destPath) {
  try {
    await access(destPath, fsConstants.F_OK);
    return;
  } catch {
    // fall through and clone
  }

  await ensureDir(path.dirname(destPath));
  execFileSync('git', ['clone', '--depth', '1', '--quiet', url, destPath], { stdio: 'inherit' });
}

async function readTextIfExists(filePath) {
  try {
    return await readFile(filePath, 'utf8');
  } catch {
    return '';
  }
}

function firstHeading(readme) {
  const match = readme.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : '';
}

function extractParagraphs(readme) {
  return readme
    .split(/\n\s*\n/)
    .map(paragraph => paragraph.trim())
    .filter(Boolean)
    .filter(paragraph => !/^#{1,6}\s/.test(paragraph));
}

function extractDescription(readme, packageDescription) {
  const paragraphs = extractParagraphs(readme)
    .map(stripMarkdown)
    .map(paragraph => paragraph.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .filter(paragraph => paragraph.split(/\s+/).length >= 8 && !/^features$/i.test(paragraph));
  const readmeDescription = paragraphs[0] || '';
  return truncate(readmeDescription || packageDescription || '', 220);
}

function extractLongDescription(readme, packageDescription, title) {
  const paragraphs = extractParagraphs(readme)
    .map(stripMarkdown)
    .map(paragraph => paragraph.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .filter(paragraph => paragraph.split(/\s+/).length >= 6)
    .slice(0, 2);
  const base = paragraphs.join(' ');
  const combined = base || packageDescription || title;
  return truncate(combined, 420);
}

function detectStack({ packageJson, files, readme }) {
  const haystack = [
    JSON.stringify(packageJson || {}),
    files.join('\n'),
    readme,
  ].join('\n');

  const stack = [];
  for (const [label, regex] of STACK_PATTERNS) {
    if (regex.test(haystack) && !stack.includes(label)) {
      stack.push(label);
    }
  }

  return stack;
}

function inferTags({ stack, title, readme, files }) {
  const tokens = new Set(stack);
  const text = `${title}\n${readme}\n${files.join('\n')}`.toLowerCase();

  const tagRules = [
    ['AI Systems', /retrieval|orchestration|agent|rag|llm|inference/],
    ['Computer Vision', /vision|cv|ocr|opencv|face|gesture/],
    ['Research', /paper|research|experiment|literature|benchmark/],
    ['Infra', /docker|redis|postgres|server|pipeline|backend|fastapi/],
    ['Edge', /edge|iot|embedded|firmware|quantization/],
    ['Web', /react|next|vite|frontend|ui|web/],
  ];

  for (const [tag, regex] of tagRules) {
    if (regex.test(text)) tokens.add(tag);
  }

  return [...tokens];
}

function inferCategory({ title, stack, tags, categoryHint }) {
  if (categoryHint) return categoryHint;

  const text = `${title} ${stack.join(' ')} ${tags.join(' ')}`.toLowerCase();
  if (/retrieval|rag|agent|llm|langgraph|crewai/.test(text)) return 'AI Systems';
  if (/ocr|opencv|vision|face|gesture/.test(text)) return 'Computer Vision';
  if (/quantization|edge|iot|firmware/.test(text)) return 'Edge AI';
  if (/research|paper|literature/.test(text)) return 'Research';
  if (/docker|redis|postgres|fastapi|backend/.test(text)) return 'Infra';
  return 'Software';
}

function extractArchitectureNotes(readme) {
  const lines = readme.split(/\r?\n/);
  const notes = [];
  const headerRegex = /^(#{2,4})\s*.*?(architecture|system design|pipeline|flow|orchestration|request flow|overview)/i;

  for (let index = 0; index < lines.length; index += 1) {
    if (!headerRegex.test(lines[index])) continue;
    const block = [lines[index].trim()];
    for (let offset = 1; offset <= 4 && index + offset < lines.length; offset += 1) {
      const nextLine = lines[index + offset].trim();
      if (!nextLine) continue;
      if (/^#{1,6}\s/.test(nextLine)) break;
      block.push(nextLine);
    }
    const note = truncate(stripMarkdown(block.join(' ')), 180);
    if (note && !notes.includes(note)) notes.push(note);
  }

  return notes;
}

function extractLearnings(readme) {
  const lines = readme.split(/\r?\n/);
  const matches = [];
  for (let index = 0; index < lines.length; index += 1) {
    if (!/key learnings|what i learned|lessons|takeaways/i.test(lines[index])) continue;
    const block = [lines[index].trim()];
    for (let offset = 1; offset <= 4 && index + offset < lines.length; offset += 1) {
      const nextLine = lines[index + offset].trim();
      if (!nextLine) continue;
      if (/^#{1,6}\s/.test(nextLine)) break;
      block.push(nextLine);
    }
    const note = truncate(stripMarkdown(block.join(' ')).replace(/\s+/g, ' ').trim(), 160);
    if (note && !matches.includes(note)) matches.push(note);
  }
  return matches;
}

function inferDemoUrl(packageJson) {
  return packageJson?.homepage || packageJson?.demoUrl || '';
}

function buildSummary(project) {
  const parts = [project.shortDescription, project.longDescription, project.architectureNotes?.[0], project.learnings?.[0]]
    .filter(Boolean)
    .join(' ');
  return truncate(parts, 260);
}

async function main() {
  await ensureDir(cacheDir);
  const manifest = await readJson(manifestPath);
  const generated = [];
  const review = [];

  for (const entry of manifest) {
    const url = typeof entry === 'string' ? entry : entry.url;
    const repoName = repoNameFromUrl(url);
    const repoOwner = ownerFromUrl(url);
    const repoDir = path.join(cacheDir, repoOwner, repoName);

    if (!url) continue;
    if (repoOwner !== owner) {
      review.push({ url, reason: 'Repository owner does not match target account.' });
      continue;
    }

    try {
      await cloneRepo(url, repoDir);
    } catch (error) {
      review.push({ url, reason: `Clone failed: ${error.message}` });
      continue;
    }

    const readme = await readTextIfExists(path.join(repoDir, 'README.md'));
    const packageJsonRaw = await readTextIfExists(path.join(repoDir, 'package.json'));
    const packageJson = packageJsonRaw ? JSON.parse(packageJsonRaw) : {};
    const dirEntries = await readdir(repoDir, { withFileTypes: true });
    const topLevelFiles = dirEntries.filter(item => item.isFile()).map(item => item.name);

    const title = firstHeading(readme) || packageJson.name || slugToTitle(repoName);
    const shortDescription = extractDescription(readme, packageJson.description || '');
    const longDescription = extractLongDescription(readme, packageJson.description || '', title);
    const stack = detectStack({ packageJson, files: topLevelFiles, readme });
    const tags = inferTags({ stack, title, readme, files: topLevelFiles });
    const category = inferCategory({ title, stack, tags, categoryHint: entry.categoryHint });
    const architectureNotes = extractArchitectureNotes(readme);
    const learnings = extractLearnings(readme);
    const demoUrl = inferDemoUrl(packageJson);
    const reviewReasons = [];

    if (!readme) reviewReasons.push('README.md missing or empty.');
    if (!shortDescription) reviewReasons.push('No clear short description extracted.');
    if (!stack.length) reviewReasons.push('No explicit stack detected.');
    if (!architectureNotes.length) reviewReasons.push('No architecture note found.');
    if (!learnings.length) reviewReasons.push('No learning note found.');

    const project = {
      title,
      shortDescription,
      longDescription,
      stack,
      githubUrl: url,
      demoUrl: demoUrl || undefined,
      featured: Boolean(entry.featured),
      tags,
      architectureNotes,
      learnings,
      category,
      summary: buildSummary({ shortDescription, longDescription, architectureNotes, learnings }),
      reviewStatus: reviewReasons.length ? 'needs-review' : 'ready',
    };

    generated.push(project);

    if (reviewReasons.length) {
      review.push({
        url,
        title,
        reasons: reviewReasons,
      });
    }
  }

  const sortedProjects = generated.sort((a, b) => Number(b.featured) - Number(a.featured) || a.title.localeCompare(b.title));
  const fileContents = `import type { Project } from '../types/types';\n\nexport const projects: Project[] = ${JSON.stringify(sortedProjects, null, 2)};\n`;

  await writeFile(outputPath, fileContents + '\n', 'utf8');
  await writeFile(reviewPath, JSON.stringify(review, null, 2) + '\n', 'utf8');

  console.log(`Generated ${sortedProjects.length} projects -> ${path.relative(rootDir, outputPath)}`);
  console.log(`Review items: ${review.length} -> ${path.relative(rootDir, reviewPath)}`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});