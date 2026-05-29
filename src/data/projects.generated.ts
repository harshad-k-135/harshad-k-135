import type { Project } from '../types/types';

export const projects: Project[] = [
  {
    "title": "Groundwork AI: Intelligent Academic Research Agent",
    "shortDescription": "Autonomous multi agent system for comprehensive academic literature research with intelligent paper filtering, synthesis, and PDF export.",
    "longDescription": "Autonomous multi agent system for comprehensive academic literature research with intelligent paper filtering, synthesis, and PDF export. features • architecture • installation • usage • api",
    "stack": [
      "Next.js",
      "React",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "CrewAI",
      "Docker",
      "Python"
    ],
    "githubUrl": "https://github.com/harshad-k-135/groundwork_ai",
    "featured": true,
    "tags": [
      "Next.js",
      "React",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "CrewAI",
      "Docker",
      "Python",
      "AI Systems",
      "Computer Vision",
      "Research",
      "Infra",
      "Edge",
      "Web"
    ],
    "architectureNotes": [
      "🏗️ Architecture",
      "System Overview ┌─────────────────────────────────────────────────────────────────┐ │ Frontend (React + Vite) │",
      "Data Flow: Query to Output 1. User submits topic → Frontend sends POST /research/stream 2. Backend validates input (1 20 results, string sanitization) 3. Query Strategist decompos…"
    ],
    "learnings": [],
    "category": "AI Systems",
    "summary": "Autonomous multi agent system for comprehensive academic literature research with intelligent paper filtering, synthesis, and PDF export. Autonomous multi agent system for comprehensive academic literature research with intelligent paper filtering, synthesis,…",
    "reviewStatus": "needs-review"
  },
  {
    "title": "📧 AI-Powered Email Agent",
    "shortDescription": "A local, privacy focused email automation tool that uses AI to generate personalized emails for multiple recipients. Built with Qwen2.5 0.5B Instruct language model and Gmail API integration.",
    "longDescription": "A local, privacy focused email automation tool that uses AI to generate personalized emails for multiple recipients. Built with Qwen2.5 0.5B Instruct language model and Gmail API integration. 🤖 AI Generated Emails : Uses Qwen2.5 0.5B Instruct LLM to write unique, personalized emails for each recipient ⚡ Ultra Fast : Generates emails in 1 3 seconds on GPU, 5 10 seconds on CPU 🔒 Completely Local : All AI processing…",
    "stack": [
      "React",
      "PyTorch",
      "TensorFlow",
      "PostgreSQL",
      "Python"
    ],
    "githubUrl": "https://github.com/harshad-k-135/mail_generator",
    "featured": false,
    "tags": [
      "React",
      "PyTorch",
      "TensorFlow",
      "PostgreSQL",
      "Python",
      "AI Systems",
      "Computer Vision",
      "Research",
      "Infra",
      "Web"
    ],
    "architectureNotes": [
      "🏗️ Architecture"
    ],
    "learnings": [],
    "category": "LLM Apps",
    "summary": "A local, privacy focused email automation tool that uses AI to generate personalized emails for multiple recipients. Built with Qwen2.5 0.5B Instruct language model and Gmail API integration. A local, privacy focused email automation tool that uses AI to gene…",
    "reviewStatus": "needs-review"
  },
  {
    "title": "🚀 Enhanced Stock Price Prediction with AI Sentiment Analysis",
    "shortDescription": "1. Clone the repository : git clone https://github.com/harshad k 135/price prediction.git 2. Navigate to directory : cd price prediction 3. Run the application : python stock predictor.py 4. Open browser : Automatically…",
    "longDescription": "1. Clone the repository : git clone https://github.com/harshad k 135/price prediction.git 2. Navigate to directory : cd price prediction 3. Run the application : python stock predictor.py 4. Open browser : Automatically opens at http://127.0.0.1:5000 5. Start predicting : Enter any stock ticker (AAPL, TSLA, GOOGL, etc.) 🎯 Ready to predict the future with AI powered sentiment analysis? Just run: python stock predict…",
    "stack": [
      "Next.js",
      "PyTorch",
      "TensorFlow",
      "Python"
    ],
    "githubUrl": "https://github.com/harshad-k-135/price_prediction",
    "featured": false,
    "tags": [
      "Next.js",
      "PyTorch",
      "TensorFlow",
      "Python",
      "AI Systems",
      "Computer Vision",
      "Research",
      "Infra",
      "Edge",
      "Web"
    ],
    "architectureNotes": [
      "🎯 Overview An advanced AI powered stock price prediction system that combines machine learning with real time financial sentiment analysis using FinBERT. The system leverages Yah…",
      "🏗️ Architecture Enhanced Single File Application (stock predictor.py) ├── 🧠 FinBERT Integration Financial sentiment analysis ├── 📊 TensorFlow Model 6 feature neural network (OH…",
      "1. Sentiment Analysis Pipeline Fetches 6 months of financial news from Yahoo Finance Processes each article through FinBERT (ProsusAI/finbert) Calculates weighted sentiment scores…"
    ],
    "learnings": [],
    "category": "ML Systems",
    "summary": "1. Clone the repository : git clone https://github.com/harshad k 135/price prediction.git 2. Navigate to directory : cd price prediction 3. Run the application : python stock predictor.py 4. Open browser : Automatically… 1. Clone the repository : git clone ht…",
    "reviewStatus": "needs-review"
  },
  {
    "title": "🚗 Autonomous Vehicular Simulation",
    "shortDescription": "A comprehensive Unity based autonomous vehicle simulation that integrates advanced machine learning models for realistic self driving car behavior. This project demonstrates the fusion of computer graphics, physics simu…",
    "longDescription": "A comprehensive Unity based autonomous vehicle simulation that integrates advanced machine learning models for realistic self driving car behavior. This project demonstrates the fusion of computer graphics, physics simulation, and artificial intelligence to create an intelligent transportation system in a virtual city environment. 2. Set Up Python Environment bash Create virtual environment python m venv venv",
    "stack": [
      "ONNX",
      "Python"
    ],
    "githubUrl": "https://github.com/harshad-k-135/autonomous_vehicular_simulation",
    "featured": false,
    "tags": [
      "ONNX",
      "Python",
      "AI Systems",
      "Computer Vision",
      "Research",
      "Infra",
      "Edge",
      "Web"
    ],
    "architectureNotes": [
      "🔬 Machine Learning Pipeline Multi Target Regression : Separate models for speed, steering, and brake control XGBoost & LightGBM : High performance gradient boosting algorithms. F…",
      "🏗️ System Architecture ┌─────────────────┐ ┌──────────────────┐ ┌─────────────────┐ │ Unity Engine │ │ Flask Server │ │ ML Models │",
      "Model Architecture Speed Prediction : XGBoost Regressor (R² = 0.96+) Steering Control : LightGBM Regressor (R² = 0.95+) Brake Control : LightGBM Regressor (R² = 1.00)"
    ],
    "learnings": [],
    "category": "Computer Vision",
    "summary": "A comprehensive Unity based autonomous vehicle simulation that integrates advanced machine learning models for realistic self driving car behavior. This project demonstrates the fusion of computer graphics, physics simu… A comprehensive Unity based autonomous…",
    "reviewStatus": "needs-review"
  },
  {
    "title": "Face Recognition Model Using PyTorch",
    "shortDescription": "The training process involves data preprocessing, augmentation, model architecture design, training, evaluation, and visualization of results. The model is optimized for GPU/TPU acceleration to handle large scale face d…",
    "longDescription": "The training process involves data preprocessing, augmentation, model architecture design, training, evaluation, and visualization of results. The model is optimized for GPU/TPU acceleration to handle large scale face datasets efficiently. The training process included data augmentation techniques such as: Random rotation Horizontal flipping Brightness and contrast adjustments",
    "stack": [
      "PyTorch",
      "Python"
    ],
    "githubUrl": "https://github.com/harshad-k-135/face-recognition",
    "featured": false,
    "tags": [
      "PyTorch",
      "Python",
      "AI Systems",
      "Computer Vision",
      "Web"
    ],
    "architectureNotes": [
      "Overview This project implements a deep learning based Face Recognition Model using PyTorch . The model is designed to classify images of individuals into one of 31 distinct class…",
      "Model Architecture The model is built using PyTorch and leverages a pretrained ResNet50 as its backbone. The architecture is designed for high accuracy and efficient learning, inc…"
    ],
    "learnings": [],
    "category": "Computer Vision",
    "summary": "The training process involves data preprocessing, augmentation, model architecture design, training, evaluation, and visualization of results. The model is optimized for GPU/TPU acceleration to handle large scale face d… The training process involves data pre…",
    "reviewStatus": "needs-review"
  },
  {
    "title": "Gesture-Controlled Mouse Pointer",
    "shortDescription": "1. Clone the repository: 2. Install the required libraries",
    "longDescription": "1. Clone the repository: 2. Install the required libraries",
    "stack": [
      "OpenCV",
      "Python"
    ],
    "githubUrl": "https://github.com/harshad-k-135/gesture-controlled-pointer",
    "featured": false,
    "tags": [
      "OpenCV",
      "Python",
      "Computer Vision",
      "Web"
    ],
    "architectureNotes": [
      "Overview This project implements a gesture controlled mouse pointer using advanced computer vision techniques. By utilizing libraries such as OpenCV and MediaPipe, the system trac…"
    ],
    "learnings": [
      "Key Learnings 1. Advanced Computer Vision : Developed a deeper understanding of real time hand tracking and gesture recognition. 2. Library Integration : Enhan…"
    ],
    "category": "Computer Vision",
    "summary": "1. Clone the repository: 2. Install the required libraries 1. Clone the repository: 2. Install the required libraries Overview This project implements a gesture controlled mouse pointer using advanced computer vision techniques. By utilizing libraries such as…",
    "reviewStatus": "ready"
  }
];

