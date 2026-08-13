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
          <span className="section-num">01</span>
          <h2 className="section-title">{t('about.title')}</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </div>

          <div className="about-stats">
            <SpotlightCard className="stat">
              <span className="stat-num">6+</span>
              <span className="stat-label">{t('about.statProjects')}</span>
            </SpotlightCard>

            <SpotlightCard className="stat">
              <span className="stat-num">4</span>
              <span className="stat-label">{t('about.statModels')}</span>
            </SpotlightCard>

            <SpotlightCard className="stat">
              <span className="stat-num">AR / EN</span>
              <span className="stat-label">{t('about.statLangs')}</span>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};
