import { ScrollSection } from "@/components/ScrollSection";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { getProjects } from "@/lib/github";
import { ProjectsSectionClient } from "./ProjectsSectionClient";

export const revalidate = 3600; // Revalidate every hour

export async function ProjectsSection() {
  const githubUsername = process.env.GITHUB_USERNAME || "";
  const projects = githubUsername
    ? await getProjects(githubUsername)
    : [];

  return <ProjectsSectionClient projects={projects} />;
}

