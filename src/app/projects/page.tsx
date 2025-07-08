import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Sharath Devadiga',
  description: 'Explore my portfolio of web development projects including full-stack applications, React components, and modern web solutions.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive showcase of my development work and technical achievements
          </p>
        </div>
        
        <div className="text-center py-20">
          <p className="text-muted-foreground">Projects page coming soon...</p>
        </div>
      </div>
    </div>
  );
}
