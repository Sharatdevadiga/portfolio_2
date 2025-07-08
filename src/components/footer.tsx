"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground flex items-center gap-2">
              © {currentYear} Sharath Devadiga. Made with{" "}
              <Heart className="text-red-500" size={16} fill="currentColor" />{" "}
              and Next.js
            </p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
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
                className="text-muted-foreground hover:text-blue-500 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={20} />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
