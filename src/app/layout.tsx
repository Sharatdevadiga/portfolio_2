import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import FloatingParticles from "@/components/floating-particles";
import { QueryProvider } from "@/components/providers/query-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Sharath Devadiga",
    default: "Sharath Devadiga - Full Stack Software Engineer",
  },
  description: "Full Stack Software Engineer specializing in React, TypeScript, Node.js and PostgreSQL. Building fintech dashboards, secure payment flows and LLM-powered analytics with clean code and fast, clear interfaces.",
  keywords: ["Full Stack Software Engineer", "Software Engineer", "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Full Stack", "Web Development", "JavaScript"],
  authors: [{ name: "Sharath Devadiga" }],
  creator: "Sharath Devadiga",
  metadataBase: new URL("https://portfolio-2-sharaths-projects-2c3f7962.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-2-sharaths-projects-2c3f7962.vercel.app",
    title: "Sharath Devadiga - Full Stack Software Engineer",
    description: "Full Stack Software Engineer specializing in React, TypeScript, Node.js and PostgreSQL.",
    siteName: "Sharath Devadiga Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharath Devadiga - Full Stack Software Engineer",
    description: "Full Stack Software Engineer specializing in React, TypeScript, Node.js and PostgreSQL.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${poppins.variable} font-inter`}>
        <QueryProvider>
          <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300">
            <FloatingParticles />
            <Navigation />
            <main className="relative z-10">{children}</main>
            <Footer />
            <Toaster />
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
