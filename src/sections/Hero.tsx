import React from 'react';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  const renderLetters = (word: string) =>
    word.split('').map((ch, idx) => (
      <span className="btn-letter" key={`${word}-${idx}`}>
        {ch}
      </span>
    ));

  return (
    <section id="hero" className="min-h-[72vh] flex items-center py-20">
      <div className="max-w-6xl mx-auto px-6 w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/60">
                "I engineer systems that don't fail
                <br className="hidden sm:block" /> when you're not watching."
              </h1>
            </motion.div>

            <p className="mt-5 text-white/60 max-w-2xl text-base sm:text-lg leading-relaxed">
              I design production-grade pipelines for reliable retrieval, efficient
              inference, and robust orchestration across cloud and edge.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="btn-wrapper">
                <button className="btn px-6 py-3.5 focus:outline-none" type="button" onClick={scrollToProjects} aria-label="See projects">
                  <svg className="btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                  <div className="txt-wrapper">
                    <div className="txt-1 text-sm font-semibold tracking-wide">
                      {renderLetters('Projects')}
                    </div>
                    <div className="txt-2 text-sm font-semibold tracking-wide">
                      {renderLetters('Open')}
                    </div>
                  </div>
                </button>
              </div>

              {[{
                href: 'https://github.com/harshad-k-135',
                label: 'GitHub',
                icon: <Github size={16} />,
                external: true,
              }, {
                href: 'https://www.linkedin.com/in/harshadkarle1305/',
                label: 'LinkedIn',
                icon: <Linkedin size={16} />,
                external: true,
              }, {
                href: 'https://resumego.link/hmk1305',
                label: 'Resume',
                icon: <FileText size={16} />,
                external: true,
              }, {
                href: 'mailto:harshadkarle1305@gmail.com',
                label: 'Email',
                icon: <Mail size={16} />,
                external: false,
              }].map(({ href, label, icon, external }) => (
                <div className="btn-wrapper" key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="btn px-5 py-3.5 focus:outline-none"
                    aria-label={label}
                  >
                    <span className="btn-svg inline-flex items-center justify-center">{icon}</span>
                    <div className="txt-wrapper">
                      <div className="txt-1 text-sm font-semibold tracking-wide">{renderLetters(label)}</div>
                      <div className="txt-2 text-sm font-semibold tracking-wide">{renderLetters('Open')}</div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <motion.div
              className="relative border-gradient rounded-3xl p-2 stealth-surface"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
            >
              <img
                src="https://github.com/harshad-k-135/harshad-k-135/blob/main/new.jpg?raw=true"
                alt="portrait"
                className="w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-2xl object-cover border border-white/10"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
