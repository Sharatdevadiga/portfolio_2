"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, Sparkles } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/certifications", label: "Certifications" },
    { href: "/contact", label: "Contact" }
  ];

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const handleClick = () => {
      // Smooth scroll to top when clicking navigation links
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <Link href={href} onClick={handleClick}>
        <span 
          className={`relative px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer block ${
            pathname === href 
              ? "text-blue-500 bg-blue-500/10" 
              : "text-foreground hover:text-blue-500 hover:bg-blue-500/5"
          }`}
        >
          {label}
          {pathname === href && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
              layoutId="activeIndicator"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </span>
      </Link>
    );
  };

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "backdrop-blur-md bg-background/80 shadow-lg border-b border-border/50" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <Link href="/">
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="text-blue-500" size={24} />
              Sharath Devadiga
            </motion.span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </div>
          
          {/* Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button variant="ghost" size="icon" className="md:hidden backdrop-blur-sm border border-border/50">
                    <Menu className="text-blue-500" size={20} />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/95 backdrop-blur-md border-border">
                <motion.div 
                  className="flex flex-col space-y-6 mt-8"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ staggerChildren: 0.1 }}
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <NavLink href={item.href} label={item.label} />
                    </motion.div>
                  ))}
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
