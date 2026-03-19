import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="text-center md:text-left">
          {/* Responsive layout */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between h-auto md:h-[45vh]">
            {/* Text content */}
            <div className="mt-6 md:mt-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                <span className="block">Harshad Manish Karle</span>
              </h1>
              <p className="mt-4 max-w-2xl mx-auto md:mx-0 text-xl text-gray-600 dark:text-gray-300">
                I build Agentic AI systems that ship — multi-agent pipelines, 
                multimodal research, and production CV at scale.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-row gap-4 justify-center md:justify-start">
                <a 
              href="https://drive.google.com/file/d/1KVk5B0BOnCLQAkGN-hmkd68tIKW9d_sp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all duration-300 font-bold text-lg"
            >
              View Resume
            </a>
                <button
                  onClick={scrollToProjects}
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all duration-300 font-medium"
                >
                  See Projects
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="mb-6 md:mb-0 md:mr-10">
              <img
                className="h-[300px] md:h-[350px] w-auto rounded-[25px] object-cover"
                src="https://github.com/harshad-k-135/harshad-k-135/blob/main/new.jpg?raw=true"
                alt="Harshad Karle"
              />
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-20 flex justify-center">
            <button
              onClick={scrollToAbout}
              className="animate-bounce p-2 text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
