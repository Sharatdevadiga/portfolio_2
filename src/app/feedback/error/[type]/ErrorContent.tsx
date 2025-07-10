"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Frown,
  AlertTriangle,
  XCircle,
  WifiOff,
  LucideIcon,
  ArrowRight,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  frown: Frown,
  "alert-triangle": AlertTriangle,
  "x-circle": XCircle,
  "wifi-off": WifiOff,
};

export interface ErrorConfig {
  icon: string;
  iconColor: string;
  title: string;
  description: string;
  action: {
    label: string;
    href: string;
  };
}

interface ErrorContentProps {
  config: ErrorConfig;
}

export default function ErrorContent({ config }: ErrorContentProps) {
  const { icon, iconColor, title, description, action } = config;
  const Icon = ICON_MAP[icon] || Frown;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <motion.div
        className="relative z-10 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="glass rounded-3xl p-12 border border-white/10 backdrop-blur-sm shadow-2xl bg-gradient-to-br from-background/80 via-background/60 to-red-500/5"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.4,
            }}
          >
            <div className="mx-auto w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Icon className={`w-12 h-12 ${iconColor}`} strokeWidth={1.5} />
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-8 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Link href={action.href}>
              <button
                className="
                    relative inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold
                    bg-gradient-to-r from-secondary to-accent text-secondary-foreground
                    shadow-xl hover:shadow-2xl transition-all duration-300
                    hover:from-accent hover:to-secondary
                    focus:outline-none focus:ring-2 focus:ring-accent/50
                    group border-amber-100 border-2 hover:border-secondary/50
                "
              >
                <span className="relative z-10">{action.label}</span>
                <ArrowRight
                  className="ml-2 w-5 h-5 text-secondary-foreground opacity-70 group-hover:translate-x-1 transition-transform duration-300"
                  strokeWidth={2}
                />
                <span
                  className="
                    absolute inset-0 rounded-xl pointer-events-none
                    bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    "
                />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
