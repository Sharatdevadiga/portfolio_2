"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, Zap, Play, Terminal } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [isCodeRunning, setIsCodeRunning] = useState(false);
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [typedCode, setTypedCode] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  // Ensure consistent rendering between server and client
  useEffect(() => {
    setMounted(true);
  }, []);

  const codeSnippets = useMemo(() => [
    {
      language: "javascript",
      code: `const developer = {
  name: "Sharath",
  role: "Software Developer",
  passion: "Building amazing UIs",
  skills: ["React", "Node.js", "MongoDB"]
};

console.log(developer.passion);`,
      output: "🚀 Building amazing UIs"
    },
    {
      language: "react",
      code: `function WelcomeUser() {
  const [welcome, setWelcome] = useState("");
  
  useEffect(() => {
    setWelcome("Hello from Sharath! 👋");
  }, []);
  
  return <h2>{welcome}</h2>;
}`,
      output: "✨ Hello from Sharath! 👋"
    },
    {
      language: "javascript",
      code: `const projects = [
  "Entertainment Hub",
  "E-commerce Platform", 
  "Task Management App"
];

projects.map(p => "✅ " + p);`,
      output: ["✅ Entertainment Hub", "✅ E-commerce Platform", "✅ Task Management App"]
    }
  ], []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCodeIndex((prev) => (prev + 1) % codeSnippets.length);
      setTypedCode("");
      setShowOutput(false);
    }, 8000);

    return () => clearInterval(interval);
  }, [codeSnippets.length]);

  useEffect(() => {
    if (!codeSnippets[currentCodeIndex]) return;
    
    const currentSnippet = codeSnippets[currentCodeIndex];
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;
    
    const typeCode = () => {
      if (currentIndex < currentSnippet.code.length) {
        setTypedCode(currentSnippet.code.slice(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeCode, 50);
      }
    };

    const initialTimeout = setTimeout(typeCode, 1000);
    
    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(timeoutId);
    };
  }, [currentCodeIndex, codeSnippets]);

  const runCode = () => {
    setIsCodeRunning(true);
    setTimeout(() => {
      setShowOutput(true);
      setIsCodeRunning(false);
    }, 1500);
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

  // Don't render animations and dynamic content until client-side hydration is complete
  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/30 via-background to-primary/20 overflow-hidden transition-colors duration-300">
        <div className="container mx-auto px-6 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-poppins leading-tight">
                  <span className="text-foreground">Software</span>
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Developer</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl leading-relaxed">
                  Building efficient, user-friendly web applications with clean code and modern technologies. 
                  Passionate about creating digital solutions that make a difference.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20">
                <div className="bg-background/30 rounded-lg p-3 h-52">
                  <div className="text-xs font-mono text-foreground/90">
                    Loading...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/30 via-background to-primary/20 overflow-hidden transition-colors duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-60 h-60 bg-primary/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-6">
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold font-poppins leading-tight"
                variants={itemVariants}
              >
                <span className="text-foreground">Software</span>
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Developer</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-foreground/80 max-w-2xl leading-relaxed"
                variants={itemVariants}
              >
                Building efficient, user-friendly web applications with clean code and modern technologies. 
                Passionate about creating digital solutions that make a difference.
              </motion.p>
              
              <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
                <div className="flex items-center gap-2 text-foreground/60">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span>1+ Year Experience</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/60">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-300"></div>
                  <span>15+ Projects Built</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/60">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-600"></div>
                  <span>Growing Developer</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button asChild className="px-8 py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                <Link href="/projects">
                  <ArrowRight className="mr-2" size={20} />
                  View My Work
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-4 backdrop-blur-sm text-foreground font-semibold border-border/50 hover:bg-foreground/10 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://docs.google.com/document/d/1k9g79yP7gntQS8wxfcD88VLYUIoUm9YBlRamOUivllY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2" size={20} />
                  Download Resume
                </a>
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex space-x-6"
              variants={itemVariants}
            >
              {[
                { href: "https://github.com/Sharatdevadiga", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/sharath-devadiga", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:sharathdevadiga0046@gmail.com", icon: Mail, label: "Email" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center text-foreground/60 hover:text-primary transition-all duration-300 hover:scale-110"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              {/* 3D Card Container */}
              <motion.div 
                className="relative backdrop-blur-xl border-2 border-border/30 rounded-3xl p-8 bg-background/50"
                whileHover={{ 
                  rotateY: -15,
                  rotateX: 5,
                  scale: 1.05,
                  boxShadow: "0 50px 100px rgba(59, 130, 246, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-4 overflow-hidden relative border border-primary/20"
                  animate={{ 
                    boxShadow: ["0 0 20px rgba(59, 130, 246, 0.2)", "0 0 40px rgba(59, 130, 246, 0.3)", "0 0 20px rgba(59, 130, 246, 0.2)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Code Editor Header */}
                  <motion.div 
                    className="flex items-center justify-between mb-3 bg-background/50 rounded-lg p-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Terminal size={14} />
                      <span>{codeSnippets[currentCodeIndex].language}</span>
                    </div>
                    <motion.button
                      onClick={runCode}
                      className="flex items-center gap-1 px-2 py-1 bg-accent/20 hover:bg-accent/30 rounded text-xs text-accent font-medium transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={isCodeRunning}
                    >
                      <Play size={12} />
                      Run
                    </motion.button>
                  </motion.div>

                  {/* Code Content */}
                  <div className="bg-background/30 rounded-lg p-3 mb-2 h-52 overflow-hidden">
                    <motion.pre 
                      className="text-xs font-mono text-foreground/90 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <code className="whitespace-pre-wrap">
                        {typedCode}
                        <motion.span 
                          className="inline-block w-2 h-4 bg-accent ml-1"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      </code>
                    </motion.pre>
                  </div>

                  {/* Output Section */}
                  <motion.div 
                    className="bg-background/50 rounded-lg p-1.5 min-h-8"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: showOutput ? 1 : 0.5 }}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-xs text-muted-foreground">Output</span>
                    </div>
                    {isCodeRunning ? (
                      <motion.div
                        className="flex gap-1"
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: {
                            transition: {
                              staggerChildren: 0.2,
                            },
                          },
                        }}
                      >
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-1 h-1 bg-accent rounded-full"
                            variants={{
                              hidden: { opacity: 0.3 },
                              visible: {
                                opacity: [0.3, 1, 0.3],
                                transition: {
                                  duration: 0.8,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                },
                              },
                            }}
                          />
                        ))}
                      </motion.div>
                    ) : showOutput ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-xs text-accent font-medium"
                      >
                        {Array.isArray(codeSnippets[currentCodeIndex].output) ? (
                          codeSnippets[currentCodeIndex].output.map((line, index) => (
                            <motion.div 
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.2 }}
                            >
                              {line}
                            </motion.div>
                          ))
                        ) : (
                          <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {codeSnippets[currentCodeIndex].output}
                          </motion.div>
                        )}
                      </motion.div>
                    ) : null}
                  </motion.div>

                  {/* Loading Animation */}
                  {isCodeRunning && (
                    <motion.div 
                      className="absolute inset-0 bg-primary/10 rounded-2xl flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div 
                        className="flex gap-2"
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: {
                            transition: {
                              staggerChildren: 0.1
                            }
                          }
                        }}
                      >
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-3 h-3 bg-accent rounded-full"
                            variants={{
                              hidden: { y: 0 },
                              visible: {
                                y: [-10, 0],
                                transition: {
                                  duration: 0.6,
                                  repeat: Infinity,
                                  repeatType: "reverse"
                                }
                              }
                            }}
                          />
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-background shadow-lg"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" }
                  }}
                >
                  <Zap size={24} />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-6 -left-6 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg"
                  animate={{ 
                    y: [0, -8, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <ArrowRight size={20} />
                </motion.div>
                
                <motion.div
                  className="absolute top-1/2 -right-8 w-8 h-8 bg-foreground/20 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl opacity-30 -z-10"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
