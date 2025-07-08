import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
