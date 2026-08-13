'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head">
          <span className="section-num">02</span>
          <h2 className="section-title">{t('skills.title')}</h2>
        </div>

        <div className="skills-grid">
          {/* AI & ML */}
          <div className="skill-card">
            <div className="skill-card-head">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <rect x="9" y="9" width="6" height="6" />
                <line x1="9" y1="1" x2="9" y2="4" />
                <line x1="15" y1="1" x2="15" y2="4" />
                <line x1="9" y1="20" x2="9" y2="23" />
                <line x1="15" y1="20" x2="15" y2="23" />
                <line x1="20" y1="9" x2="23" y2="9" />
                <line x1="20" y1="15" x2="23" y2="15" />
                <line x1="1" y1="9" x2="4" y2="9" />
                <line x1="1" y1="15" x2="4" y2="15" />
              </svg>
              <h3>{t('skills.ai')}</h3>
            </div>
            <div className="tags">
              <span className="tag">Python</span>
              <span className="tag">PyTorch</span>
              <span className="tag">Torchvision</span>
              <span className="tag">LangGraph</span>
              <span className="tag">RAG</span>
              <span className="tag">OpenCV</span>
              <span className="tag">Scikit-Learn</span>
              <span className="tag">U-Net / ResNet</span>
              <span className="tag">ChromaDB</span>
            </div>
          </div>

          {/* Backend */}
          <div className="skill-card">
            <div className="skill-card-head">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="8" rx="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
              </svg>
              <h3>{t('skills.backend')}</h3>
            </div>
            <div className="tags">
              <span className="tag">FastAPI</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">RESTful APIs</span>
              <span className="tag">JSON Schema</span>
              <span className="tag">Asyncio</span>
              <span className="tag">ReportLab PDF</span>
              <span className="tag">Jinja2</span>
            </div>
          </div>

          {/* Frontend */}
          <div className="skill-card">
            <div className="skill-card-head">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              <h3>{t('skills.frontend')}</h3>
            </div>
            <div className="tags">
              <span className="tag">Next.js 16</span>
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Tailwind CSS</span>
              <span className="tag">Supabase Auth</span>
              <span className="tag">Zustand</span>
              <span className="tag">Recharts</span>
              <span className="tag">HTML5 / CSS3</span>
            </div>
          </div>

          {/* Tools & Quality */}
          <div className="skill-card">
            <div className="skill-card-head">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              <h3>{t('skills.tools')}</h3>
            </div>
            <div className="tags">
              <span className="tag">Git & GitHub</span>
              <span className="tag">VS Code</span>
              <span className="tag">Jupyter</span>
              <span className="tag">Postman</span>
              <span className="tag">Vercel Deployment</span>
              <span className="tag">Zod Validation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
