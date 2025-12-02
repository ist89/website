"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAudio } from "@/components/audio/AudioProvider";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "Bio" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showName, setShowName] = useState(false);
  const { isPlaying, play, pause } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      // Check if hero section is scrolled past
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        // Show name when hero section's bottom is above the viewport
        setShowName(rect.bottom < 0);
      }

      // Update active section
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/30 backdrop-blur-xl border-b border-white/5"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 relative">
          {/* Left: Name (appears after scrolling past hero) */}
          <div className="flex-1 flex items-center">
            <AnimatePresence>
              {showName && (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => scrollToSection("home")}
                  className="text-xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-white to-slate-300 drop-shadow-[0_0_6px_rgba(255,255,255,0.25)] hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-300"
                >
                  Tom Davidov
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Center: Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "text-sm font-medium transition-colors relative",
                    isActive
                      ? "text-neutral-300"
                      : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-neutral-400 to-neutral-300"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Audio Controls and Hamburger Menu */}
          <div className="flex-1 flex items-center justify-end">
            <div className="flex items-center space-x-2">
            {/* Audio Controls */}
            <button
              onClick={play}
              className={cn(
                "inline-flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300",
                isPlaying
                  ? "bg-white/5 border-white/10 text-neutral-500"
                  : "bg-gradient-to-r from-neutral-400/10 to-neutral-300/10 border-neutral-400/30 text-neutral-300 hover:from-neutral-400/20 hover:to-neutral-300/20"
              )}
              aria-label="Play background audio"
            >
              <Play className="w-4 h-4" />
            </button>
            <button
              onClick={pause}
              className={cn(
                "inline-flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300",
                !isPlaying
                  ? "bg-white/5 border-white/10 text-neutral-500 hover:bg-neutral-400/10 hover:border-neutral-400/30 hover:text-neutral-300"
                  : "bg-gradient-to-r from-neutral-400/10 to-neutral-300/10 border-neutral-400/30 text-neutral-300 hover:from-neutral-400/20 hover:to-neutral-300/20"
              )}
              aria-label="Pause background audio"
            >
              <Pause className="w-4 h-4" />
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 md:hidden shadow-2xl shadow-black/50"
              >
                <div className="px-4 py-4 space-y-2 bg-neutral-950/50 backdrop-blur-xl border-t border-white/5">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                          "w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                          isActive
                            ? "text-neutral-300 bg-neutral-700/10"
                            : "text-text-secondary hover:text-text-primary hover:bg-surface-light"
                        )}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </nav>
    </motion.header>
  );
}
