export interface Skill {
  name: string;
  icon: string;
  color: string;
  category: string;
}

export const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    icon: "⚛️",
    color: "#61DAFB",
    category: "Frontend"
  },
  {
    name: "Next.js",
    icon: "▲",
    color: "#FFFFFF",
    category: "Frontend"
  },
  {
    name: "TypeScript",
    icon: "TS",
    color: "#3178C6",
    category: "Frontend"
  },
  {
    name: "JavaScript",
    icon: "JS",
    color: "#F7DF1E",
    category: "Frontend"
  },
  {
    name: "Redux",
    icon: "🔄",
    color: "#764ABC",
    category: "Frontend"
  },
  {
    name: "Zustand",
    icon: "🐻",
    color: "#F59E0B",
    category: "Frontend"
  },
  {
    name: "Tailwind",
    icon: "🎨",
    color: "#06B6D4",
    category: "Frontend"
  },
  {
    name: "HTML5",
    icon: "📄",
    color: "#E34F26",
    category: "Frontend"
  },
  {
    name: "CSS3",
    icon: "🎨",
    color: "#1572B6",
    category: "Frontend"
  },
  
  // Backend
  {
    name: "Node.js",
    icon: "🟢",
    color: "#339933",
    category: "Backend"
  },
  {
    name: "Express.js",
    icon: "⚡",
    color: "#FFFFFF",
    category: "Backend"
  },
  {
    name: "BullMQ",
    icon: "📬",
    color: "#E0234E",
    category: "Backend"
  },
  {
    name: "Python",
    icon: "🐍",
    color: "#3776AB",
    category: "Backend"
  },
  
  // Database
  {
    name: "MongoDB",
    icon: "🍃",
    color: "#47A248",
    category: "Database"
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    color: "#336791",
    category: "Database"
  },
  
  // Tools & Cloud
  {
    name: "Git",
    icon: "📋",
    color: "#F05032",
    category: "Tools"
  },
  {
    name: "AWS",
    icon: "☁️",
    color: "#FF9900",
    category: "Cloud"
  },
  {
    name: "Docker",
    icon: "🐳",
    color: "#2496ED",
    category: "Tools"
  },

  // AI Tools
  {
    name: "Claude",
    icon: "🤖",
    color: "#D97757",
    category: "AI Tools"
  }
];
