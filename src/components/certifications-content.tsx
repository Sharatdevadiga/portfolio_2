'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, Code, Trophy, Filter, ExternalLink } from "lucide-react";

export default function CertificationsContent() {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (category: string) => {
    setFilter(category);
  };

  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "AlmaBetter",
      date: "2024",
      description: "Comprehensive program covering React.js, Node.js, MongoDB, Express.js, and modern web development practices. Graduated as Top 3 in cohort of 100+ students.",
      skills: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "HTML/CSS"],
      image: "https://raw.githubusercontent.com/Sharatdevadiga/Portfolio/main/public/certificateImages/almabetter.png",
      status: "Completed",
      category: "Full Stack Development",
      achievement: "Top 3 in cohort of 100+"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2024",
      description: "300+ hours of coursework covering ES6, Regular Expressions, Debugging, Data Structures, and Algorithm Scripting challenges.",
      skills: ["JavaScript", "ES6", "Data Structures", "Algorithms", "Problem Solving"],
      image: "https://raw.githubusercontent.com/Sharatdevadiga/Portfolio/main/public/certificateImages/javaScript-DSA.png",
      status: "Completed",
      category: "Programming"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2023",
      description: "Comprehensive certification in HTML5, CSS3, Flexbox, CSS Grid, and responsive design principles with 5 practical projects.",
      skills: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Responsive Design"],
      image: "https://raw.githubusercontent.com/Sharatdevadiga/Portfolio/main/public/certificateImages/responsive-webDesign.png",
      status: "Completed",
      category: "Frontend Development"
    },
    {
      title: "React - The Complete Guide",
      issuer: "Jonas Schmedtmann",
      date: "2024",
      description: "Advanced React concepts including Hooks, Context API, Redux, Next.js, and modern React patterns with hands-on projects.",
      skills: ["React.js", "Redux", "Context API", "React Hooks", "Next.js"],
      image: "https://raw.githubusercontent.com/Sharatdevadiga/Portfolio/main/public/certificateImages/React-Next.jpg",
      status: "Completed",
      category: "Frontend Development"
    },
    {
      title: "Node.js, Express & MongoDB",
      issuer: "Jonas Schmedtmann",
      date: "2024",
      description: "Backend development with Node.js, Express.js, MongoDB, REST APIs, GraphQL, and authentication systems.",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication"],
      image: "https://raw.githubusercontent.com/Sharatdevadiga/Portfolio/main/public/certificateImages/Node-Express-Mongodb.jpg",
      status: "Completed",
      category: "Backend Development"
    },
    {
      title: "JavaScript Programming",
      issuer: "Jonas Schmedtmann",
      date: "2023",
      description: "Comprehensive JavaScript course covering modern ES6+ features, DOM manipulation, and advanced programming concepts.",
      skills: ["JavaScript", "ES6+", "DOM", "Async/Await", "OOP"],
      image: "https://raw.githubusercontent.com/Sharatdevadiga/Portfolio/main/public/certificateImages/javascript.jpg",
      status: "Completed",
      category: "Programming"
    },
    {
      title: "HTML & CSS Mastery",
      issuer: "Jonas Schmedtmann",
      date: "2023",
      description: "Complete HTML and CSS course covering modern layouts, responsive design, and advanced CSS techniques.",
      skills: ["HTML5", "CSS3", "Flexbox", "Grid", "Responsive Design"],
      image: "https://raw.githubusercontent.com/Sharatdevadiga/Portfolio/main/public/certificateImages/html-css.jpg",
      status: "Completed",
      category: "Frontend Development"
    },
    {
      title: "React Development",
      issuer: "HackerRank",
      date: "2024",
      description: "React development skills assessment covering components, hooks, state management, and modern React patterns.",
      skills: ["React.js", "Components", "Hooks", "State Management"],
      image: "https://raw.githubusercontent.com/Sharatdevadiga/Portfolio/main/public/certificateImages/React-HackerRank.png",
      status: "Completed",
      category: "Frontend Development"
    },
    {
      title: "Problem Solving",
      issuer: "HackerRank",
      date: "2024",
      description: "Problem-solving skills assessment covering algorithms, data structures, and computational thinking.",
      skills: ["Algorithms", "Data Structures", "Problem Solving", "Logic"],
      image: "https://raw.githubusercontent.com/Sharatdevadiga/Portfolio/main/public/certificateImages/Problem-solving.jpg",
      status: "Completed",
      category: "Programming"
    }
  ];

  const categories = ["All", ...new Set(certifications.map(cert => cert.category))];

  const filteredCertifications = filter === "All" 
    ? certifications 
    : certifications.filter(cert => cert.category === filter);

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Professional Certifications</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development through industry-recognized certifications 
            and comprehensive training programs.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {[
            { number: "9+", label: "Certifications", icon: Award },
            { number: "1000+", label: "Hours of Learning", icon: Calendar },
            { number: "20+", label: "Technologies", icon: Code },
            { number: "Top 3", label: "AlmaBetter Ranking", icon: Trophy }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-xl text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <stat.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-3xl font-bold text-secondary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter Section */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Filter className="w-5 h-5 text-secondary mr-2 mt-1" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => handleFilterChange(category)}
              className={`transition-all duration-300 ${
                filter === category 
                  ? "bg-secondary text-secondary-foreground" 
                  : "hover:bg-secondary/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl overflow-hidden card-hover"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -10 }}
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant="secondary" 
                    className="bg-secondary/90 text-secondary-foreground"
                  >
                    {cert.status}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                {/* Title and Date */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-foreground line-clamp-2">
                    {cert.title}
                  </h3>
                  <span className="text-sm text-secondary font-medium ml-2">
                    {cert.date}
                  </span>
                </div>

                {/* Issuer */}
                <p className="text-secondary font-medium mb-3">{cert.issuer}</p>

                {/* Achievement Badge */}
                {cert.achievement && (
                  <div className="mb-3">
                    <Badge variant="outline" className="border-secondary text-secondary">
                      <Trophy className="w-3 h-3 mr-1" />
                      {cert.achievement}
                    </Badge>
                  </div>
                )}

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.slice(0, 4).map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="text-xs border-muted-foreground/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                  {cert.skills.length > 4 && (
                    <Badge variant="outline" className="text-xs border-muted-foreground/30">
                      +{cert.skills.length - 4} more
                    </Badge>
                  )}
                </div>

                {/* View Certificate Button */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  onClick={() => window.open(cert.image, '_blank')}
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:scale-110" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Continuously learning and expanding my skill set to stay current with industry trends.
          </p>
          <Button 
            size="lg" 
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </div>
  );
}