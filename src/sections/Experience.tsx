import React from 'react';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';

const Experience: React.FC = () => {
  return (
    <AnimatedSection id="experience" className="py-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Experience" />

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h3 className="text-xl text-white tracking-tight">Computer Vision Intern</h3>
              <p className="text-sm text-white/60 mt-1">Thelios AI · Hybrid, Pune</p>
            </div>
            <p className="text-sm text-orange-300">Jun 2025 - Sept 2025</p>
          </div>

          <ul className="mt-6 space-y-4">
            <li className="text-sm text-white/70 leading-relaxed flex items-start gap-2">
              <span className="mt-2 inline-flex w-1.5 h-1.5 rounded-full bg-orange-400/80" />
              <span>
                Implemented a YOLOv11n-based detection pipeline with OCR integration, achieving 98.5% precision on a constrained in-house dataset and reducing manual labeling effort by 90%.
              </span>
            </li>
            <li className="text-sm text-white/70 leading-relaxed flex items-start gap-2">
              <span className="mt-2 inline-flex w-1.5 h-1.5 rounded-full bg-orange-400/80" />
              <span>
                Optimized the vision model with INT8 quantization, reducing deployment footprint by 75% for resource-constrained inference.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;
