"use client";

import { ScrollSection } from "@/components/ScrollSection";
import { Reveal } from "@/components/motion/Reveal";
import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/Badge";
import experienceData from "@/data/experience.json";
import { Briefcase, ExternalLink } from "lucide-react";

export function ExperienceSection() {
  const timelineData = experienceData.map((item) => ({
    title: item.period,
    content: (
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-neutral-200 mb-1">
          {item.title}
        </h3>
        <p className="text-neutral-400 font-medium mb-4 text-base md:text-lg">
          {item.company} &mdash; {item.location}
        </p>
        <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-6">
          {item.description}
        </p>

        {/* Photo Placeholders */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="relative h-24 md:h-32 rounded-lg overflow-hidden bg-neutral-800/50 border border-white/10">
            {/* Add Image component here when photos are ready */}
          </div>
          <div className="relative h-24 md:h-32 rounded-lg overflow-hidden bg-neutral-800/50 border border-white/10">
            {/* Add Image component here when photos are ready */}
          </div>
        </div>
        
        {item.projects && item.projects.length > 0 && (
          <div className="mb-6 space-y-4">
            {item.projects.map((project, idx) => (
              <div key={idx} className="bg-neutral-900/50 p-4 rounded-lg border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold text-neutral-200 text-base">{project.name}</h4>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
                <p className="text-sm md:text-base text-neutral-400">{project.description}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech, idx) => (
            <Badge key={idx} variant="outline" className="bg-neutral-800/50 text-neutral-300 border-neutral-700 text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <ScrollSection id="experience" className="py-4 min-h-0">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 flex items-center gap-3">
          <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-neutral-300" />
          Experience
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-lg text-text-secondary mb-8 max-w-2xl">
          A timeline of my professional journey, highlighting key roles,
          responsibilities, and technologies I've worked with.
        </p>
      </Reveal>
      <div className="w-full">
        <Timeline data={timelineData} />
      </div>
    </ScrollSection>
  );
}

