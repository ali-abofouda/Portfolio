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

        {/* Compact Live Metrics Strip */}
        <div className="telemetry-stats">
          <SpotlightCard className="stat">
            <span className="stat-num font-mono">
              {loading ? '...' : data?.publicRepos ?? '--'}
            </span>
            <span className="stat-label">{t('github.publicRepos')}</span>
          </SpotlightCard>

          <SpotlightCard className="stat">
            <span className="stat-num font-mono">
              {loading ? '...' : data?.totalStars ?? '--'}
            </span>
            <span className="stat-label">{t('github.stars')}</span>
          </SpotlightCard>

          <SpotlightCard className="stat">
            <span className="stat-num font-mono">
              {loading ? '...' : data?.followers ?? '--'}
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
                    <span className="repo-metric-item">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span>{repo.stars}</span>
                    </span>
                    <span className="repo-metric-item">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="18" r="3" />
                        <circle cx="6" cy="6" r="3" />
                        <circle cx="18" cy="6" r="3" />
                        <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
                        <path d="M12 12v3" />
                      </svg>
                      <span>{repo.forks}</span>
                    </span>
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repo-link font-mono"
                  >
                    <span>{t('github.viewRepo')}</span>
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
