import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sharath Devadiga - Software Developer",
  description: "Portfolio of Sharath Devadiga, a passionate software developer building efficient, user-friendly web applications with modern technologies.",
  keywords: "software developer, web developer, React, Next.js, Node.js, portfolio",
  authors: [{ name: "Sharath Devadiga" }],
  creator: "Sharath Devadiga",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sharath-portfolio.vercel.app",
    title: "Sharath Devadiga - Software Developer",
    description: "Portfolio of Sharath Devadiga, a passionate software developer building efficient, user-friendly web applications with modern technologies.",
    siteName: "Sharath Devadiga Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharath Devadiga - Software Developer",
    description: "Portfolio of Sharath Devadiga, a passionate software developer building efficient, user-friendly web applications with modern technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
