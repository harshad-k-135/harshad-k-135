export interface Project {
  title: string;
  shortDescription: string;
  longDescription: string;
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  tags: string[];
  architectureNotes: string[];
  learnings: string[];
  category: string;
  summary?: string;
  reviewStatus?: 'ready' | 'needs-review';
  subtitle?: string;
  description?: string;
  technologies?: string[];
  liveUrl?: string;
  badge?: string;
  architecture?: string;
  impact?: string;
}

export interface Article {
  title: string;
  description: string;
  link: string;
  readingTime?: string;
}

export interface Publication {
  title: string;
  venue: string;
  date: string;
  description: string;
  link?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}