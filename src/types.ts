export interface Skill {
  name: string;
  level: number; // 1-100 or simply list
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  webUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  apkUrl?: string;
  demoUrl?: string;
  platforms?: string[]; // ['iOS', 'Android', 'Web']
  imageUrl?: string;
  // Deep-dive Case Study fields for Recruiter & ATS optimization
  problem?: string;
  solution?: string;
  responsibilities?: string[];
  challenges?: string;
  results?: string;
  businessImpact?: string;
  atsSummary?: string;
}

export interface Education {
  degree: string;
  field: string;
  duration: string;
  school: string;
  location: string;
}

export interface Achievement {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}
