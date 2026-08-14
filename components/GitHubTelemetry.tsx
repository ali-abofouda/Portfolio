'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { SpotlightCard } from './SpotlightCard';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  stars: number;
  forks: number;
  language: string | null;
  url: string;
  updatedAt: string;
}

interface TelemetryData {
  username: string;
  publicRepos: number;
  followers: number;
  totalStars: number;
  recentRepos: GitHubRepo[];
  profileUrl: string;
}

export const GitHubTelemetry: React.FC = () => {
  const { t } = useLanguage();
  const [data, setData] = useState<TelemetryData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/github')
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setData(json);
        }
      })
      .catch((err) => console.error('Error fetching telemetry:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="section" id="github-telemetry">
      <div className="container">
        <div className="section-head">
          <span className="section-tag font-mono">{t('github.tag')}</span>
          <h2 className="section-title">{t('github.title')}</h2>
        </div>

        {/* Live Metrics Grid */}
        <div className="telemetry-stats">
          <SpotlightCard className="stat">
            <span className="stat-num font-mono">
              {loading ? '...' : data?.publicRepos ?? 12}
            </span>
            <span className="stat-label">{t('github.publicRepos')}</span>
          </SpotlightCard>

          <SpotlightCard className="stat">
            <span className="stat-num font-mono">
              {loading ? '...' : data?.totalStars ?? 18}
            </span>
            <span className="stat-label">{t('github.stars')}</span>
          </SpotlightCard>

          <SpotlightCard className="stat">
            <span className="stat-num font-mono">
              {loading ? '...' : data?.followers ?? 35}
            </span>
            <span className="stat-label">{t('github.followers')}</span>
          </SpotlightCard>
        </div>

        {/* Recent Repos Stream */}
        {data && data.recentRepos.length > 0 && (
          <div className="telemetry-repos-grid">
            {data.recentRepos.map((repo) => (
              <SpotlightCard key={repo.id} className="telemetry-repo-card">
                <div className="repo-card-head">
                  <span className="repo-name font-mono">{repo.name}</span>
                  {repo.language && (
                    <span className="repo-lang font-mono">{repo.language}</span>
                  )}
                </div>
                {repo.description && <p className="repo-desc">{repo.description}</p>}
                <div className="repo-card-footer">
                  <div className="repo-metrics font-mono">
                    <span>★ {repo.stars}</span>
                    <span>⑂ {repo.forks}</span>
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repo-link font-mono"
                  >
                    <span>View Repository →</span>
                  </a>
                </div>
              </SpotlightCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
