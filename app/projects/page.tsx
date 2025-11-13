import { Section } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { getProjects } from "@/lib/github";

export const revalidate = 3600; // Revalidate every hour

export default async function ProjectsPage() {
  const githubUsername = process.env.GITHUB_USERNAME || "";
  const projects = githubUsername
    ? await getProjects(githubUsername)
    : [];

  return (
    <>
      <Section>
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Projects
          </h1>
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
                {githubUsername
                  ? "No projects found. Please check your GitHub username configuration."
                  : "GitHub integration not configured. Please set GITHUB_USERNAME in your environment variables."}
              </p>
            </div>
          </Reveal>
        )}
      </Section>
    </>
  );
}

