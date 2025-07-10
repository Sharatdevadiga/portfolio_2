"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Info } from 'lucide-react'

export type FeedbackConfig = {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>
  iconColor: string
  title: string
  description: string
  action: { label: string; href: string }
}

export default function FeedbackContent({ config }: { config: FeedbackConfig }) {
  const Icon = config.icon ?? Info
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="glass rounded-3xl p-10 max-w-lg w-full border border-white/10 shadow-2xl mt-24 bg-gradient-to-br from-background/80 via-background/60 to-accent/30 backdrop-blur-lg"
      >
        <div className="flex flex-col items-center gap-4">
          <span className={`inline-flex items-center justify-center rounded-full bg-white/10 shadow-lg mb-2 ${config.iconColor}`}>
            <Icon size={64} strokeWidth={1.5} />
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text drop-shadow-lg">{config.title}</h1>
          <p className="text-lg text-muted-foreground mb-6 font-medium">{config.description}</p>
          <Link href={config.action.href}>
            <button className="bg-secondary text-secondary-foreground px-6 py-2 rounded-xl font-semibold shadow hover:bg-secondary/90 transition-all focus:outline-none focus:ring-2 focus:ring-secondary/40">
              {config.action.label}
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
