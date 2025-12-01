"use client";

import { ScrollSection } from "@/components/ScrollSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { FileText, Code } from "lucide-react";

export function HomeSection() {
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
    }
  };

  return (
    <ScrollSection id="home" className="flex items-center">
      <div className="text-center w-full">
        <Reveal>
          <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Tom Davidov
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-2xl md:text-3xl text-blue-200/80 mb-4 font-light tracking-wide">
            Software Engineer & Technology Enthusiast
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building scalable web applications with modern technologies.
            Passionate about clean code, user experience, and continuous learning.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/resume"
              variant="primary"
            >
              <FileText className="w-5 h-5 mr-2" />
              View Resume
            </Button>
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-surface text-text-primary border border-divider hover:bg-surface-light hover:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            >
              <Code className="w-5 h-5 mr-2" />
              View Projects
            </button>
          </div>
        </Reveal>
      </div>
    </ScrollSection>
  );
}
