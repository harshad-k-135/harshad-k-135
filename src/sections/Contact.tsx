import React from 'react';
import SectionTitle from '../components/SectionTitle';
import SocialLink from '../components/SocialLink';
import AnimatedSection from '../components/AnimatedSection';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <AnimatedSection id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Get in Touch" 
          subtitle="Interested in collaboration or have questions? Let's connect!"
        />
        
        <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                I'm always open to discussing new projects, innovative ideas, or opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
              <SocialLink 
                href="mailto:harshadkarle1305@gmail.com" 
                icon={Mail}
                label="Email Me"
              />
              <SocialLink 
                href="https://www.linkedin.com/in/harshadkarle1305/" 
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialLink 
                href="https://github.com/harshad-k-135" 
                icon={Github}
                label="GitHub"
              />
              <SocialLink 
                href="https://x.com/harshad_k_1305" 
                icon={Twitter}
                label="Twitter"
              />
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Prefer a direct message? Feel free to reach out.
              </p>
              <a 
                href="mailto:harshadkarle1305@gmail.com"
                className="mt-3 inline-block px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-md shadow-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all duration-300"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;