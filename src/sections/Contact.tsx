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
          subtitle="Open to Agentic AI internships, Applied AI research roles, and collaborations. Currently available from June 2026."
        />
        
        <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
          <div className="p-8 md:p-12 text-center">
            <div className="mb-10">
              <p className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                Best way to reach me is LinkedIn or email.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
              <SocialLink 
                href="mailto:harshadkarle1305@gmail.com" 
                icon={Mail}
                label="Email"
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
                href="https://x.com/sanehuman_ai" 
                icon={Twitter}
                label="Twitter"
              />
            </div>
            
            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <a 
                href="mailto:harshadkarle1305@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all duration-300 font-bold text-lg"
              >
                <Mail size={20} />
                Email Me Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;