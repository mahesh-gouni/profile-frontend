export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  summary: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  features: string[];
  stats: {
    label: string;
    value: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  type: 'work' | 'education';
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface User {
   fullName :string;
     email: string;
     subject:string;
     message :string;
}