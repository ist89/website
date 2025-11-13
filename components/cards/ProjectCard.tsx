import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, Github, Star } from "lucide-react";
import { GitHubRepo } from "@/lib/github";

interface ProjectCardProps {
  project: GitHubRepo;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-heading font-semibold text-text-primary">
            {project.name}
          </h3>
          <div className="flex items-center space-x-2">
            {project.stargazers_count > 0 && (
              <div className="flex items-center text-text-secondary text-sm">
                <Star className="w-4 h-4 mr-1 fill-current" />
                {project.stargazers_count}
              </div>
            )}
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} on GitHub`}
              className="text-text-secondary hover:text-accent transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        <p className="text-text-secondary text-sm mb-4 flex-grow">
          {project.description || "No description available."}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {project.language && (
            <Badge variant="accent">{project.language}</Badge>
          )}
          {project.topics?.slice(0, 3).map((topic) => (
            <Badge key={topic}>{topic}</Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}

