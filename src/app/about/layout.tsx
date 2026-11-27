import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sharath Devadiga - Full Stack Software Engineer Experience & Background",
  description: "Learn about Sharath Devadiga's journey as a Full Stack Software Engineer, educational background, work experience, and technical achievements.",
  keywords: ["About", "Full Stack Software Engineer", "Experience", "Background", "Education", "Skills", "Career"],
  openGraph: {
    title: "About Sharath Devadiga - Full Stack Software Engineer",
    description: "Learn about Sharath Devadiga's journey as a Full Stack Software Engineer, educational background, work experience, and technical achievements.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sharath Devadiga - Full Stack Software Engineer",
    description: "Learn about Sharath Devadiga's journey as a Full Stack Software Engineer, educational background, work experience, and technical achievements.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
