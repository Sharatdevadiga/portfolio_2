import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import SkillsSection from "@/components/skills-section";
import BlogSection from "@/components/blog-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SkillsSection />
      <BlogSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
