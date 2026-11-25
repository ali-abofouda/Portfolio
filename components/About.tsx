'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { SpotlightCard } from './SpotlightCard';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <span className="section-tag font-mono">// ENGINEER_PROFILE</span>
          <h2 className="section-title">{t('about.title')}</h2>
        </div>

        <div className="about-grid">
          <SpotlightCard className="about-bio-card">
            <div className="about-text">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>
          </SpotlightCard>

          <div className="about-stats-bento">
            <SpotlightCard className="stat stat-featured">
              <span className="stat-num font-mono">100%</span>
              <span className="stat-label">{t('about.statCorrectness')}</span>
            </SpotlightCard>

            <SpotlightCard className="stat">
              <span className="stat-num font-mono">53/53</span>
              <span className="stat-label">{t('about.statTests')}</span>
            </SpotlightCard>

            <SpotlightCard className="stat">
              <span className="stat-num font-mono">AR / EN</span>
              <span className="stat-label">{t('about.statLangs')}</span>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};
