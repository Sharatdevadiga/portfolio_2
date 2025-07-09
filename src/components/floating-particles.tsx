"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingParticles() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render particles until client-side hydration is complete
  if (!isClient) {
    return null;
  }

  // Main floating particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 4,
    duration: Math.random() * 15 + 20,
    delay: Math.random() * 8,
    x: Math.random() * 100,
    y: Math.random() * 100,
    color: i % 4 === 0 
      ? "rgba(59, 130, 246, 0.25)" 
      : i % 4 === 1 
      ? "rgba(34, 211, 238, 0.2)" 
      : i % 4 === 2
      ? "rgba(139, 92, 246, 0.18)"
      : "rgba(168, 85, 247, 0.15)"
  }));

  // Small ambient particles
  const ambientParticles = Array.from({ length: 10 }, (_, i) => ({
    id: `ambient-${i}`,
    size: Math.random() * 3 + 2,
    duration: Math.random() * 25 + 30,
    delay: Math.random() * 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    color: "rgba(255, 255, 255, 0.08)"
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Main floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            background: particle.color,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: `0 0 ${particle.size * 1.5}px ${particle.color}`,
          }}
          animate={{
            x: [0, 30, -20, 40, -10, 0],
            y: [0, -25, 35, -15, 25, 0],
            scale: [1, 1.1, 0.9, 1.2, 0.8, 1],
            opacity: [0.4, 0.7, 0.5, 0.8, 0.6, 0.4],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          }}
        />
      ))}

      {/* Small ambient particles */}
      {ambientParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            background: particle.color,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: `0 0 ${particle.size * 2}px rgba(255, 255, 255, 0.1)`,
          }}
          animate={{
            x: [0, 15, -10, 20, 0],
            y: [0, -20, 15, -10, 0],
            opacity: [0.2, 0.4, 0.3, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Larger orbital particles */}
      {Array.from({ length: 3 }, (_, i) => (
        <motion.div
          key={`orbital-${i}`}
          className="absolute rounded-full"
          style={{
            width: 12 + i * 3,
            height: 12 + i * 3,
            background: `radial-gradient(circle, rgba(59, 130, 246, ${0.2 - i * 0.04}) 0%, rgba(34, 211, 238, ${0.1 - i * 0.02}) 50%, transparent 80%)`,
            left: `${15 + i * 20}%`,
            top: `${25 + i * 15}%`,
            boxShadow: `0 0 ${(12 + i * 3) * 1.5}px rgba(59, 130, 246, 0.1)`,
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            x: [0, 20, -15, 0],
            y: [0, -15, 20, 0],
          }}
          transition={{
            rotate: {
              duration: 25 + i * 8,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
            x: {
              duration: 30 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              duration: 35 + i * 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      ))}

      {/* Floating streaks */}
      {Array.from({ length: 5 }, (_, i) => (
        <motion.div
          key={`streak-${i}`}
          className="absolute rounded-full"
          style={{
            width: 2,
            height: Math.random() * 25 + 15,
            background: `linear-gradient(to bottom, rgba(34, 211, 238, 0.3), rgba(139, 92, 246, 0.2), transparent)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transformOrigin: "center center",
            boxShadow: `0 0 10px rgba(34, 211, 238, 0.2)`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            rotate: [0, 180, 360],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 40,
            repeat: Infinity,
            delay: Math.random() * 15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
