"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="py-12 bg-background border-t border-border transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-2xl font-bold gradient-text font-poppins">Sharath Devadiga</h3>
            <p className="text-foreground/80">
              Software Developer passionate about creating innovative web solutions.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://github.com/Sharatdevadiga" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground/60 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/sharath-devadiga" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground/60 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="mailto:sharathdevadiga0046@gmail.com" 
                className="text-foreground/60 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-primary transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>Web Development</li>
              <li>Full Stack Solutions</li>
              <li>API Development</li>
              <li>Database Design</li>
            </ul>
          </motion.div>
          
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="text-lg font-semibold text-foreground">Contact</h4>
            <div className="space-y-2 text-foreground/80">
              <p>sharathdevadiga0046@gmail.com</p>
              <p>+91 6362053828</p>
              <p>Sirsi, Karnataka</p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-12 pt-8 border-t border-border text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-foreground/60">
            © {currentYear} Sharath Devadiga. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
