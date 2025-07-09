'use client'

import { motion } from "framer-motion";
import { 
  Calendar, 
  GraduationCap, 
  Code, 
  Globe, 
  Briefcase, 
  Star,
  Trophy,
  Zap,
  Coffee,
  BookOpen,
  Users,
  TrendingUp,
  Sparkles,
  Lightbulb,
  Rocket,
  Target
} from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 24
      }
    }
  };

  const stats = [
    { icon: Code, value: "20+", label: "Projects Built", color: "text-secondary" },
    { icon: Trophy, value: "2x", label: "Performance Boost", color: "text-accent" },
    { icon: Users, value: "Top 3", label: "Cohort Ranking", color: "text-secondary" },
    { icon: Calendar, value: "1+", label: "Years Experience", color: "text-accent" }
  ];

  return (
    <div className="pt-24 pb-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Section */}
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/10 rounded-full text-secondary mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Sparkles size={20} />
              <span className="font-medium">About Me</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              variants={itemVariants}
            >
              <span className="gradient-text">Sharath</span>{" "}
              <span className="text-foreground">Devadiga</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Passionate <span className="text-blue-400 font-semibold">Software Developer</span> crafting 
              innovative digital solutions with modern technologies and creative problem-solving
            </motion.p>

            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="glass rounded-2xl p-6 border border-white/10 hover:border-secondary/50 transition-all duration-300">
                    <stat.icon className={`${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} size={32} />
                    <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Personal Story & Experience */}
            <motion.div className="space-y-8" variants={itemVariants}>
              {/* Personal Introduction */}
              <motion.div
                className="glass rounded-3xl p-8 border border-white/10 hover:border-secondary/50 transition-all duration-500 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-colors">
                    <Sparkles className="text-blue-400" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">My Journey</h2>
                </div>
                
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    Hello! I&apos;m <span className="text-blue-400 font-semibold">Sharath Devadiga</span>, 
                    a passionate Software Developer who loves turning ideas into reality through code. 
                    My journey began with curiosity about how websites work, and has evolved into a 
                    deep passion for creating digital experiences that matter.
                  </p>
                  <p>
                    Currently working at <span className="text-purple-400 font-semibold">DocTrue Technologies</span>, 
                    I&apos;ve successfully improved application performance by <span className="text-green-400 font-bold">2x</span> and enhanced security through 
                    advanced authentication systems. I believe in writing clean, maintainable code that 
                    solves real-world problems.
                  </p>
                  <p>
                    When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to 
                    open-source projects, or sharing knowledge with the developer community.
                  </p>
                </div>
              </motion.div>

              {/* Personal Approach */}
              <motion.div
                className="glass rounded-3xl p-8 border border-white/10 hover:border-accent/50 transition-all duration-500"
                variants={itemVariants}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl">
                    <Lightbulb className="text-purple-400" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">My Approach</h2>
                </div>

                <div className="space-y-6">
                  <motion.div 
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-xl hover:from-blue-500/10 hover:to-cyan-500/10 transition-colors">
                      <div className="p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-colors">
                        <Target className="text-blue-400" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Problem-First Development</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed">
                          I believe in understanding the core problem before writing any code. Every feature I build starts with user needs and business requirements.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-xl hover:from-purple-500/10 hover:to-pink-500/10 transition-colors">
                      <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-colors">
                        <Zap className="text-purple-400" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Performance & Security</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed">
                          Optimizing for speed and security from day one. My work at DocTrue resulted in <span className="text-green-400 font-semibold">2x</span> performance improvements and enhanced authentication systems.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-xl hover:from-green-500/10 hover:to-emerald-500/10 transition-colors">
                      <div className="p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-colors">
                        <Users className="text-green-400" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Collaborative Growth</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed">
                          Working closely with cross-functional teams and contributing to open-source projects. Knowledge sharing and mentoring are core to my development philosophy.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* What Drives Me */}
              <motion.div
                className="glass rounded-3xl p-8 border border-white/10 hover:border-accent/50 transition-all duration-500 w-full max-w-md mx-auto"
                variants={itemVariants}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-2xl">
                    <Lightbulb className="text-pink-400" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">What Drives Me</h2>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Target, text: "Building user-centric solutions", color: "text-blue-400" },
                    { icon: Coffee, text: "Continuous learning & growth", color: "text-purple-400" },
                    { icon: Users, text: "Collaborative team environments", color: "text-green-400" },
                    { icon: Code, text: "Clean, maintainable code", color: "text-cyan-400" }
                  ].map((interest, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-gradient-to-r from-white/5 to-white/10 rounded-xl group hover:from-white/10 hover:to-white/15 transition-colors border border-white/10"
                      whileHover={{ x: 5 }}
                    >
                      <interest.icon className={`${interest.color} group-hover:scale-110 transition-transform`} size={20} />
                      <span className="text-foreground/80">{interest.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Experience & Education */}
            <motion.div className="space-y-8" variants={itemVariants}>
              {/* Work Experience */}
              <motion.div
                className="glass rounded-3xl sm:p-8 p-4  border border-white/10 hover:border-secondary/50 transition-all duration-500 w-full max-w-md mx-auto"
                variants={itemVariants}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl">
                    <Briefcase className="text-blue-400" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Experience</h2>
                </div>

                <div className="space-y-8">
                  {/* Current Role */}
                  <motion.div 
                    className="relative pl-8 group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute left-0 top-2 w-3 h-3 bg-secondary rounded-full group-hover:scale-125 transition-transform"></div>
                    <div className="absolute left-1 top-6 w-0.5 h-20 bg-gradient-to-b from-secondary to-accent opacity-50"></div>
                    
                    <div className="bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl p-6 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                      <h3 className="text-xl font-bold text-foreground mb-1">Software Developer</h3>
                      <p className="text-blue-400 font-semibold mb-2">DocTrue Technologies</p>
                      <div className="flex items-center gap-2 text-foreground/60 mb-4">
                        <Calendar size={16} />
                        <span>Nov 2024 - Present</span>
                      </div>
                      <ul className="space-y-2 text-foreground/70">
                        <li className="flex items-start gap-2">
                          <TrendingUp className="text-green-400 mt-1 flex-shrink-0" size={16} />
                          <span>Developed responsive web pages using React.js and TypeScript, improving application load speed by <span className="text-green-400 font-semibold">2x</span> through front-end performance optimizations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Code className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                          <span>Built REST APIs for subscription management and developed systems for prescription and analytics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Zap className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                          <span>Enhanced JWT-based authentication and authorization system to improve security and access control</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Users className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                          <span>Collaborated with cross-functional teams to design and implement new features, resulting in a <span className="text-green-400 font-semibold">20%</span> increase in bookings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Rocket className="text-orange-400 mt-1 flex-shrink-0" size={16} />
                          <span>Automated manual template creation process, reducing onboarding time for new customers by <span className="text-green-400 font-semibold">40%</span></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Globe className="text-indigo-400 mt-1 flex-shrink-0" size={16} />
                          <span>Enhanced WhatsApp bot functionality and implemented patient notification system, leading to a <span className="text-green-400 font-semibold">15%</span> rise in appointment bookings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Target className="text-pink-400 mt-1 flex-shrink-0" size={16} />
                          <span>Designed database schema and improved database performance by <span className="text-green-400 font-semibold">3x</span> through efficient indexing and query optimization</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  {/* Freelance */}
                  <motion.div 
                    className="relative pl-8 group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute left-0 top-2 w-3 h-3 bg-accent rounded-full group-hover:scale-125 transition-transform"></div>
                    
                    <div className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl p-6 border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
                      <h3 className="text-xl font-bold text-foreground mb-1">Freelance Developer</h3>
                      <p className="text-purple-400 font-semibold mb-2">Self-employed</p>
                      <div className="flex items-center gap-2 text-foreground/60 mb-4">
                        <Calendar size={16} />
                        <span>Sept 2024 - Oct 2024</span>
                      </div>
                      <ul className="space-y-2 text-foreground/70">
                        <li className="flex items-start gap-2">
                          <Globe className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                          <span>Designed responsive websites for events</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Rocket className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                          <span>Published NPM package for React workflows</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Education */}
              <motion.div
                className="glass rounded-3xl sm:p-8 p-4 border border-white/10 hover:border-secondary/50 transition-all duration-500 w-full max-w-md mx-auto"
                variants={itemVariants}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl">
                    <BookOpen className="text-green-400" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Education</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 group">
                    <div className="p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-indigo-500/30 transition-colors">
                      <GraduationCap className="text-blue-400" size={18} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-foreground">Bachelor of Engineering</h3>
                      <p className="text-blue-400 text-sm">The National Institute Of Engineering</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Star  size={14} />
                        <span className="text-foreground/70 text-sm">CGPA: <span className=" font-medium">9.0/10</span></span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 group">
                    <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-colors">
                      <Code className="text-purple-400" size={18} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-foreground">Full Stack Web Development</h3>
                      <p className="text-purple-400 text-sm">AlmaBetter</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Trophy  size={14} />
                        <span className="text-foreground/70 text-sm">Top <span className=" font-medium">3</span> in cohort of 100+</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 group">
                    <div className="p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-colors">
                      <BookOpen className="text-green-400" size={18} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-foreground">Pre University</h3>
                      <p className="text-green-400 text-sm">MES Chaitanya PU College</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Star  size={14} />
                        <span className="text-foreground/70 text-sm"><span className=" font-medium">93%</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}