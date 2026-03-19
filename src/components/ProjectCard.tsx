import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20 transition-all duration-300 flex flex-col h-full border border-gray-100 dark:border-gray-800 hover:-translate-y-2 hover:border-indigo-200 dark:hover:border-indigo-800">
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1 italic">
              {project.subtitle}
            </p>
          </div>
          {project.badge && (
            <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-200 dark:border-indigo-800">
              {project.badge}
            </span>
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mt-4 mb-6 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-8">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-0.5 text-[11px] font-semibold bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 rounded-md border border-gray-200 dark:border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-3">
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-all text-sm font-medium"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all text-sm font-medium"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;