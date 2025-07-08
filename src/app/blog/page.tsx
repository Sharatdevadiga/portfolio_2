import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Sharath Devadiga',
  description: 'Technical articles and insights on web development, programming best practices, and the latest trends in software development.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical articles, tutorials, and insights on modern web development
          </p>
        </div>
        
        <div className="text-center py-20">
          <p className="text-muted-foreground">Blog page coming soon...</p>
        </div>
      </div>
    </div>
  );
}
