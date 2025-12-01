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
            Technical Program Manager & AI/ML Enthusiast
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            US Army Veteran | PMP® & CSM® Certified | Leading complex technical projects in Web3, DeFi, and AI-driven solutions.
            Currently pursuing MBA, with plans for MS in IT and PhD in AI/ML.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/resume"
              variant="primary"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              variant="secondary"
            >
              <Code className="w-4 h-4" />
              View Projects
            </Button>
          </div>
        </Reveal>
      </div>
    </ScrollSection>
  );
}
