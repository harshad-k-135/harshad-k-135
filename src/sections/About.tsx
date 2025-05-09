import React from 'react';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';
import { Code, Music, Cpu, Asterisk, AudioWaveform, Brain, BookOpen, Laptop, GraduationCap, Award, Computer } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Artificial Intelligence', icon: Brain, category: 'AI' },
    // { name: 'Embedded Systems', icon: BrainCircuit, category: 'Electronics' },
    // { name: 'Computer Vision', icon: Code, category: 'AI' },
    // { name: 'Robotics', icon: Code, category: 'AI' },
    { name: 'Signal Processing', icon: AudioWaveform, category: 'Electronics' },
    // { name: 'Control Systems', icon: Cpu, category: 'Electronics' },
    // { name: 'Data Analysis', icon: Code, category: 'AI' },
    // { name: 'IoT Development', icon: BrainCircuit, category: 'Electronics' }
    { name: 'Machine Learning', icon: Laptop, category: 'AI' },
    { name: 'Natural Language Processing', icon: Code, category: 'AI' },
    // { name: 'Embedded Systems', icon: BrainCircuit, category: 'Electronics' },
    // { name: 'Computer Vision', icon: Code, category: 'AI' },
    // { name: 'Robotics', icon: Code, category: 'AI' },
    // { name: 'Signal Processing', icon: Cpu, category: 'Electronics' },
    // { name: 'Control Systems', icon: Cpu, category: 'Electronics' },
    // { name: 'Data Analysis', icon: Code, category: 'AI' },
    // { name: 'IoT Development', icon: BrainCircuit, category: 'Electronics' }
    { name: 'Digital Communication', icon: Cpu, category: 'Electronics' },
    // { name: 'Embedded Systems', icon: BrainCircuit, category: 'Electronics' },
    // { name: 'Computer Vision', icon: Code, category: 'AI' },
    // { name: 'Robotics', icon: Code, category: 'AI' },
    // { name: 'Signal Processing', icon: Cpu, category: 'Electronics' },
    // { name: 'Control Systems', icon: Cpu, category: 'Electronics' },
    // { name: 'Data Analysis', icon: Code, category: 'AI' },
    // { name: 'IoT Development', icon: BrainCircuit, category: 'Electronics' }},
    { name: 'Pattern Recognition', icon: Asterisk, category: 'Electronics' },
    // { name: 'Embedded Systems', icon: BrainCircuit, category: 'Electronics' },
    // { name: 'Computer Vision', icon: Code, category: 'AI' },
    // { name: 'Robotics', icon: Code, category: 'AI' },
    // { name: 'Signal Processing', icon: Cpu, category: 'Electronics' },
    // { name: 'Control Systems', icon: Cpu, category: 'Electronics' },
    // { name: 'Data Analysis', icon: Code, category: 'AI' },
    // { name: 'IoT Development', icon: BrainCircuit, category: 'Electronics' }
    { name: 'Musical Instruments', icon: Music, category: 'Electronics' },
    { name: 'Operating Systems', icon: Computer, category: 'Electronics' },
  ];

  return (
    <AnimatedSection id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="About Me" 
          />

        <div className="flex flex-col md:flex-row gap-10 mt-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <BookOpen size={24} className="mr-2 text-indigo-600 dark:text-indigo-400" />
              Who Am I?
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
              I'm an Electronics and Computer Engineering student with a deep interest in Artificial Intelligence and its practical applications. Most of my work is focused on developing AI-driven solutions through research projects and prototypes, especially in areas like ML systems, NLP, and model optimization. Alongside this, I have a strong curiosity for embedded systems and like exploring how AI models can be integrated with hardware in efficient real-world scenarios. I am driven by the goal of building meaningful purpose-driven technology through continuous learning and problem solving. Along with the technical aspects, I am a music enthusiast and have learnt classical tabla for 3 years.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 flex items-center">
              <GraduationCap size={24} className="mr-2 text-indigo-600 dark:text-indigo-400" />
              Education
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-600 dark:border-indigo-400 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white">Higher Secondary Education</h4>
                <p className="text-gray-600 dark:text-gray-300">D.D. Vispute College, 2021-2023</p>
                <p className="text-gray-600 dark:text-gray-300">Focus: Physics, Chemistry, Maths</p>
              </div>
              <div className="border-l-4 border-indigo-600 dark:border-indigo-400 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white">B.E. in Electronics and Computer Engineering</h4>
                <p className="text-gray-600 dark:text-gray-300">PICT, 2023-Present</p>
                <p className="text-gray-600 dark:text-gray-300">Focus: Electronics, Programming, AI-ML</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Award size={24} className="mr-2 text-indigo-600 dark:text-indigo-400" />
              Skills & Expertise
            </h3>
            
            <div className="space-y-6">
              <div>
                {/* <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">AI Technologies</h4> */}
                <div className="grid grid-cols-2 gap-4">
                  {skills.filter(skill => skill.category === 'AI').map((skill, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <skill.icon size={20} className="mr-2 text-indigo-600 dark:text-indigo-400" />
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                  {skills.filter(skill => skill.category === 'Electronics').map((skill, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <skill.icon size={20} className="mr-2 text-indigo-600 dark:text-indigo-400" />
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
           
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Programming Languages & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'TensorFlow', 'PyTorch', 'C/C++', 'Pandas', 'Numpy', 'Sklearn', 'Matplotlib', 'Java', 'Unity', 'OpenCV'].map((item, index) => (
                    <span key={index} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">
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