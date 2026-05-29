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

const paperUrl = 'https://ieeexplore.ieee.org/document/11447840';

const Publications: React.FC = () => {
  return (
    <AnimatedSection id="publications" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Publications" />
        
        <div className="mt-12 space-y-6">
          {publications.map((pub, index) => (
            <div 
              key={index} 
              className="bg-white/[0.02] rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-white/10"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="p-3 bg-orange-500/10 text-orange-300 rounded-lg shrink-0 w-fit">
                  <FileText size={24} />
                </div>
                <div className="flex-grow">
                  <a
                    href={paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-orange-300 mb-2 inline-block hover:text-orange-200 transition-colors hover:underline"
                  >
                    {pub.title}
                  </a>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
                    <div className="flex items-center text-sm text-white/55">
                      <MapPin size={14} className="mr-1" />
                      {pub.venue}
                    </div>
                    <div className="flex items-center text-sm text-white/55">
                      <Calendar size={14} className="mr-1" />
                      {pub.date}
                    </div>
                  </div>
                  <p className="text-white/65 leading-relaxed">
                    {pub.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {pub.link && (
                      <a 
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        Live Project
                        <ExternalLink size={16} />
                      </a>
                    )}
                    <a 
                      href={paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/25 bg-orange-500/10 text-orange-200 hover:bg-orange-500/15 transition-colors"
                    >
                      See Paper
                      <ExternalLink size={16} />
                    </a>
                  </div>
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
