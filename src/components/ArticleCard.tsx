import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Articles } from '../types/types';

interface ArticleCardProps {
  article: Articles;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
     <a  href={article.mediumUrl} >
       <div className="p-6 flex-grow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{article.title}</h3>
          <div className="flex space-x-2">
            {/* {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github size={20} />
              </a>
            )} */}
            {article.mediumUrl && (
              <a 
                href={article.mediumUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                aria-label={`View live demo of ${article.title}`}
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{article.description}</p>
      </div>
     </a>
    </div>
  );
};

export default ArticleCard;