'use client';

import React, { useState } from 'react';
import { PROJECT_DETAILS, ProjectDetail } from '@/lib/projects-data';
import { ProjectModal } from './ProjectModal';
import { SpotlightCard } from './SpotlightCard';
import { useLanguage } from '@/lib/LanguageContext';

export const Projects: React.FC = () => {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'agents' | 'rag' | 'fullstack'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const projectsList = Object.values(PROJECT_DETAILS);
  const filteredProjects = projectsList.filter((p) => {
    if (filter === 'all') return true;
    return p.category.includes(filter);
  });

  const isAr = lang === 'ar';

  return (
    <>
      <section className="section" id="projects">
        <div className="container">
          <div className="section-head">
            <span className="section-num">03</span>
            <h2 className="section-title">{t('projects.title')}</h2>
          </div>

          <div className="filter-tabs">
            <button
              className={`tab-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              {t('projects.tabAll')}
            </button>
            <button
              className={`tab-btn ${filter === 'agents' ? 'active' : ''}`}
              onClick={() => setFilter('agents')}
            >
              {t('projects.tabAgents')}
            </button>
            <button
              className={`tab-btn ${filter === 'rag' ? 'active' : ''}`}
              onClick={() => setFilter('rag')}
            >
              {t('projects.tabRag')}
            </button>
            <button
              className={`tab-btn ${filter === 'fullstack' ? 'active' : ''}`}
              onClick={() => setFilter('fullstack')}
            >
              {t('projects.tabFullstack')}
            </button>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <SpotlightCard key={project.id} className="project-card">
                <div className="project-top">
                  <div
                    className="project-icon-box"
                    dangerouslySetInnerHTML={{ __html: project.iconSvg }}
                  />
                  <span className="project-badge">{t(project.badgeKey)}</span>
                </div>

                <h3>{isAr ? project.titleAr : project.title}</h3>
                <p>{t(project.descKey)}</p>

                <div className="tags">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <button
                    className="btn-detail"
                    onClick={() => setSelectedProject(project)}
                  >
                    {t('projects.viewDetails')}
                  </button>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link"
                    aria-label="GitHub Repository"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                    </svg>
                  </a>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};
