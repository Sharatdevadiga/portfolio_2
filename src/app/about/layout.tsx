import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sharath Devadiga - Software Developer Experience & Background",
  description: "Learn about Sharath Devadiga's journey as a Software Developer, educational background, work experience, and technical achievements.",
  keywords: ["About", "Software Developer", "Experience", "Background", "Education", "Skills", "Career"],
  openGraph: {
    title: "About Sharath Devadiga - Software Developer",
    description: "Learn about Sharath Devadiga's journey as a Software Developer, educational background, work experience, and technical achievements.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sharath Devadiga - Software Developer",
    description: "Learn about Sharath Devadiga's journey as a Software Developer, educational background, work experience, and technical achievements.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
