'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

interface NodeDetail {
  id: string;
  label: string;
  type: string;
  spec: string;
  detailsEn: string;
  detailsAr: string;
}

const NODES: NodeDetail[] = [
  {
    id: 'input',
    label: '01. USER_INPUT',
    type: 'Prompt & Context Payload',
    spec: 'Multilingual Stream',
    detailsEn: 'User query ingestion with locale detection, intent classification, and initial context packaging.',
    detailsAr: 'استقبال استعلام المستخدم مع تحديد اللغة وتصنيف الهدف وتغليف السياق الأولي.',
  },
  {
    id: 'rag',
    label: '02. RAG_RETRIEVAL',
    type: 'Vector Search Engine',
    spec: 'pgvector / ChromaDB',
    detailsEn: 'Dense vector retrieval over document embeddings using cosine similarity and hybrid search reranking.',
    detailsAr: 'استرجاع متجهات المستندات باستخدام البحث الهجين وتصنيف التشابه لجلب المعلومات.',
  },
  {
    id: 'graph',
    label: '03. LANGGRAPH_AGENT',
    type: 'State Machine Orchestrator',
    spec: 'Stateful DAG Workflow',
    detailsEn: 'Multi-agent decision graph controlling tool selection, symptom extraction, and recursive refinement.',
    detailsAr: 'رسم بياني متعدد الوكلاء لإدارة اختيار الأدوات واستخلاص الأعراض والتحسين المتكرر.',
  },
  {
    id: 'vllm',
    label: '04. MODEL_INFERENCE',
    type: 'vLLM / Tool Execution',
    spec: 'PyTorch / Function Calls',
    detailsEn: 'Local/cloud LLM inference with structured tool execution, Pydantic validation, and API fallback.',
    detailsAr: 'توليد النماذج اللغوية وتنفيذ الأدوات الخارجية مع التحقق من الهيكل البرمجي Pydantic.',
  },
  {
    id: 'output',
    label: '05. STRUCTURED_OUTPUT',
    type: 'JSON Report Stream',
    spec: 'Validated Response',
    detailsEn: 'Final structured output streaming formatted diagnostic reports, citations, and execution telemetry.',
    detailsAr: 'بث المخرجات النهائية وتوليد التقارير الطبية/البرمجية المنظمة مع استشهاد المصادر.',
  },
];

export const Hero: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeNode, setActiveNode] = useState<NodeDetail>(NODES[2]);

  const isAr = lang === 'ar';

  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        {/* Left Column: Core Positioning & CTAs */}
        <div className="hero-content">
          <div className="hero-status">
            <span className="status-dot" />
            <span>{t('hero.status')}</span>
          </div>

          <h1 className="hero-title">{t('hero.titleLine1')}</h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <p className="hero-desc">{t('hero.desc')}</p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              <span>{t('hero.viewWork')}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <a href="#contact" className="btn btn-ghost">
              <span>{t('hero.getInTouch')}</span>
            </a>

            <a
              href="https://github.com/ali-abofouda"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>

          <div className="hero-meta">
            <span className="meta-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{t('hero.egypt')}</span>
            </span>
            <span className="meta-pill font-mono">GenAI & LLM Agents</span>
            <span className="meta-pill font-mono">LangGraph & PyTorch</span>
          </div>
        </div>

        {/* Right Column: Signature Agent Pipeline Inspector Console */}
        <div className="hero-console">
          <div className="console-header">
            <div className="console-controls">
              <span className="control-dot close" />
              <span className="control-dot min" />
              <span className="control-dot max" />
            </div>
            <div className="console-title">
              <span className="font-mono">langgraph_agent_pipeline.py</span>
            </div>
            <div className="console-status">
              <span className="pulse-indicator" />
              <span className="font-mono">STATE: ORCHESTRATING</span>
            </div>
          </div>

          <div className="console-body">
            {/* Interactive Graph Node Flow */}
            <div className="pipeline-flow">
              <div className="flow-nodes">
                {NODES.map((node) => {
                  const isActive = activeNode.id === node.id;
                  return (
                    <button
                      key={node.id}
                      className={`pipeline-node ${isActive ? 'active' : ''}`}
                      onMouseEnter={() => setActiveNode(node)}
                      onClick={() => setActiveNode(node)}
                    >
                      <div className="node-marker" />
                      <div className="node-info">
                        <span className="node-label font-mono">{node.label}</span>
                        <span className="node-type">{node.type}</span>
                      </div>
                      <span className="node-spec font-mono">{node.spec}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Node Spec Details Box */}
            <div className="node-inspector">
              <div className="inspector-head">
                <span className="inspector-title font-mono">// NODE INSPECTOR & SPECIFICATION</span>
                <span className="inspector-active-id font-mono">{activeNode.id.toUpperCase()}</span>
              </div>
              <div className="inspector-content">
                <p className="inspector-desc">
                  {isAr ? activeNode.detailsAr : activeNode.detailsEn}
                </p>
                <div className="inspector-tags font-mono">
                  <span>FRAMEWORK: LangGraph v0.2</span>
                  <span>INFRA: FastAPI + pgvector</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
