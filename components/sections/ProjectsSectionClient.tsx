"use client";

import { ScrollSection } from "@/components/ScrollSection";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { GitHubRepo, PinnedProject } from "@/lib/github";

interface ProjectsSectionClientProps {
  projects: (GitHubRepo | PinnedProject)[];
}

export function ProjectsSectionClient({ projects }: ProjectsSectionClientProps) {
  return (
    <ScrollSection id="projects">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Projects
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-lg text-text-secondary mb-12 max-w-2xl">
          A collection of my open-source projects and contributions. Pinned
          projects are featured first, followed by popular repositories.
        </p>
      </Reveal>
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.id || project.name} delay={index * 0.1}>
              <ProjectCard project={project as any} />
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal delay={0.2}>
          <div className="text-center py-12">
            <p className="text-text-secondary text-lg mb-4">
              GitHub integration not configured. Please set GITHUB_USERNAME in your environment variables.
            </p>
          </div>
        </Reveal>
      )}
    </ScrollSection>
  );
}

