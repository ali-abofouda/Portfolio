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

        <div className="skills-bento-grid">
          {/* Agents, Orchestration & AI Security */}
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
              <span className="tag tag-core font-mono">LangGraph (StateGraph)</span>
              <span className="tag tag-core font-mono">LiteLLM Router</span>
              <span className="tag tag-core font-mono">Model Armor Guardrails</span>
              <span className="tag font-mono">ReAct Multi-Agents</span>
              <span className="tag font-mono">Adversarial Red Teaming</span>
              <span className="tag font-mono">LLM-as-a-Judge</span>
              <span className="tag font-mono">LangSmith Tracing</span>
              <span className="tag font-mono">LangGraph Studio</span>
            </div>
          </SpotlightCard>

          {/* Hybrid RAG, Retrieval & Backend APIs */}
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
              <span className="tag tag-core font-mono">Qdrant Cloud (Hybrid)</span>
              <span className="tag tag-core font-mono">FastEmbed (BM25 / ONNX)</span>
              <span className="tag tag-core font-mono">Cross-Encoder Reranking</span>
              <span className="tag font-mono">Semantic Caching</span>
              <span className="tag font-mono">FastAPI</span>
              <span className="tag font-mono">Pydantic v2 DTOs</span>
              <span className="tag font-mono">Async Python 3.12</span>
            </div>
          </SpotlightCard>

          {/* Interfaces & Access Governance */}
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
              <span className="tag tag-core font-mono">Next.js 15</span>
              <span className="tag tag-core font-mono">TypeScript</span>
              <span className="tag font-mono">React 19</span>
              <span className="tag font-mono">Streamlit (AppTest)</span>
              <span className="tag font-mono">Chainlit</span>
              <span className="tag font-mono">Google OAuth 2.0 (RBAC)</span>
              <span className="tag font-mono">Tailwind CSS</span>
            </div>
          </SpotlightCard>

          {/* Cloud, Containers & Automated Testing */}
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
              <span className="tag tag-core font-mono">Docker & Compose</span>
              <span className="tag tag-core font-mono">Google Cloud Run</span>
              <span className="tag font-mono">Unittest / Pytest (53 Tests)</span>
              <span className="tag font-mono">Git & GitHub Actions</span>
              <span className="tag font-mono">Vercel</span>
              <span className="tag font-mono">Linux</span>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};
