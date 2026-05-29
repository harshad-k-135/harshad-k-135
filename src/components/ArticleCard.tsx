import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Clock } from 'lucide-react';
import { Article } from '../types/types';
import { Card, CardContent, CardHeader } from './ui/card';

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
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="group relative h-full"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.12),_transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <Card className="relative h-full overflow-hidden transition-all duration-300 group-hover:border-orange-500/30 group-hover:-translate-y-1 group-hover:shadow-[0_0_32px_rgba(251,146,60,0.1)]">
        <CardHeader className="pb-4">
          <h3 className="text-xl font-medium text-white group-hover:text-orange-300 transition-colors leading-tight">
            {article.title}
          </h3>
        </CardHeader>

        <CardContent className="flex-grow flex flex-col">
          <p className="text-white/65 mb-6 text-sm leading-relaxed flex-grow">
            {article.description}
          </p>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
            {article.readingTime && (
              <div className="flex items-center text-xs text-white/45">
                <Clock size={14} className="mr-1" />
                {article.readingTime}
              </div>
            )}

            <a 
              href={article.link}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-300 hover:text-orange-200 transition-colors"
            >
              {getButtonLabel(article.link)}
              <ExternalLink size={14} />
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ArticleCard;