import { Project } from '../types/types';

export const projects: Project[] = [
  {
    title: 'Groundwork AI',
    subtitle: 'Multi-Agent Academic Research Assistant',
    description: 'A 4-agent pipeline (Query Strategist → Literature Retriever → Web Scout → Research Synthesizer) built to eliminate hallucinated citations. The LLM is deliberately excluded from the retrieval step — agents hit ArXiv, Semantic Scholar, OpenReview, ACL, IEEE, and Springer in parallel. Outputs: inline-cited field summaries, structured JSON, PDF export, persistent search history.',
    technologies: ['CrewAI', 'Groq', 'Llama 3.3 70B', 'FastAPI', 'React', 'ArXiv API', 'Semantic Scholar API', 'Tavily'],
    githubUrl: 'https://github.com/harshad-k-135/groundwork_ai',
    badge: 'Open Source',
  },
  {
    title: 'Multimodal Summarization Pipeline',
    subtitle: 'Vision-Language Research · PICT × Dr. Sheetal Sonawane',
    description: 'Multimodal feature extraction and alignment pipeline projecting vision and language embeddings into a shared latent space using contrastive learning with clustering. Includes a cluster scoring and filtering framework for high-quality concept grounding in downstream vision-language tasks. Paper in preparation.',
    technologies: ['PyTorch', 'HuggingFace', 'NLTK', 'Python', 'Contrastive Learning'],
    badge: 'Research',
  },
  {
    title: 'Autonomous Vehicular Simulation using AI',
    subtitle: 'Full Self-Driving Simulator with Real-Time Inference',
    description: 'FSD simulator with AI-driven steering, speed, and braking. Custom data logger captures simulation telemetry; ensemble Boosting models trained on logged data achieve near-perfect accuracy. Unity UI displays live model predictions feeding back into the simulation loop in real time.',
    technologies: ['Python', 'Unity', 'C#', 'Blender', 'Flask', 'Pandas'],
    githubUrl: 'https://github.com/harshad-k-135/autonomous_vehicular_simulation',
  },
];