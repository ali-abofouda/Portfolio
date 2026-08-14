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
          <span className="section-tag font-mono">// STACK_SPECIFICATION</span>
          <h2 className="section-title">{t('skills.title')}</h2>
        </div>

        <div className="skills-grid">
          {/* GenAI & Agentic Stack */}
          <SpotlightCard className="skill-card">
            <div className="skill-card-head">
              <div className="skill-icon-box">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3>{t('skills.ai')}</h3>
            </div>
            <div className="tags">
              <span className="tag font-mono">LangGraph</span>
              <span className="tag font-mono">LLM Multi-Agents</span>
              <span className="tag font-mono">LangChain</span>
              <span className="tag font-mono">RAG Pipelines</span>
              <span className="tag font-mono">PyTorch</span>
              <span className="tag font-mono">Function Calling</span>
              <span className="tag font-mono">Ollama / vLLM</span>
              <span className="tag font-mono">Vision-Language Models</span>
              <span className="tag font-mono">OpenAI / Claude APIs</span>
            </div>
          </SpotlightCard>

          {/* Backend & Vector Infrastructure */}
          <SpotlightCard className="skill-card">
            <div className="skill-card-head">
              <div className="skill-icon-box">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="8" rx="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" />
                  <line x1="6" y1="6" x2="6.01" y2="6" />
                  <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
              </div>
              <h3>{t('skills.backend')}</h3>
            </div>
            <div className="tags">
              <span className="tag font-mono">FastAPI</span>
              <span className="tag font-mono">ChromaDB</span>
              <span className="tag font-mono">PostgreSQL / pgvector</span>
              <span className="tag font-mono">RESTful APIs</span>
              <span className="tag font-mono">JSON Schema Validation</span>
              <span className="tag font-mono">Async Python</span>
              <span className="tag font-mono">ReportLab PDF</span>
            </div>
          </SpotlightCard>

          {/* Frontend & AI Interfaces */}
          <SpotlightCard className="skill-card">
            <div className="skill-card-head">
              <div className="skill-icon-box">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3>{t('skills.frontend')}</h3>
            </div>
            <div className="tags">
              <span className="tag font-mono">Next.js 15</span>
              <span className="tag font-mono">React 19</span>
              <span className="tag font-mono">TypeScript</span>
              <span className="tag font-mono">Tailwind CSS</span>
              <span className="tag font-mono">Supabase Auth (RLS)</span>
              <span className="tag font-mono">Zustand</span>
              <span className="tag font-mono">Recharts Analytics</span>
            </div>
          </SpotlightCard>

          {/* DevOps & Tools */}
          <SpotlightCard className="skill-card">
            <div className="skill-card-head">
              <div className="skill-icon-box">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h3>{t('skills.tools')}</h3>
            </div>
            <div className="tags">
              <span className="tag font-mono">Git & GitHub Actions</span>
              <span className="tag font-mono">Docker</span>
              <span className="tag font-mono">Vercel Deployment</span>
              <span className="tag font-mono">Zod Schema</span>
              <span className="tag font-mono">VS Code</span>
              <span className="tag font-mono">Postman</span>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};
