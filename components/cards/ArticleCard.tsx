import { Card } from "@/components/ui/Card";
import { ExternalLink, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { MediumArticle } from "@/lib/medium";

interface ArticleCardProps {
  article: MediumArticle;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="h-full">
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
          {article.title}
        </h3>
        <p className="text-text-secondary text-sm mb-4 flex-grow line-clamp-3">
          {article.contentSnippet}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-divider">
          <div className="flex items-center text-text-secondary text-xs">
            <Calendar className="w-4 h-4 mr-2" />
            {formatDate(article.pubDate)}
          </div>
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent hover:text-neutral-300 text-sm font-medium transition-colors"
          >
            Read on Medium
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </Card>
  );
}

