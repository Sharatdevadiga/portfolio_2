"use client"

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { projects } from '@/data/projects';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showMore, setShowMore] = useState(false);
  const categories = ['All', 'Full Stack', 'React', 'Node.js', 'Frontend', 'Backend'];
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : selectedCategory === 'Backend'
      ? projects.filter(project =>
          project.category === 'Backend' ||
          project.technologies.some(tech =>
            tech.toLowerCase().includes('mongodb') ||
            tech.toLowerCase().includes('node') ||
            tech.toLowerCase().includes('express') ||
            tech.toLowerCase().includes('mongoose')
          )
        )
      : projects.filter(project => project.category === selectedCategory);
  const mainProjects = filteredProjects.slice(0, 6);
  const additionalProjects = filteredProjects.slice(6);
  const displayedProjects = showMore ? filteredProjects : mainProjects;

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gradient mb-4">
            My Projects
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            A showcase of my technical expertise and creative solutions
          </p>
        </div>
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={`glass border-border transition-all duration-300 transform hover:scale-105 ray-light relative overflow-hidden ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-secondary to-accent text-primary hover:from-secondary/80 hover:to-accent/80'
                  : 'text-foreground hover:bg-secondary/20 border-secondary/30 hover:border-secondary/60'
              }`}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700 ease-out"></span>
              <Filter size={16} className="mr-2 relative z-10" />
              <span className="relative z-10">{category}</span>
            </Button>
          ))}
        </div>
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <Card key={index} className="glass border-border hover:border-secondary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/20 group card-glow ray-light">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 p-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={240}
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<div class='text-6xl text-secondary/80'>🚀</div>`;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="text-xs badge-glow text-foreground border-secondary/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge className="text-xs badge-glow text-foreground/60 border-accent/30">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      asChild
                      className="flex-1 bg-gradient-to-r from-secondary to-accent text-primary hover:from-secondary/80 hover:to-accent/80 transform hover:scale-105 transition-all duration-300 ray-light relative overflow-hidden"
                      size="sm"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
                        <ExternalLink size={16} className="mr-2 relative z-10" />
                        <span className="relative z-10">Live</span>
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 glass border-secondary/30 text-foreground hover:bg-secondary/10 hover:border-secondary/60 transform hover:scale-105 transition-all duration-300 ray-light relative overflow-hidden"
                      size="sm"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
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
        {/* View More Button */}
        {additionalProjects.length > 0 && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowMore(!showMore)}
              className="bg-gradient-to-r from-secondary to-accent text-primary px-8 py-3 text-lg font-semibold hover:from-secondary/80 hover:to-accent/80 transition-all duration-500 transform hover:scale-105 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
              {showMore ? (
                <>
                  Show Less
                  <ChevronUp size={20} className="ml-2" />
                </>
              ) : (
                <>
                  View More Projects ({additionalProjects.length} more)
                  <ChevronDown size={20} className="ml-2" />
                </>
              )}
            </Button>
          </div>
        )}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/60 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
