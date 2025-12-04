import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, Github, Star } from "lucide-react";
import { GitHubRepo, PinnedProject } from "@/lib/github";

interface ProjectCardProps {
  project: GitHubRepo | PinnedProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Handle both GitHubRepo and PinnedProject types
  const isGitHubRepo = "html_url" in project;
  const name = project.name;
  const description = isGitHubRepo ? project.description : project.description || "No description available.";
  const language = isGitHubRepo ? project.language : project.language;
  const topics = isGitHubRepo ? project.topics : project.topics || [];
  const stars = isGitHubRepo ? project.stargazers_count : project.stars || 0;
  const url = isGitHubRepo ? project.html_url : project.url || "#";

  return (
    <Card>
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-heading font-semibold text-text-primary">
            {name}
          </h3>
          <div className="flex items-center space-x-2">
            {stars > 0 && (
              <div className="flex items-center text-text-secondary text-sm">
                <Star className="w-4 h-4 mr-1 fill-current" />
                {stars}
              </div>
            )}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${name} on GitHub`}
              className="text-text-secondary hover:text-accent transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        <p className="text-text-secondary text-sm mb-4 flex-grow">
          {description || "No description available."}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {language && (
            <Badge variant="accent">{language}</Badge>
          )}
          {topics?.slice(0, 5).map((topic) => (
            <Badge key={topic}>{topic}</Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}

