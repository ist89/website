"use client";

import { Section } from "@/components/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { FileText, Code } from "lucide-react";

export function HomeSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Section id="home" className="min-h-screen flex items-center">
      <div className="text-center w-full">
        <Reveal>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-text-primary via-accent to-text-primary bg-clip-text text-transparent">
            Tom Davidov
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xl md:text-2xl text-text-secondary mb-4">
            Software Engineer & Technology Enthusiast
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg text-text-secondary/80 mb-12 max-w-2xl mx-auto">
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
    </Section>
  );
}

