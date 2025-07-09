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
    default: "Sharath Devadiga - Software Developer",
  },
  description: "Passionate Software Developer specializing in React, Node.js, and modern web technologies. Building innovative solutions with clean code and exceptional user experiences.",
  keywords: ["Software Developer", "React", "Node.js", "Full Stack", "Web Development", "JavaScript", "TypeScript"],
  authors: [{ name: "Sharath Devadiga" }],
  creator: "Sharath Devadiga",
  metadataBase: new URL("https://sharathdevadiga.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sharathdevadiga.vercel.app",
    title: "Sharath Devadiga - Software Developer",
    description: "Passionate Software Developer specializing in React, Node.js, and modern web technologies.",
    siteName: "Sharath Devadiga Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharath Devadiga - Software Developer",
    description: "Passionate Software Developer specializing in React, Node.js, and modern web technologies.",
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
