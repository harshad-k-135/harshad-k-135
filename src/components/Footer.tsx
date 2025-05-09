import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Harshad Karle. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/harshad-k-135" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
              aria-label="GitHub profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/harshadkarle1305/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:harshadkarle1305@gmail.com" 
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
              aria-label="Email contact"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;