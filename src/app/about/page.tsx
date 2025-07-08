import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Sharath Devadiga',
  description: 'Learn more about Sharath Devadiga, a passionate software developer with expertise in modern web technologies and full-stack development.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey as a software developer and passion for creating innovative solutions
          </p>
        </div>
        
        <div className="text-center py-20">
          <p className="text-muted-foreground">About page coming soon...</p>
        </div>
      </div>
    </div>
  );
}
