import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';

const spectrumPoints = [
  {
    title: 'Inference Efficiency',
    subtitle: 'Constrained hardware',
    x: 24,
    y: 22,
    reason: 'I care about squeezing reliable performance out of limited memory, latency, and deployment budgets.',
  },
  {
    title: 'Pipelines + Orchestration',
    subtitle: 'Capability with control',
    x: 74,
    y: 24,
    reason: 'When systems get more capable, the orchestration layer becomes the thing that keeps them usable.',
  },
  {
    title: 'Retrieval Grounding',
    subtitle: 'Trust under pressure',
    x: 26,
    y: 74,
    reason: 'Grounding matters most when the system has to answer accurately, not just confidently.',
  },
  {
    title: 'Systems + Backends',
    subtitle: 'Unconstrained software',
    x: 76,
    y: 76,
    reason: 'I design for the backend trade-space where reliability, throughput, and maintainability intersect.',
  },
];

const About: React.FC = () => {
  return (
    <AnimatedSection id="about" className="py-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="The Spectrum"
          subtitle="Constraint-aware design lives in the tension between hardware limits and systems capability."
        />

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.02] p-5 md:p-7 overflow-hidden">
          <div className="relative h-[540px] md:h-[620px] rounded-2xl border border-white/5 bg-black/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(251,146,60,0.08),_transparent_45%)]" />
            <div className="absolute inset-0 grid-mask-bg opacity-40" />

            <svg className="absolute inset-0 z-10 h-full w-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <filter id="axis-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="0.55" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <line x1="50" y1="10" x2="50" y2="90" stroke="rgba(251,191,36,0.08)" strokeWidth="0.55" strokeLinecap="round" filter="url(#axis-glow)" />
              <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(251,191,36,0.08)" strokeWidth="0.55" strokeLinecap="round" filter="url(#axis-glow)" />
              <line x1="50" y1="10" x2="50" y2="90" stroke="rgba(251,191,36,0.72)" strokeWidth="0.45" strokeLinecap="round" />
              <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(251,191,36,0.72)" strokeWidth="0.45" strokeLinecap="round" />
            </svg>

            <div className="absolute left-4 top-4 md:left-6 md:top-6 text-[10px] uppercase tracking-[0.32em] text-yellow-200 drop-shadow-[0_0_8px_rgba(251,191,36,0.45)] z-20">
              Constraint vs Sophistication
            </div>
            <div className="absolute left-1/2 top-[5%] -translate-x-1/2 text-[10px] uppercase tracking-[0.32em] text-yellow-200 drop-shadow-[0_0_8px_rgba(251,191,36,0.45)] z-20 whitespace-nowrap">
              More capability ↑
            </div>
            <div className="absolute left-1/2 bottom-[5%] -translate-x-1/2 text-[10px] uppercase tracking-[0.32em] text-yellow-200 drop-shadow-[0_0_8px_rgba(251,191,36,0.45)] z-20 whitespace-nowrap">
              Fewer constraints ↓
            </div>
            <div className="absolute left-[4%] top-2/3 -translate-y-1/2 -rotate-90 text-[10px] uppercase tracking-[0.3em] text-yellow-200 drop-shadow-[0_0_8px_rgba(251,191,36,0.45)] origin-left z-20 whitespace-nowrap">
              Constrained hardware
            </div>
            <div className="absolute right-[4%] top-2/3 -translate-y-1/2 rotate-90 text-[10px] uppercase tracking-[0.3em] text-yellow-200 drop-shadow-[0_0_8px_rgba(251,191,36,0.45)] origin-right z-20 bg-black/20 px-1 rounded whitespace-nowrap">
              Unconstrained software
            </div>

            {spectrumPoints.map((point, index) => (
              <motion.button
                key={point.title}
                type="button"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                className="group absolute -translate-x-1/2 -translate-y-1/2 text-left"
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
                aria-label={`${point.title}: ${point.reason}`}
              >
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-3">
                  <span className="relative flex h-4 w-4">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-orange-400/40 animate-ping" />
                    <span className="relative inline-flex h-4 w-4 rounded-full border border-orange-300 bg-orange-500 shadow-[0_0_18px_rgba(251,146,60,0.35)]" />
                  </span>
                  <div className="rounded-2xl border border-white/10 bg-black/70 px-3 py-2 shadow-2xl shadow-black/30 backdrop-blur-md transition-all duration-300 group-hover:border-orange-500/30 group-hover:-translate-y-0.5">
                    <div className="text-sm font-medium text-white">{point.title}</div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-orange-300/70">{point.subtitle}</div>
                    <div className="mt-2 max-w-[220px] text-xs leading-relaxed text-white/60 opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-24">
                      {point.reason}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;