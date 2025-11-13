import { ScrollSection } from "@/components/ScrollSection";
import { Reveal } from "@/components/motion/Reveal";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { fetchMediumArticles } from "@/lib/medium";
import { BlogSectionClient } from "./BlogSectionClient";

export const revalidate = 3600; // Revalidate every hour

export async function BlogSection() {
  const mediumUsername = process.env.MEDIUM_USERNAME || "";
  const articles = mediumUsername
    ? await fetchMediumArticles(mediumUsername)
    : [];

  return <BlogSectionClient articles={articles} />;
}

