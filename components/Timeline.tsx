'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { TIMELINE_ITEMS } from '@/lib/projects-data';

export const Timeline: React.FC = () => {
  const { lang, t } = useLanguage();
  const isAr = lang === 'ar';

  return (
    <section className="section" id="timeline">
      <div className="container">
        <div className="section-head">
          <span className="section-tag font-mono">// EXECUTION_LOG</span>
          <h2 className="section-title">{t('timeline.title')}</h2>
        </div>

        <div className="timeline-wrap">
          {TIMELINE_ITEMS.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-date font-mono">
                  {isAr ? item.dateAr : item.dateEn}
                </span>
                <h3>{isAr ? item.titleAr : item.titleEn}</h3>
                <p>{isAr ? item.descAr : item.descEn}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
