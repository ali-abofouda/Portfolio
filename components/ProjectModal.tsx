'use client';

import React from 'react';
import { ProjectDetail } from '@/lib/projects-data';
import { useLanguage } from '@/lib/LanguageContext';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { lang, t } = useLanguage();

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
            <h3 className="modal-title">{isAr ? project.titleAr : project.title}</h3>
            <span className="modal-badge">{t(project.badgeKey)}</span>
          </div>
        </div>

        <p className="modal-desc">{t(project.descKey)}</p>

        <div className="modal-section">
          <h4>{t('modal.keyFeatures')}</h4>
          <ul className="modal-features">
            {features.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>
        </div>

        <div className="modal-section">
          <h4>{t('modal.techStack')}</h4>
          <div className="tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="tag">
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
          <button className="btn btn-ghost" onClick={onClose}>
            {t('modal.close')}
          </button>
        </div>
      </div>
    </div>
  );
};
