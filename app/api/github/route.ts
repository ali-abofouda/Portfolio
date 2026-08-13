import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const githubToken = process.env.GITHUB_TOKEN;
    const headers: Record<string, string> = {
      'User-Agent': 'NextJS-Portfolio-App',
    };

    if (githubToken) {
      headers['Authorization'] = `token ${githubToken}`;
    }

    const res = await fetch('https://api.github.com/users/aliashraf', {
      headers,
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({
        success: true,
        username: 'aliashraf',
        public_repos: 12,
        followers: 35,
        location: 'Egypt',
        bio: 'AI / Machine Learning Engineer',
      });
    }

    const data = await res.json();
    return NextResponse.json({
      success: true,
      username: data.login,
      public_repos: data.public_repos,
      followers: data.followers,
      location: data.location || 'Egypt',
      bio: data.bio || 'AI / Machine Learning Engineer',
      avatar_url: data.avatar_url,
    });
  } catch (error) {
    console.error('GitHub API Route Error:', error);
    return NextResponse.json({
      success: true,
      username: 'aliashraf',
      public_repos: 12,
      followers: 35,
      location: 'Egypt',
      bio: 'AI / Machine Learning Engineer',
    });
  }
}
