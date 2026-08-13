'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { SpotlightCard } from './SpotlightCard';

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
          {/* GenAI & Agentic Stack */}
          <SpotlightCard className="skill-card">
            <div className="skill-card-head">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <h3>{t('skills.ai')}</h3>
            </div>
            <div className="tags">
              <span className="tag">LangGraph</span>
              <span className="tag">LLM Multi-Agents</span>
              <span className="tag">LangChain</span>
              <span className="tag">RAG Pipelines</span>
              <span className="tag">PyTorch</span>
              <span className="tag">Function Calling</span>
              <span className="tag">Ollama / vLLM</span>
              <span className="tag">Vision-Language Models</span>
              <span className="tag">OpenAI / Claude APIs</span>
            </div>
          </SpotlightCard>

          {/* Backend & Vector Infrastructure */}
          <SpotlightCard className="skill-card">
            <div className="skill-card-head">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="8" rx="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
              </svg>
              <h3>{t('skills.backend')}</h3>
            </div>
            <div className="tags">
              <span className="tag">FastAPI</span>
              <span className="tag">ChromaDB</span>
              <span className="tag">PostgreSQL / pgvector</span>
              <span className="tag">RESTful APIs</span>
              <span className="tag">JSON Schema Validation</span>
              <span className="tag">Async Python</span>
              <span className="tag">ReportLab PDF</span>
            </div>
          </SpotlightCard>

          {/* Frontend & AI Interfaces */}
          <SpotlightCard className="skill-card">
            <div className="skill-card-head">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              <h3>{t('skills.frontend')}</h3>
            </div>
            <div className="tags">
              <span className="tag">Next.js 15</span>
              <span className="tag">React 19</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Tailwind CSS</span>
              <span className="tag">Supabase Auth (RLS)</span>
              <span className="tag">Zustand</span>
              <span className="tag">Recharts Analytics</span>
            </div>
          </SpotlightCard>

          {/* DevOps & Tools */}
          <SpotlightCard className="skill-card">
            <div className="skill-card-head">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              <h3>{t('skills.tools')}</h3>
            </div>
            <div className="tags">
              <span className="tag">Git & GitHub Actions</span>
              <span className="tag">Docker</span>
              <span className="tag">Vercel Deployment</span>
              <span className="tag">Zod Schema</span>
              <span className="tag">VS Code</span>
              <span className="tag">Postman</span>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};
