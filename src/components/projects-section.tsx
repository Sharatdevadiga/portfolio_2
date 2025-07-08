"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const featuredProjects = projects.slice(0, 3); // Only show 3 projects on home page

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-20 bg-blue-500/5">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work and technical achievements
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border border-border/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 group overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-4 flex items-center justify-center overflow-hidden relative">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `<div class="text-6xl text-blue-500/80">🚀</div>`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div className="flex gap-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-blue-500/90 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 transition-colors duration-200 flex items-center justify-center"
                        >
                          <ExternalLink size={14} className="mr-1" />
                          Live
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-background/80 text-foreground px-3 py-2 rounded-md text-sm font-medium hover:bg-background transition-colors duration-200 flex items-center justify-center"
                        >
                          <Github size={14} className="mr-1" />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <Button 
                        asChild 
                        className="flex-1 bg-blue-500 text-white hover:bg-blue-600 transform hover:scale-105 transition-all duration-300"
                        size="sm"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Live
                        </a>
                      </Button>
                      <Button 
                        asChild 
                        variant="outline" 
                        className="flex-1 border-border/50 hover:border-blue-500/50 transform hover:scale-105 transition-all duration-300"
                        size="sm"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button asChild className="bg-blue-500 text-white px-8 py-3 text-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
            <Link href="/projects">
              View All Projects
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
