"use client";

import { ScrollSection } from "@/components/ScrollSection";
import { Reveal } from "@/components/motion/Reveal";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { MediumArticle } from "@/lib/medium";

interface BlogSectionClientProps {
  articles: MediumArticle[];
}

export function BlogSectionClient({ articles }: BlogSectionClientProps) {
  return (
    <ScrollSection id="blog">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Blog
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-lg text-text-secondary mb-12 max-w-2xl">
          Articles and thoughts on software development, technology, and
          industry insights.
        </p>
      </Reveal>
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Reveal key={article.guid} delay={index * 0.1}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal delay={0.2}>
          <div className="text-center py-12">
            <p className="text-text-secondary text-lg mb-4">
              Medium integration not configured. Please set MEDIUM_USERNAME in your environment variables.
            </p>
          </div>
        </Reveal>
      )}
    </ScrollSection>
  );
}

