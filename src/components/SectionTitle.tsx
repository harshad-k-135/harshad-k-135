import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-medium text-white mb-2 tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto w-16 h-[2px] bg-orange-400/70 rounded" />
    </div>
  );
};

export default SectionTitle;