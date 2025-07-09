'use client'

import { useState } from "react";
import Image from "next/image";
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
              className={`transition-all duration-300 relative overflow-hidden ${
                filter === category 
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg shadow-blue-500/25" 
                  : "hover:bg-secondary/10 border-secondary/30 text-secondary hover:border-secondary"
              }`}
              style={filter === category ? {
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)",
                boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)"
              } : {}}
            >
              {filter === category && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-pulse" />
              )}
              <span className="relative z-10">{category}</span>
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
              className="glass rounded-xl overflow-hidden card-hover h-full flex flex-col relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
              }}
            >
              {/* Flashy overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden bg-muted group/image">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant="secondary" 
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-none shadow-lg shadow-green-500/30"
                  >
                    {cert.status}
                  </Badge>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                {/* Title and Date */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-blue-400 line-clamp-2">
                    {cert.title}
                  </h3>
                  <span className="text-sm text-blue-400 font-medium ml-2 bg-blue-500/10 px-2 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>

                {/* Issuer */}
                <div className="mb-3">
                  <span className="text-xs text-blue-300/80 bg-blue-500/5 px-2 py-1 rounded-md border border-blue-400/20">
                    {cert.issuer}
                  </span>
                </div>

                {/* Achievement Badge */}
                {cert.achievement && (
                  <div className="mb-3">
                    <Badge 
                      variant="outline" 
                      className="border-cyan-400 text-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/20"
                      style={{
                        background: "linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
                        borderColor: "#22d3ee"
                      }}
                    >
                      <Trophy className="w-3 h-3 mr-1 text-yellow-400" />
                      {cert.achievement}
                    </Badge>
                  </div>
                )}

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="text-xs border-blue-400/40 text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* View Certificate Button - Always at bottom */}
                <div className="mt-auto">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group relative overflow-hidden border-cyan-400 text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white transition-all duration-300 shadow-lg shadow-cyan-400/20"
                    onClick={() => window.open(cert.image, '_blank')}
                    style={{
                      background: "linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
                      backdropFilter: "blur(5px)",
                      boxShadow: "0 4px 16px rgba(34, 211, 238, 0.2)"
                    }}
                  >
                    {/* Button flashy effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                    <span className="relative z-10">View Certificate</span>
                    <ExternalLink className="relative z-10 w-4 h-4 ml-2 transition-transform group-hover:scale-110" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section - Moved below certifications */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          {[
            { number: "9+", label: "Certifications", icon: Award },
            { number: "1000+", label: "Hours of Learning", icon: Calendar },
            { number: "20+", label: "Technologies", icon: Code },
            { number: "Top 3", label: "AlmaBetter Ranking", icon: Trophy }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-xl text-center relative group overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + index * 0.1 }}
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
              }}
            >
              {/* Flashy overlay effect for stats */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <stat.icon className="relative z-10 w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="relative z-10 text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">{stat.number}</div>
              <div className="relative z-10 text-sm text-blue-300">{stat.label}</div>
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
        </motion.div>
      </div>
    </div>
  );
}