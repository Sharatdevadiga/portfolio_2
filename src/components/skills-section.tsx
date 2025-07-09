"use client";

import { motion, type Variants } from "framer-motion";
import { skills } from "@/data/skills";

export default function SkillsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
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
    <section className="py-20 bg-gradient-to-br from-primary/20 to-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gradient mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-light/80 max-w-2xl mx-auto">
            Mastery of cutting-edge technologies and frameworks
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                rotateY: 15,
                z: 50,
                boxShadow: "0 25px 50px rgba(0, 212, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="skill-card glass rounded-2xl p-6 text-center border-light/20 hover:border-secondary/50 transition-all duration-300 cursor-pointer group"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`
              }}
            >
              <motion.div 
                className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ color: skill.color }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-sm font-semibold text-light group-hover:text-secondary transition-colors duration-300">
                {skill.name}
              </h3>
              
              {/* Animated progress indicator */}
              <motion.div
                className="mt-3 h-1 bg-light/20 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.7, duration: 1.2 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
