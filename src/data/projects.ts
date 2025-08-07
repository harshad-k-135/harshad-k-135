import { Project } from '../types/types';

export const projects: Project[] = [
  {
    title: 'K-Map Solver',
    description: 'K-Map Solver is solution that simplifies Boolean expressions using minterms or maxterms, suitable for digital logic design students and professionals.',
    technologies: ['Python', 'C++', 'JavaScript'],
    githubUrl: 'https://www.kmapsolver.com',
  },
  
  {
    title: 'Stock Price Prediction',
    description: 'A machine learning model that predicts stock price of next day using historical data and FF neural network.',
    technologies: ['Python', 'Matplotlib', 'Pandas', 'Scikit-learn', 'Tensorflow', 'YFinance'],
    githubUrl: 'https://github.com/harshad-k-135/price_prediction',
  },
  {
    title: 'Gesture Controlled Mouse Pointer',
    description: 'A gesture-controlled mouse pointer using computer vision. System tracks hand gestures to control the mouse pointer.',
    technologies: ['Python', 'OpenCV', 'MediaPipe'],
    githubUrl: 'https://github.com/harshad-k-135/gesture-controlled-pointer',
  },
  {
    title: 'Autonomous Vehicular Simulation',
    description: 'This project creates an AI-driven vehicular simulation demonstrating autonomous driving via adaptive speed, real-time navigation, and traffic awareness.',
    technologies: ['Blender', 'C#', 'Flask', 'Pandas', 'Python', 'Unity'],
    githubUrl: 'https://github.com/harshad-k-135/autonomous_vehicular_simulation',
  },
];