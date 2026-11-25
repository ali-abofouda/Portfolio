'use client';

import React, { useEffect } from 'react';
import { ProjectDetail } from '@/lib/projects-data';
import { useLanguage } from '@/lib/LanguageContext';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { lang, t } = useLanguage();

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isAr = lang === 'ar';
  const features = isAr ? project.featuresAr : project.featuresEn;

  return (
    <div className="modal-overlay active" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="modal-header">
          <div
            className="modal-icon-box"
            dangerouslySetInnerHTML={{ __html: project.iconSvg }}
          />
          <div>
            <span className="modal-badge font-mono">{t(project.badgeKey)}</span>
            <h3 className="modal-title">{isAr ? project.titleAr : project.title}</h3>
          </div>
        </div>

        <p className="modal-desc">{t(project.descKey)}</p>

        {project.metrics && project.metrics.length > 0 && (
          <div className="modal-section">
            <h4>{t('modal.metrics')}</h4>
            <div className="modal-metrics-grid">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="flagship-metric-item">
                  <span className="flagship-metric-value font-mono">{metric.value}</span>
                  <span className="flagship-metric-label">
                    {isAr ? metric.labelAr : metric.labelEn}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="modal-section">
          <h4>{t('modal.keyFeatures')}</h4>
          <ul className="modal-features">
            {features.map((feat, idx) => (
              <li key={idx}>
                <span className="feature-bullet font-mono">//</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="modal-section">
          <h4>{t('modal.techStack')}</h4>
          <div className="tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="tag font-mono">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {t('modal.viewRepo')}
          </a>
          {project.docsUrl && (
            <a
              href={project.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              {t('modal.viewDocs')}
            </a>
          )}
          <button className="btn btn-ghost" onClick={onClose}>
            {t('modal.close')}
          </button>
        </div>
      </div>
    </div>
  );
};
