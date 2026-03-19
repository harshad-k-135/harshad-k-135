import React from 'react';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';
import { 
  Code, Brain, BookOpen, GraduationCap, Award, 
  Bot, Eye, Layers, MessageSquare, FileText, 
  Cpu, Laptop 
} from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Artificial Intelligence', icon: Brain },
    { name: 'Machine Learning', icon: Laptop },
    { name: 'Natural Language Processing', icon: Code },
    { name: 'Agentic AI', icon: Bot },
    { name: 'Computer Vision', icon: Eye },
    { name: 'Multimodal AI', icon: Layers },
    { name: 'LLM Systems', icon: MessageSquare },
    { name: 'Research & Publications', icon: FileText },
  ];

  const tools = [
    'Python', 'TensorFlow', 'PyTorch', 'C/C++', 'Pandas', 'Numpy', 
    'Sklearn', 'Matplotlib', 'Java', 'Unity', 'OpenCV', 'CrewAI', 
    'LangChain', 'FastAPI', 'HuggingFace', 'Groq', 'YOLO', 'Docker', 'LLMs'
  ];

  return (
    <AnimatedSection id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" />

        <div className="flex flex-col md:flex-row gap-10 mt-12">
          <div className="md:w-1/2">
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a third-year Electronics & Computer Engineering student at 
                PICT Pune (GPA: 9.19/10) with production experience in Agentic AI, 
                Computer Vision, and Multimodal ML. I've shipped real systems — 
                a 4-agent research pipeline, a production CV system achieving 
                mAP@50-95 of 0.985, and ongoing multimodal research under faculty 
                guidance with a paper in preparation. I care about architecture 
                decisions, not just working code.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-6 flex items-center">
              <GraduationCap size={24} className="mr-2 text-indigo-600 dark:text-indigo-400" />
              Education
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-600 dark:border-indigo-400 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">B.E. in Electronics and Computer Engineering</h4>
                <p className="text-gray-600 dark:text-gray-300">Pune Institute of Computer Technology (PICT), 2023-Present</p>
                <p className="text-gray-600 dark:text-gray-300 italic">GPA: 9.19/10</p>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Focus: AI-ML, Computer Vision, Agentic Systems, Electronics</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Award size={24} className="mr-2 text-indigo-600 dark:text-indigo-400" />
              Skills & Expertise
            </h3>
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-sm transition-all border border-transparent hover:border-indigo-100 dark:hover:border-indigo-900">
                    <skill.icon size={20} className="mr-3 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
           
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                   <Code size={20} className="mr-2 text-indigo-600 dark:text-indigo-400" />
                   Programming Languages & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((item, index) => (
                    <span key={index} className="px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800 rounded-full text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;