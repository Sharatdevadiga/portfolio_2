// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'desktop' | 'ai/ml' | 'other';
}

// Blog Post Types
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  content: string;
  featured: boolean;
}

// Skill Types
export interface Skill {
  name: string;
  icon?: string;
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'cloud' | 'mobile' | 'other';
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
}

// SEO Types
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  ogImage?: string;
}
