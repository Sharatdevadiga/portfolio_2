import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/data/blog-posts'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, Tag, ArrowLeft, User } from 'lucide-react'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

interface BlogDetailPageProps {
  params: { id: string }
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const id = params.id
  const post = blogPosts.find((p) => p.id === id)

  if (!post) return {}
  
  return {
    title: `${post.title} | Sharath Devadiga Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
      type: 'article',
      url: `https://sharath-devadiga.com/blog/${post.id}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
    alternates: {
      canonical: `https://sharath-devadiga.com/blog/${post.id}`,
    },
  }
}

function formatContent(content: string) {
  let codeBlockIndex = 0;
  const codeBlocks: Record<string, { lang: string; code: string }> = {};
  let processedContent = content.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
    const placeholder = `__CODE_BLOCK_${codeBlockIndex}__`;
    codeBlocks[placeholder] = { lang: lang || 'plaintext', code: code.trim() };
    codeBlockIndex++;
    return placeholder;
  });
  processedContent = processedContent
    .replace(/^# (.+$)/gm, '<h1 class="text-4xl md:text-5xl font-bold text-light mb-8 mt-12 first:mt-0 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent leading-tight">$1</h1>')
    .replace(/^## (.+$)/gm, '<h2 class="text-3xl font-semibold text-light mb-6 mt-10 border-l-4 border-secondary pl-6">$1</h2>')
    .replace(/^### (.+$)/gm, '<h3 class="text-2xl font-medium text-light mb-4 mt-8 text-secondary">$1</h3>')
    .replace(/^#### (.+$)/gm, '<h4 class="text-xl font-medium text-light mb-4 mt-6">$1</h4>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-secondary font-semibold">$1</strong>')
    .replace(/`([^`]+)`/g, '<code class="bg-surface/50 text-accent px-2 py-1 rounded-md text-sm font-mono border border-light/10">$1</code>')
    .replace(/^- (.+$)/gm, '<li class="text-light/90 mb-3 flex items-start"><span class="text-secondary mr-3 mt-1 text-lg">•</span><span>$1</span></li>')
    .replace(/^\d+\. (.+$)/gm, '<li class="text-light/90 mb-3 flex items-start"><span class="text-secondary mr-3 mt-1 font-semibold">→</span><span>$1</span></li>')
    .replace(/\n\n/g, '</p><p class="text-light/90 leading-relaxed mb-6 text-lg">')
    .replace(/^(?!<[h|p|d|l|c|_])/gm, '<p class="text-light/90 leading-relaxed mb-6 text-lg">')
    .replace(/$/g, '</p>');
  Object.keys(codeBlocks).forEach((placeholder) => {
    const { lang, code } = codeBlocks[placeholder];
    let highlighted = '';
    try {
      highlighted = hljs.highlight(code, { language: lang }).value;
    } catch {
      highlighted = hljs.highlightAuto(code).value;
    }
    const codeBlockHtml = `<div class=\"my-8 glass rounded-xl border border-light/10 overflow-hidden\">\n  <div class=\"bg-secondary/10 px-4 py-2 text-secondary text-sm font-mono border-b border-light/10\">${lang}</div>\n  <pre class=\"p-6 overflow-x-auto bg-surface/30\"><code class=\"hljs text-accent text-sm leading-7 font-mono whitespace-pre\">${highlighted}</code></pre>\n</div>`;
    processedContent = processedContent.replace(placeholder, codeBlockHtml);
  });
  return processedContent;
}

function BlogContent({ content }: { content: string }) {
  return (
    <div className="prose prose-invert prose-xl max-w-none blog-content" dangerouslySetInnerHTML={{ __html: formatContent(content) }} />
  )
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = blogPosts.find((p) => p.id === params.id)
  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background flex items-center justify-center">
        <div className="text-center glass p-12 rounded-3xl border border-border/10 max-w-md mx-6">
          <h1 className="text-3xl font-bold mb-6">Article Not Found</h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">The blog post you&#39;re looking for doesn&#39;t exist or may have been moved.</p>
          <Button asChild className="bg-gradient-to-r from-secondary to-accent text-primary">
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    )
  }
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2)
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-accent/10" />
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Back Button */}
            <Button asChild variant="ghost" className="mb-8 hover:bg-white/10">
              <Link href="/blog" className="flex items-center">
                <ArrowLeft className="mr-2" size={20} />
                Back to Blog
              </Link>
            </Button>
            {/* Hero Image */}
            <div className="aspect-video mb-8 overflow-hidden rounded-3xl shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 900px"
                priority
              />
            </div>
            {/* Blog Header */}
            <div className="text-center mb-12">
              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {post.tags.map((tag, index) => (
                  <Badge key={index} className="text-sm border-secondary/30 px-4 py-2 flex items-center gap-2">
                    <Tag className="mr-1" size={14} />
                    {tag}
                  </Badge>
                ))}
              </div>
              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-8 leading-tight">
                {post.title}
              </h1>
              {/* Excerpt */}
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
                {post.excerpt}
              </p>
              {/* Meta Information */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span className="text-lg">{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span className="text-lg">{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span className="text-lg">Sharath Devadiga</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Article Content */}
      <div className="container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="glass rounded-3xl p-8 md:p-12 border border-border/10 shadow-2xl">
            <BlogContent content={post.content} />
          </article>
          {/* Author Section */}
          <div className="mt-16 glass rounded-3xl p-8 border border-border/10 shadow-xl">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-primary font-bold text-2xl shadow-lg">
                SD
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3">Sharath Devadiga</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  Software Developer passionate about creating efficient, user-friendly web applications. Currently building projects with React, Node.js, and modern JavaScript technologies.
                </p>
                <div className="flex gap-4">
                  <Button asChild className="bg-gradient-to-r from-secondary to-accent text-primary">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                  <Button asChild variant="outline" className="glass border-border/20">
                    <Link href="/projects">View Projects</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-3xl font-semibold mb-8 text-center gradient-text">
                More Articles
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <Link key={index} href={`/blog/${relatedPost.id}`}>
                    <div className="group glass border border-border/10 rounded-2xl overflow-hidden hover:border-secondary/50 transition-all duration-500 hover:scale-105">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        width={600}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="p-6">
                        <h4 className="text-xl font-semibold mb-3 group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{relatedPost.date}</span>
                          <span>•</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
