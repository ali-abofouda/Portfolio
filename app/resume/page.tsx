'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function ResumePage() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  return (
    <div className="resume-page-shell">
      <div className="resume-toolbar no-print">
        <Link href="/" className="btn btn-outline">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>{isAr ? 'العودة إلى البورتفوليو' : 'Back to Portfolio'}</span>
        </Link>

        <div className="resume-toolbar-actions">
          <span className="resume-sync-badge font-mono">
            {isAr ? 'متزامن مع resume/cv.tex' : 'Synced with resume/cv.tex'}
          </span>
          <button
            type="button"
            onClick={() => window.print()}
            className="btn btn-primary"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            <span>{isAr ? 'طباعة / حفظ كـ PDF' : 'Print / Save as PDF'}</span>
          </button>
        </div>
      </div>

      <article className="resume-sheet" dir="ltr">
        {/* Heading */}
        <header className="cv-header">
          <h1>Ali Ashraf Abofouda</h1>
          <p className="cv-contact-line">
            <span>01005335458</span>
            <span>|</span>
            <a href="mailto:ali.ashraf.abofouda@gmail.com">ali.ashraf.abofouda@gmail.com</a>
            <span>|</span>
            <a href="https://www.linkedin.com/in/ali-ashraf-8b619b22a/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span>|</span>
            <a href="https://github.com/ali-abofouda" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span>|</span>
            <Link href="/">Portfolio</Link>
          </p>
        </header>

        {/* Professional Summary */}
        <section className="cv-section">
          <h2>Professional Summary</h2>
          <p className="cv-summary">
            AI Systems &amp; Forward Deployed Engineer specializing in production-grade Agentic Workflows,
            Advanced RAG Architectures, AI Security, and Full-Stack LLM systems. Experienced in architecting
            stateful multi-agent graphs with LangGraph, Model Context Protocol (MCP) integrations, Qdrant
            hybrid retrieval (dense + BM25 sparse with cross-encoder reranking), semantic caching, and
            automated LLM-as-a-Judge evaluation. Strong software engineering background spanning FastAPI
            microservices, PostgreSQL, .NET 8 Clean Architecture, Docker, and Google Cloud Run.
          </p>
        </section>

        {/* Education */}
        <section className="cv-section">
          <h2>Education</h2>
          <div className="cv-row">
            <strong>Tanta University -- Faculty of Engineering</strong>
            <span>2026</span>
          </div>
          <div className="cv-subrow">
            <em>B.Sc. in Computer and Automatic Control Engineering (Batch 31)</em>
            <em>Tanta, Egypt</em>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="cv-section">
          <h2>Technical Skills</h2>
          <ul className="cv-skills-list">
            <li>
              <strong>AI Agents &amp; Orchestration:</strong> LangGraph (StateGraph, Checkpointing, Studio),
              Multi-Agent Systems, MCP (Model Context Protocol), LiteLLM Router, Tool/Function Calling, Human-in-the-Loop
            </li>
            <li>
              <strong>Advanced RAG &amp; Retrieval:</strong> Hybrid Search (Dense + FastEmbed BM25),
              Cross-Encoder Reranking (Jina), ONNX Semantic Caching, Contextual Chunking, Qdrant Cloud, ChromaDB
            </li>
            <li>
              <strong>AI Security &amp; Evaluation:</strong> LLM-as-Judge, 5-Level Eval Frameworks, RAG Triad,
              Adversarial Red Teaming, Model Armor Guardrails, Brier Score Calibration, LangSmith Tracing, Pydantic v2
            </li>
            <li>
              <strong>Backend &amp; Full-Stack:</strong> Python (FastAPI, AsyncIO), C# / .NET 8 (Clean Architecture),
              Streamlit, Chainlit, Next.js, REST APIs, Google OAuth 2.0 (RBAC), Microservices
            </li>
            <li>
              <strong>Cloud, Data &amp; DevOps:</strong> Google Cloud Platform (GCP, Cloud Run), PostgreSQL, MongoDB,
              Docker, Docker Compose, CI/CD, Unittest / Pytest (AppTest), Git, Linux
            </li>
          </ul>
        </section>

        {/* Projects */}
        <section className="cv-section">
          <h2>Projects</h2>

          <div className="cv-project">
            <div className="cv-row">
              <span>
                <strong>Hakeem AI</strong> -- Medical Multi-Agent System (Graduation Project) |{' '}
                <em>LangGraph, MCP, PostgreSQL, .NET 8, FastAPI</em>
              </span>
              <span>2026</span>
            </div>
            <ul className="cv-bullets">
              <li>
                Architected an asynchronous, stateful medical diagnostic multi-agent system using{' '}
                <strong>LangGraph StateGraph</strong>, isolating clinical diagnosis, symptom merging, red-flag
                screening, off-topic filtering, and dynamic token rate limiting into modular graph nodes.
              </li>
              <li>
                Implemented an extensible <strong>Model Context Protocol (MCP)</strong> layer and structured
                tool-calling interface enabling autonomous agents to safely query doctor registries, patient EHRs,
                appointment slots, and prescription records.
              </li>
              <li>
                Designed persistent conversational checkpointing and ACID session state in{' '}
                <strong>PostgreSQL</strong>, interfacing seamlessly with an enterprise{' '}
                <strong>.NET 8 Clean Architecture</strong> backend for medical record lifecycle management.
              </li>
              <li>
                Developed a rigorous <strong>5-Level AI Evaluation Framework</strong> (LLM-as-Judge, Brier Score
                calibration, safety compliance, clinical accuracy, and weighted utility) paired with a Plotly
                telemetry dashboard to minimize hallucinations.
              </li>
              <li>
                Engineered high-throughput asynchronous REST APIs using <strong>FastAPI</strong> with real-time
                response streaming and strict schema validation via Pydantic.
              </li>
            </ul>
          </div>

          <div className="cv-project">
            <div className="cv-row">
              <span>
                <strong>HR Policy RAG Assistant</strong> -- Enterprise Secure Agentic RAG |{' '}
                <em>LangGraph, Qdrant, LiteLLM, FastAPI, Docker, GCP</em>
              </span>
              <span>2026</span>
            </div>
            <ul className="cv-bullets">
              <li>
                Architected a Domain-Driven, dual-interface enterprise RAG system (<strong>FastAPI</strong> REST
                API + <strong>Streamlit/Chainlit</strong> UIs) powered by <strong>LangGraph ReAct</strong> state
                machines, <strong>LiteLLM</strong> failover routing (Gemini -&gt; Groq), and{' '}
                <strong>LangGraph Studio</strong> tracing.
              </li>
              <li>
                Built an idempotent ETL and <strong>Hybrid Search</strong> pipeline in <strong>Qdrant Cloud</strong>{' '}
                (Jina 768-dim dense + <strong>FastEmbed BM25</strong> sparse, deterministic UUID5 upserts) paired with
                a <strong>Cross-Encoder Re-ranker</strong> to eliminate multi-format distractor noise.
              </li>
              <li>
                Engineered a local ONNX-accelerated <strong>Semantic Cache</strong> (cosine similarity &ge; 0.80)
                cutting repeat query latency from 6-7s down to 50-100ms, alongside three-tier{' '}
                <strong>AI Guardrails</strong> blocking <strong>8/8 (100%)</strong> adversarial Red Team attacks.
              </li>
              <li>
                Validated system reliability with automated <strong>LLM-as-a-Judge</strong> pipelines on{' '}
                <strong>LangSmith</strong> achieving <strong>100% Correctness</strong> and{' '}
                <strong>90% Groundedness</strong>, plus <strong>53/53 passing unit and integration tests</strong>{' '}
                (including headless Streamlit AppTest).
              </li>
              <li>
                Containerized microservices via <strong>Docker Compose</strong> and a <strong>Cloud Run</strong>{' '}
                Dockerfile pre-warming BM25 weights at build time (cutting cold starts from &gt;90s to &lt;5s),
                secured by <strong>Google OAuth 2.0</strong> email-whitelisted RBAC.
              </li>
            </ul>
          </div>

          <div className="cv-project">
            <div className="cv-row">
              <span>
                <strong>AI FDE Enterprise Capstone</strong> -- Cloud E-Commerce Modernization |{' '}
                <em>GCP, MongoDB, Python, Docker, Legacy Systems</em>
              </span>
              <span>Upcoming</span>
            </div>
            <ul className="cv-bullets">
              <li>
                Spearheading the architecture of an enterprise Forward Deployed Engineering (FDE) AI platform on{' '}
                <strong>Google Cloud Platform (GCP)</strong> to modernize legacy e-commerce workflows and transaction
                management systems.
              </li>
              <li>
                Designing hybrid data ingestion and synchronization pipelines between distributed{' '}
                <strong>MongoDB</strong> document stores and legacy ERP systems, providing low-latency contextual
                data for autonomous AI inventory agents.
              </li>
              <li>
                Developing containerized microservices using <strong>Docker</strong> and GCP Cloud Run, architecting
                event-driven integration layers to bridge legacy backend protocols with modern LLM-driven process
                automation.
              </li>
              <li>
                Implementing enterprise security controls, CI/CD automated deployment pipelines, and regression testing
                suites to ensure high system availability across legacy infrastructure transitions.
              </li>
            </ul>
          </div>
        </section>

        {/* Languages */}
        <section className="cv-section">
          <h2>Languages</h2>
          <p className="cv-languages">
            <strong>Arabic:</strong> Native &nbsp;|&nbsp; <strong>English:</strong> Professional Working Proficiency
          </p>
        </section>
      </article>
    </div>
  );
}
