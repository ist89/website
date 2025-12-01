"use client";

import { ScrollSection } from "@/components/ScrollSection";
import { Reveal } from "@/components/motion/Reveal";
import { TimelineItem } from "@/components/cards/TimelineItem";
import experienceData from "@/data/experience.json";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <ScrollSection id="experience" className="pb-0 md:pb-4">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 flex items-center gap-3">
          <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-neutral-300" />
          Experience
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-lg text-text-secondary mb-12 max-w-2xl">
          A timeline of my professional journey, highlighting key roles,
          responsibilities, and technologies I've worked with.
        </p>
      </Reveal>
      <div className="max-w-4xl">
        {experienceData.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            company={item.company}
            period={item.period}
            description={item.description}
            technologies={item.technologies}
            index={index}
            location={item.location}
            projects={item.projects}
          />
        ))}
      </div>
    </ScrollSection>
  );
}

