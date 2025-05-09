import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
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
                Building intelligent systems that bridge the digital and physical worlds.
                Passionate about AI, machine learning, and electronics.
              </p>
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

          {/* Button */}
          <div className="mt-20 flex justify-center md:justify-center">
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-md shadow-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all duration-300 hover:shadow-lg"
            >
              Discover More
              <ArrowDown size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
