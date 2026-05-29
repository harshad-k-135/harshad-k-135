import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types/types';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  const githubLink = project.githubUrl;
  const demoLink = project.demoUrl || project.liveUrl;
  const isGroundwork = githubLink.includes('groundwork_ai');
  const stack = project.stack?.length ? project.stack : project.technologies ?? [];
  const architectureNote = project.architectureNotes?.[0] || project.architecture;
  const learnings = project.learnings?.length ? project.learnings : project.impact ? [project.impact] : [];
  const intro = project.shortDescription || project.description || '';
  const longDescription = project.longDescription || project.description || '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`group relative h-full ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.16),_transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <Card className="relative h-full overflow-hidden transition-all duration-300 group-hover:border-orange-500/30 group-hover:-translate-y-1 group-hover:shadow-[0_0_32px_rgba(251,146,60,0.12)]">
        <CardHeader className="flex justify-between items-start mb-0">
          <div>
            <h3 className="text-xl text-white group-hover:text-orange-300 transition-colors leading-tight">
              {project.title}
            </h3>
            <p className="text-xs font-medium text-orange-300/80 mt-1 uppercase tracking-wide">
              {project.category}
            </p>
          </div>
          {project.badge && (
            <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-orange-500/10 text-orange-200 rounded-full border border-orange-400/20">
              {project.badge}
            </span>
          )}
        </CardHeader>

        <CardContent className="flex-grow flex flex-col">
          <p className="text-white/70 mb-3 text-sm leading-relaxed">
            {intro}
          </p>

          {architectureNote && (
            <div className="text-xs text-white/55 mb-3 leading-relaxed">
              <strong className="text-white/80">Architecture:</strong> {architectureNote}
            </div>
          )}

          {longDescription && longDescription !== intro && (
            <p className="text-xs text-white/50 mb-3 leading-relaxed">{longDescription}</p>
          )}

          <div className="flex flex-wrap gap-1.5 mb-8">
            {stack.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-0.5 text-[11px] font-semibold bg-white/5 text-white/65 rounded-md border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto space-y-3">
            {githubLink && (
              <a 
                href={githubLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-black/70 text-white rounded-lg hover:bg-black transition-all text-sm font-medium border border-white/10"
              >
                <Github size={16} />
                GitHub
              </a>
            )}
            {demoLink && (
              <a 
                href={demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 border border-orange-500/35 text-orange-200 rounded-lg hover:bg-orange-500/10 transition-all text-sm font-medium"
              >
                <ExternalLink size={16} />
                {isGroundwork ? 'Live URL' : 'Live Demo'}
              </a>
            )}
          </div>
        </CardContent>
        {learnings[0] && (
          <CardFooter>
            <div className="text-xs italic text-white/60">What I learned: {learnings[0]}</div>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
};

export default ProjectCard;