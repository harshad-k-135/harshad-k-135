import React from 'react';
import { ExternalLink, Clock } from 'lucide-react';
import { Article } from '../types/types';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const getButtonLabel = (url: string) => {
    if (url.includes('linkedin.com')) return 'Read on LinkedIn';
    if (url.includes('medium.com')) return 'Read on Medium';
    return 'Read Article';
  };

  return (
    <div className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 dark:border-gray-800 hover:-translate-y-1">
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {article.title}
          </h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed flex-grow">
          {article.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
          {article.readingTime && (
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
              <Clock size={14} className="mr-1" />
              {article.readingTime}
            </div>
          )}
          
          <a 
            href={article.link}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            {getButtonLabel(article.link)}
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;