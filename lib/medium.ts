import Parser from "rss-parser";

export interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  guid: string;
}

const parser = new Parser({
  customFields: {
    item: ["content:encoded", "media:content"],
  },
});

export async function fetchMediumArticles(
  username: string
): Promise<MediumArticle[]> {
  try {
    const feedUrl = `https://medium.com/feed/@${username}`;
    const feed = await parser.parseURL(feedUrl);

    return (
      feed.items?.map((item) => ({
        title: item.title || "Untitled",
        link: item.link || "",
        pubDate: item.pubDate || new Date().toISOString(),
        contentSnippet: item.contentSnippet || item.content?.substring(0, 200) || "",
        guid: item.guid || item.link || "",
      })) || []
    );
  } catch (error) {
    console.error("Error fetching Medium articles:", error);
    return [];
  }
}

