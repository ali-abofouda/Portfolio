'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

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
            <div className="stat">
              <span className="stat-num">6+</span>
              <span className="stat-label">{t('about.statProjects')}</span>
            </div>
            <div className="stat">
              <span className="stat-num">4</span>
              <span className="stat-label">{t('about.statModels')}</span>
            </div>
            <div className="stat">
              <span className="stat-num">AR / EN</span>
              <span className="stat-label">{t('about.statLangs')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
