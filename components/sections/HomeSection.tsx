"use client";

import { ScrollSection } from "@/components/ScrollSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { FileText, Code } from "lucide-react";
import { HeroPixelatedAvatar } from "@/app/components/HeroPixelatedAvatar";

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
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 
          ===== RESPONSIVE TWO-COLUMN LAYOUT =====
          - On mobile: Text first, then avatar below (flex-col-reverse)
          - On desktop (md+): Text on LEFT, avatar on RIGHT (flex-row)
        */}
        <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center md:justify-between">
          
          {/* ===== LEFT COLUMN: TEXT CONTENT ===== */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <Reveal>
              {/* ===== EDIT HERO TITLE HERE ===== */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                Tom Davidov
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              {/* ===== EDIT SUBTITLE HERE ===== */}
              <p className="text-xl sm:text-2xl md:text-3xl text-neutral-200/80 mb-4 font-light tracking-wide">
                Technical Program Manager & AI/ML Enthusiast
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              {/* ===== EDIT DESCRIPTION TEXT HERE ===== */}
              <p className="text-base sm:text-lg text-neutral-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                US Army Veteran | PMP® & CSM® Certified | Leading complex technical projects in Web3, DeFi, and AI-driven solutions.
                Currently pursuing MBA, with plans for MS in IT and PhD in AI/ML.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              {/* ===== EDIT BUTTONS HERE ===== */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
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

          {/* ===== RIGHT COLUMN: PIXELATED AVATAR ===== */}
          <div className="flex-1 flex items-center justify-center">
            {/* 
              ===== AVATAR SIZE =====
              To change avatar size, edit HeroPixelatedAvatar.tsx
              Look for width={400} and height={500} props
            */}
            <HeroPixelatedAvatar />
          </div>

        </div>
      </div>
    </ScrollSection>
  );
}
