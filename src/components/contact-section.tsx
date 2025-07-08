"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactSection() {
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
    <section className="py-20 bg-purple-500/5">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Let&apos;s discuss your next project.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center" variants={itemVariants}>
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-blue-500" size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">sharathdevadiga0046@gmail.com</p>
          </motion.div>
          
          <motion.div className="text-center" variants={itemVariants}>
            <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-purple-500" size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground">+91 6362053828</p>
          </motion.div>
          
          <motion.div className="text-center" variants={itemVariants}>
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-blue-500" size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground">Sirsi, Karnataka, India</p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button asChild className="px-8 py-4 bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
            <Link href="/contact">
              <MessageCircle className="mr-2" size={20} />
              Get In Touch
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
