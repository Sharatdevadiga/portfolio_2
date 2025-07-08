import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: "entertainment-hub",
    title: "Entertainment Hub",
    description: "A comprehensive platform for discovering and tracking movies, TV shows, and books. Features personalized recommendations, watchlists, and social sharing capabilities.",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/entertainment-hub",
    liveUrl: "https://entertainment-hub-demo.vercel.app",
    featured: true,
    category: "web"
  },
  {
    id: "ai-chat-assistant",
    title: "AI Chat Assistant",
    description: "An intelligent chatbot built with OpenAI's GPT API. Features context-aware conversations, message history, and customizable personalities.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/ai-chat-assistant",
    liveUrl: "https://ai-chat-demo.vercel.app",
    featured: true,
    category: "ai/ml"
  },
  {
    id: "task-management-app",
    title: "Task Management Dashboard",
    description: "A modern task management application with real-time collaboration, drag-and-drop functionality, and advanced filtering options.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    technologies: ["Vue.js", "Firebase", "Vuetify", "Cloud Functions"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager-demo.web.app",
    featured: true,
    category: "web"
  },
  {
    id: "mobile-fitness-tracker",
    title: "Fitness Tracker Mobile App",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics. Includes social features and achievement system.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    technologies: ["React Native", "Redux", "SQLite", "Charts.js"],
    githubUrl: "https://github.com/yourusername/fitness-tracker",
    featured: false,
    category: "mobile"
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment processing, inventory management, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    technologies: ["React", "Node.js", "Stripe", "MongoDB", "Express"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.herokuapp.com",
    featured: false,
    category: "web"
  },
  {
    id: "data-visualization-tool",
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with real-time updates and customizable chart types.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    technologies: ["D3.js", "React", "Python", "Flask", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/data-viz-dashboard",
    featured: false,
    category: "web"
  }
];

export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getProjectById = (id: string) => projects.find(project => project.id === id);
export const getProjectsByCategory = (category: Project['category']) => 
  projects.filter(project => project.category === category);
export const getProjectsByTechnology = (tech: string) => 
  projects.filter(project => 
    project.technologies.some(technology => 
      technology.toLowerCase().includes(tech.toLowerCase())
    )
  );
