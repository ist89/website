"use client";

import { ScrollSection } from "@/components/ScrollSection";
import { Reveal } from "@/components/motion/Reveal";
import { User } from "lucide-react";
import { PhotoGallery } from "@/components/PhotoGallery";

export function AboutSection() {
  return (
    <ScrollSection id="about" className="pb-0 min-h-0">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 flex items-center gap-3">
          <User className="w-8 h-8 md:w-10 md:h-10 text-neutral-300" />
          Bio
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="max-w-3xl space-y-6 text-neutral-300 mb-16 bg-neutral-900/20 p-8 rounded-3xl border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-400/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <p className="text-lg leading-relaxed">
              Technical Program Manager with 7+ years of experience 
              leading complex technical projects across Web3, DeFi, trading automation, and large-scale operational programs. 
              Certified Project Management Professional (PMP®) and Certified Scrum Master (CSM®).
            </p>
            <p className="text-lg leading-relaxed mt-6">
              Passionate about AI, Web3, and DeFi technologies. Currently in final MBA term (4.0 GPA), with plans to pursue an MS in IT, followed by a PhD in AI/ML. Working towards ASQ 
              Lean Six Sigma Green Belt (LSS-GB) and ITIL v4 certifications.
            </p>
            <p className="text-lg leading-relaxed mt-6">
              Beyond program & project management, an amateur vibe coder, with experience in cybersecurity, AI agents and IT overall. 
              Constantly finding ways to find passive income streams using SaaS N8N AI agents. Managed $35M+ logistics operations for U.S. 
              Department of State aid to Ukraine. Led $56 million DVIS acquisition testing and validation. US Army veteran with 8 years of service.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Photo Gallery */}
      <Reveal delay={0.15}>
        <PhotoGallery
          photos={[
            {
              src: "/photo1.png",
              alt: "Photo 1",
            },
            {
              src: "/photo2.png",
              alt: "Photo 2",
            },
            {
              src: "/photo3.png",
              alt: "Photo 3",
            },
            {
              src: "/photo4.png",
              alt: "Photo 4",
            },
            {
              src: "/photo5.png",
              alt: "Photo 5",
            },
          ]}
        />
      </Reveal>
    </ScrollSection>
  );
}

