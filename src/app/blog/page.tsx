import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, User } from 'lucide-react'
import { blogPosts } from '@/data/blog-posts'

export const metadata: Metadata = {
  title: 'Technical Blog - Sharath Devadiga | Web Development Insights',
  description: 'Read technical articles and insights on React, Node.js, TypeScript, and modern web development by Sharath Devadiga. Learn programming best practices and development techniques.',
  keywords: [
    'web development blog',
    'JavaScript tutorials',
    'React guides',
    'Node.js',
    'TypeScript',
    'programming tips',
    'software engineering',
    'coding tutorials',
  ],
  openGraph: {
    title: 'Technical Blog - Sharath Devadiga',
    description: 'Read technical articles and insights on React, Node.js, TypeScript, and modern web development.',
    type: 'website',
    url: 'https://sharath-devadiga.com/blog',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://sharath-devadiga.com/blog',
  },
}

export default function Blog() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins gradient-text mb-4">
            Technical Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on modern web development
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link key={index} href={`/blog/${post.id}`} className="h-full">
              <Card className="glass border-border/20 hover:border-secondary/50 transition-all duration-300 hover:scale-[1.03] cursor-pointer h-full">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="w-full h-48 relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover rounded-t-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 2}
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar size={16} className="mr-2" />
                      <span>{post.date}</span>
                      <span className="mx-3">•</span>
                      <Clock size={16} className="mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 hover:text-secondary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border/20 mt-auto">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User size={16} className="mr-2" />
                        <span>Sharath Devadiga</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
