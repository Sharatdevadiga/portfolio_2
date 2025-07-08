import { Skill } from '@/types';

export const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    icon: "⚛️",
    proficiency: "advanced",
    category: "frontend"
  },
  {
    name: "Next.js",
    icon: "▲",
    proficiency: "advanced",
    category: "frontend"
  },
  {
    name: "TypeScript",
    icon: "TS",
    proficiency: "advanced",
    category: "frontend"
  },
  {
    name: "JavaScript",
    icon: "JS",
    proficiency: "expert",
    category: "frontend"
  },
  {
    name: "Redux",
    icon: "🔄",
    proficiency: "intermediate",
    category: "frontend"
  },
  {
    name: "Tailwind",
    icon: "🎨",
    proficiency: "advanced",
    category: "frontend"
  },
  {
    name: "HTML5",
    icon: "📄",
    proficiency: "expert",
    category: "frontend"
  },
  {
    name: "CSS3",
    icon: "🎨",
    proficiency: "expert",
    category: "frontend"
  },
  
  // Backend
  {
    name: "Node.js",
    icon: "🟢",
    proficiency: "advanced",
    category: "backend"
  },
  {
    name: "Express.js",
    icon: "⚡",
    proficiency: "advanced",
    category: "backend"
  },
  {
    name: "Python",
    icon: "🐍",
    proficiency: "intermediate",
    category: "backend"
  },
  
  // Database
  {
    name: "MongoDB",
    icon: "🍃",
    proficiency: "intermediate",
    category: "database"
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    proficiency: "intermediate",
    category: "database"
  },
  
  // Tools & Cloud
  {
    name: "Git",
    icon: "📋",
    proficiency: "advanced",
    category: "tools"
  },
  {
    name: "AWS",
    icon: "☁️",
    proficiency: "beginner",
    category: "cloud"
  },
  {
    name: "Docker",
    icon: "🐳",
    proficiency: "intermediate",
    category: "tools"
  }
];

export const skillCategories = [
  "frontend",
  "backend", 
  "database",
  "tools",
  "cloud"
];

export const getSkillsByCategory = (category: string): Skill[] => {
  return skills.filter(skill => skill.category === category);
};

export const getAllSkillCategories = (): string[] => {
  return [...new Set(skills.map(skill => skill.category))];
};
