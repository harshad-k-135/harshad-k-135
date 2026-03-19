export interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
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