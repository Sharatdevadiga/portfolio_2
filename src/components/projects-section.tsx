"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const featuredProjects = projects.slice(0, 3); // Only show 3 projects on home page

  return (
    <section className="py-20 bg-primary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            A showcase of my best work and technical achievements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="backdrop-blur-md bg-background/10 border-border/20 hover:border-primary/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 group overflow-hidden relative hover:bg-background/20"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Card-wide shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-10 pointer-events-none"></span>
              {/* Card-wide shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-10"></span>
              <CardContent className="p-0 relative z-20">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 p-4 flex items-center justify-center overflow-hidden relative">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<div class="text-6xl text-primary/80">🚀</div>`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="text-xs text-foreground border-primary/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs text-foreground/60 border-accent/30">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      asChild 
                      className="flex-1 bg-gradient-to-r from-primary to-accent text-primary-foreground transition-all duration-300"
                      size="sm"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        <span>Live</span>
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="flex-1 backdrop-blur-sm bg-background/50 border-primary/30 text-foreground transition-all duration-300 relative overflow-hidden"
                      size="sm"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
                        <Github size={16} className="mr-2 relative z-10" />
                        <span className="relative z-10">Code</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-3 text-lg font-semibold hover:from-primary/80 hover:to-accent/80 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
            <Link href="/projects">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
              <span className="relative z-10">View All Projects</span>
              <ArrowRight size={20} className="ml-2 relative z-10" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
