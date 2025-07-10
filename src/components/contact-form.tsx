'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Globe } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import emailjs from 'emailjs-com'
import { useRouter } from 'next/navigation'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const router = useRouter()
  // Spam protection: honeypot and timing
  const honeypotRef = useRef<HTMLInputElement>(null)
  const formLoadTime = useRef<number>(0)

  useEffect(() => {
    formLoadTime.current = Date.now()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Spam protection: honeypot
    if (honeypotRef.current && honeypotRef.current.value) {
      toast({
        title: 'Spam detected',
        description: 'Submission blocked.',
        variant: 'destructive',
      })
      setIsSubmitting(false)
      return
    }
    // Spam protection: timing (block if submitted <2s after load)
    if (Date.now() - formLoadTime.current < 2000) {
      toast({
        title: 'Submission too fast',
        description: 'Please wait a moment before submitting.',
        variant: 'destructive',
      })
      setIsSubmitting(false)
      return
    }
    // Simple spam check: require a real name and message length
    if (formData.name.length < 2 || formData.message.length < 10) {
      toast({
        title: 'Invalid submission',
        description: 'Please enter a valid name and message.',
        variant: 'destructive',
      })
      setIsSubmitting(false)
      return
    }
    try {
      // Send email to you (admin notification)
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          // from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      // Send auto-reply to user
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID!,
        {
          to_name: formData.name,
          email: formData.email, // user's email for auto-reply
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setFormData({ name: '', email: '', subject: '', message: '' })
      toast({
        title: 'Message sent successfully!',
        description: "Thank you for your message. I'll get back to you soon.",
      })
      router.push('/feedback/success/message-sent')
    } catch (error) {
      console.error('EmailJS error:', error)
      toast({
        title: 'Error sending message',
        description: 'Please try again later.',
        variant: 'destructive',
      })
      router.push('/feedback/error/message-failed')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (
    <div className="pt-24 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-secondary font-medium mb-6">
              <MessageCircle size={18} />
              Let&apos;s Connect
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Ready to Build Something Amazing?</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I&apos;m always excited to work on new projects and collaborate with talented teams. 
              Let&apos;s discuss how we can bring your ideas to life.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Contact Information Cards */}
            <motion.div className="lg:col-span-1 space-y-6" variants={itemVariants}>
              {/* Quick Info Card */}
              <div className="glass rounded-3xl p-8 border border-white/10 hover:border-secondary/50 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-secondary/10 rounded-2xl">
                    <Globe className="text-secondary" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
                </div>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl group hover:bg-secondary/5 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                      <Mail className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <a 
                        href="mailto:sharathdevadiga210@gmail.com"
                        className="text-muted-foreground text-sm hover:text-secondary transition-colors"
                      >
                        sharathdevadiga210@gmail.com
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl group hover:bg-secondary/5 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                      <Phone className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <a 
                        href="tel:+916362053828"
                        className="text-muted-foreground text-sm hover:text-secondary transition-colors"
                      >
                        +91 6362053828
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl group hover:bg-secondary/5 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                      <MapPin className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Location</h3>
                      <p className="text-muted-foreground text-sm">Sirsi, Karnataka, India</p>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Social Links Card */}
              <div className="glass rounded-3xl p-8 border border-white/10 hover:border-secondary/50 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-secondary/10 rounded-2xl">
                    <Globe className="text-secondary" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Connect Online</h2>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      className="w-full h-16 glass border-white/10 hover:border-secondary/50 hover:bg-secondary/10 group"
                      asChild
                    >
                      <a href="https://github.com/Sharatdevadiga" target="_blank" rel="noopener noreferrer">
                        <div className="flex flex-col items-center gap-2">
                          <Github className="text-foreground group-hover:text-secondary transition-colors" size={20} />
                          <span className="text-xs text-muted-foreground">GitHub</span>
                        </div>
                      </a>
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      className="w-full h-16 glass border-white/10 hover:border-secondary/50 hover:bg-secondary/10 group"
                      asChild
                    >
                      <a href="https://linkedin.com/in/sharath-devadiga" target="_blank" rel="noopener noreferrer">
                        <div className="flex flex-col items-center gap-2">
                          <Linkedin className="text-foreground group-hover:text-secondary transition-colors" size={20} />
                          <span className="text-xs text-muted-foreground">LinkedIn</span>
                        </div>
                      </a>
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      className="w-full h-16 glass border-white/10 hover:border-secondary/50 hover:bg-secondary/10 group"
                      asChild
                    >
                      <a href="mailto:sharathdevadiga210@gmail.com" target="_blank" rel="noopener noreferrer">
                        <div className="flex flex-col items-center gap-2">
                          <Mail className="text-foreground group-hover:text-secondary transition-colors" size={20} />
                          <span className="text-xs text-muted-foreground">Email</span>
                        </div>
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <div className="glass rounded-3xl p-8 border border-white/10 hover:border-secondary/50 transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-secondary/10 rounded-2xl">
                    <Send className="text-secondary" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Send a Message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field for spam protection */}
                  <input
                    type="text"
                    name="company"
                    ref={honeypotRef}
                    autoComplete="off"
                    tabIndex={-1}
                    className="hidden"
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-muted-foreground font-medium">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10 text-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all backdrop-blur-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-muted-foreground font-medium">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10 text-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all backdrop-blur-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-muted-foreground font-medium">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 text-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all backdrop-blur-sm"
                      placeholder="Project Collaboration Opportunity"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-muted-foreground font-medium">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-white/5 border-white/10 text-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all resize-none backdrop-blur-sm"
                      placeholder="Hi Sharath, I&apos;d like to discuss a project opportunity. We&apos;re looking for a skilled developer to help us build..."
                    />
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 h-12 text-lg font-medium transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-secondary-foreground/30 border-t-secondary-foreground rounded-full animate-spin" />
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send size={20} />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}