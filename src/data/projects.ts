import { Project } from '../types/types';

export const projects: Project[] = [
  {
    title: 'Groundwork AI',
    subtitle: 'Multi-Agent Academic Research Assistant',
    description: 'A 4-agent pipeline (Query Strategist → Literature Retriever → Web Scout → Research Synthesizer) built to eliminate hallucinated citations. The LLM is deliberately excluded from the retrieval step — agents hit ArXiv, Semantic Scholar, OpenReview, ACL, IEEE, and Springer in parallel. Outputs: inline-cited field summaries, structured JSON, PDF export, persistent search history.',
    technologies: ['CrewAI', 'Groq', 'Llama 3.3 70B', 'FastAPI', 'React', 'ArXiv API', 'Semantic Scholar API', 'Tavily'],
    githubUrl: 'https://github.com/harshad-k-135/groundwork_ai',
    badge: 'Open Source',
  },
  {
    title: 'Multimodal Summarization Pipeline',
    subtitle: 'Vision-Language Research · PICT × Dr. Sheetal Sonawane',
    description: 'Multimodal feature extraction and alignment pipeline projecting vision and language embeddings into a shared latent space using contrastive learning with clustering. Includes a cluster scoring and filtering framework for high-quality concept grounding in downstream vision-language tasks. Paper in preparation.',
    technologies: ['PyTorch', 'HuggingFace', 'NLTK', 'Python', 'Contrastive Learning'],
    badge: 'Research',
  },
  {
    title: 'Autonomous Vehicular Simulation using AI',
    subtitle: 'Full Self-Driving Simulator with Real-Time Inference',
    description: 'FSD simulator with AI-driven steering, speed, and braking. Custom data logger captures simulation telemetry; ensemble Boosting models trained on logged data achieve near-perfect accuracy. Unity UI displays live model predictions feeding back into the simulation loop in real time.',
    technologies: ['Python', 'Unity', 'C#', 'Blender', 'Flask', 'Pandas'],
    githubUrl: 'https://github.com/harshad-k-135/autonomous_vehicular_simulation',
  },
  {
    title: 'Privacy-First Mail Generator',
    subtitle: 'Local-LLM Powered Outreach System',
    description: 'Automated, privacy-focused email generation system powered by a local Qwen2.5 0.5B model. Securely integrates with Gmail API via OAuth2, offering 100% data privacy with on-device processing and manual preview-and-approval workflows.',
    technologies: ['Python', 'PyTorch', 'Qwen2.5 (Hugging Face)', 'Gmail API', 'OAuth2'],
    githubUrl: 'https://github.com/harshad-k-135/mail_generator',
    badge: 'Privacy Focused'
  },
  {
    title: 'Enhanced Stock Price Prediction',
    subtitle: 'Numerical Modeling + Sentiment Analysis',
    description: 'AI-driven stock price predictor combining historical trend analysis (LSTM) with real-time financial market sentiment from news data (FinBERT). Features a responsive Flask-based web dashboard for live predictions across global indices.',
    technologies: ['Python', 'TensorFlow', 'FinBERT (Hugging Face)', 'Flask', 'yfinance'],
    githubUrl: 'https://github.com/harshad-k-135/price_prediction',
  },
  {
    title: 'Deep Learning Face Recognition',
    subtitle: 'High-Precision PyTorch Classification',
    description: 'Advanced computer vision system classifying individuals into 31 distinct categories with a record 99.68% accuracy. Optimized for high-performance inference using GPU/TPU acceleration and custom data augmentation techniques.',
    technologies: ['PyTorch', 'OpenCV', 'TensorFlow', 'Scikit-learn', 'CUDA'],
    githubUrl: 'https://github.com/harshad-k-135/face-recognition',
  },
  {
    title: 'Gesture Controlled Pointer',
    subtitle: 'Hands-Free PC Interaction System',
    description: 'Computer vision utility utilizing OpenCV and MediaPipe to implement real-time hand-tracking and gesture-based mouse control. High-responsiveness system providing a seamless way to interact with software without physical peripherals.',
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'Jupyter'],
    githubUrl: 'https://github.com/harshad-k-135/gesture-controlled-pointer',
  },
];