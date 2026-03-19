import React from 'react';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';
import { FileText, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Publication } from '../types/types';

const publications: Publication[] = [
  {
    title: "KMap Solver: A Web-Based Application for Expression Minimization",
    venue: "2026 International Conference on Emerging Trends and Innovations in ICT (ICEI) — Pune, MH",
    date: "January 2026",
    description: "Developed an online solver for Karnaugh Maps achieving sub-10ms latency with 100% correctness. Integrated automated gate realization logic bridging boolean logic and physical circuit design. Presented to an international audience of researchers and ICT experts.",
    link: "https://kmapsolver.com/",
  }
];

const Publications: React.FC = () => {
  return (
    <AnimatedSection id="publications" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Publications" />
        
        <div className="mt-12 space-y-6">
          {publications.map((pub, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-800"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg shrink-0 w-fit">
                  <FileText size={24} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {pub.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <MapPin size={14} className="mr-1" />
                      {pub.venue}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar size={14} className="mr-1" />
                      {pub.date}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {pub.description}
                  </p>
                  {pub.link && (
                    <a 
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                    >
                      Live Project
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Publications;
