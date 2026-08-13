'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export const Timeline: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section" id="timeline">
      <div className="container">
        <div className="section-head">
          <span className="section-num">04</span>
          <h2 className="section-title">{t('timeline.title')}</h2>
        </div>

        <div className="timeline-wrap">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-date">{t('timeline.item1.date')}</span>
              <h3>{t('timeline.item1.title')}</h3>
              <p>{t('timeline.item1.desc')}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-date">{t('timeline.item2.date')}</span>
              <h3>{t('timeline.item2.title')}</h3>
              <p>{t('timeline.item2.desc')}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-date">{t('timeline.item3.date')}</span>
              <h3>{t('timeline.item3.title')}</h3>
              <p>{t('timeline.item3.desc')}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-date">{t('timeline.item4.date')}</span>
              <h3>{t('timeline.item4.title')}</h3>
              <p>{t('timeline.item4.desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
