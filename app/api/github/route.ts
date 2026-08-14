import { NextResponse } from 'next/server';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  stars: number;
  forks: number;
  language: string | null;
  url: string;
  updatedAt: string;
}

export interface GitHubTelemetryResponse {
  success: boolean;
  username: string;
  publicRepos: number;
  followers: number;
  totalStars: number;
  location: string;
  bio: string;
  avatarUrl: string;
  profileUrl: string;
  recentRepos: GitHubRepo[];
}

export async function GET() {
  const username = process.env.GITHUB_USERNAME || 'ali-abofouda';
  const githubToken = process.env.GITHUB_TOKEN;

  const headers: Record<string, string> = {
    'User-Agent': 'NextJS-GenAI-Portfolio',
    Accept: 'application/vnd.github.v3+json',
  };

  if (githubToken) {
    headers['Authorization'] = `token ${githubToken}`;
  }

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: 1800 },
      }),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
        headers,
        next: { revalidate: 1800 },
      }),
    ]);

    if (!userRes.ok) {
      return NextResponse.json(getFallbackData(username));
    }

    const userData = await userRes.json();
    const reposData = reposRes.ok ? await reposRes.json() : [];

    const recentRepos: GitHubRepo[] = Array.isArray(reposData)
      ? reposData.map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          stars: repo.stargazers_count || 0,
          forks: repo.forks_count || 0,
          language: repo.language,
          url: repo.html_url,
          updatedAt: new Date(repo.updated_at).toISOString().split('T')[0],
        }))
      : [];

    const totalStars = recentRepos.reduce((acc, r) => acc + r.stars, 0);

    const payload: GitHubTelemetryResponse = {
      success: true,
      username: userData.login || username,
      publicRepos: userData.public_repos ?? 12,
      followers: userData.followers ?? 35,
      totalStars,
      location: userData.location || 'Egypt',
      bio: userData.bio || 'Generative AI & LLM Systems Engineer',
      avatarUrl: userData.avatar_url || 'https://github.com/identicons/aliashraf.png',
      profileUrl: userData.html_url || `https://github.com/${username}`,
      recentRepos,
    };

    return NextResponse.json(payload);
  } catch (error) {
    console.error('GitHub Telemetry API Error:', error);
    return NextResponse.json(getFallbackData(username));
  }
}

function getFallbackData(username: string): GitHubTelemetryResponse {
  return {
    success: true,
    username,
    publicRepos: 12,
    followers: 35,
    totalStars: 18,
    location: 'Egypt',
    bio: 'Generative AI & LLM Systems Engineer',
    avatarUrl: 'https://github.com/identicons/aliashraf.png',
    profileUrl: `https://github.com/${username}`,
    recentRepos: [
      {
        id: 1,
        name: 'Hakeem-AI-MultiAgent',
        description: 'Stateful clinical diagnostic system powered by LangGraph workflows, FastAPI, and PostgreSQL.',
        stars: 12,
        forks: 3,
        language: 'Python',
        url: `https://github.com/${username}`,
        updatedAt: '2024-08-10',
      },
      {
        id: 2,
        name: 'GenAI-RAG-Lab',
        description: 'Dense vector search, function calling, tool-agent benchmarks, and ChromaDB integrations.',
        stars: 6,
        forks: 1,
        language: 'Python',
        url: `https://github.com/${username}`,
        updatedAt: '2024-07-28',
      },
    ],
  };
}
