export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}