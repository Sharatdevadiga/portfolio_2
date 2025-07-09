"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog-posts";

export default function BlogSection() {
  const featuredPosts = blogPosts.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
        damping: 10
      }
    }
  };

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gradient mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-light/80 max-w-2xl mx-auto">
            Insights and tutorials on modern web development
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0, 212, 255, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href={`/blog/${post.id}`}>
                <Card className="glass border-light/20 hover:border-secondary/50 transition-all duration-300 cursor-pointer h-full">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                      <Image 
                        src={post.image} 
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center text-sm text-light/60 mb-3">
                        <Calendar size={16} className="mr-2" />
                        <span>{post.date}</span>
                        <span className="mx-3">•</span>
                        <Clock size={16} className="mr-2" />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-light mb-3 hover:text-secondary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-light/80 mb-4 text-sm leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button asChild variant="outline" className="glass border-light/20 text-light hover:bg-white/10">
            <Link href="/blog">
              <ArrowRight className="mr-2" size={20} />
              Read All Posts
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
