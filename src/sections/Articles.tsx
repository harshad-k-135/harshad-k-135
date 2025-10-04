import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ArticleCard from '../components/ArticleCard';
import AnimatedSection from '../components/AnimatedSection';
import { articles } from '../data/articles';

const Articles: React.FC = () => {
  return (
    <AnimatedSection id="articles" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Articles" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Articles;