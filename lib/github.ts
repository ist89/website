export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
}

export interface PinnedProject {
  name: string;
  description?: string;
  url?: string;
  stars?: number;
  language?: string;
  topics?: string[];
}

export async function fetchGitHubRepos(
  username: string
): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();
    return repos.filter((repo) => !repo.name.includes("tdavidov"));
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

export async function getProjects(
  username: string
): Promise<(GitHubRepo | PinnedProject)[]> {
  try {
    // Try to load pinned projects first
    const pinnedProjects = await import("@/data/pinned-projects.json").catch(
      () => null
    );

    const repos = await fetchGitHubRepos(username);
    const pinnedNames = pinnedProjects?.default?.pinned || [];

    // Separate pinned and regular repos
    const pinned: (GitHubRepo | PinnedProject)[] = [];
    const regular: GitHubRepo[] = [];

    repos.forEach((repo) => {
      if (pinnedNames.includes(repo.name)) {
        pinned.push(repo);
      } else {
        regular.push(repo);
      }
    });

    // Sort regular repos by stars
    regular.sort((a, b) => b.stargazers_count - a.stargazers_count);

    return [...pinned, ...regular];
  } catch (error) {
    console.error("Error getting projects:", error);
    return [];
  }
}

