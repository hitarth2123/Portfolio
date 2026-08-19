import React from 'react';
import HighlightText from './HighlightText';

const Projects = ({ projects, keywords }) => {
  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        <div className="inner-section-wrapper">
          <div className="section-header">
            <h2 className="section-title">
              FEATURED <span className="primary-design-text">PROJECTS</span>
            </h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card reveal">
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-round-btn">
                    <svg width="20" height="20" viewBox="0 0 43 43" fill="none">
                      <path d="M30.2216 12.4445L10.666 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M19.5547 10.9005C19.5547 10.9005 29.5698 10.0562 31.0898 11.5761C32.6096 13.0959 31.7652 23.1111 31.7652 23.1111" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-meta">
                    <span className="project-category">{project.stack[0]}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">
                    <HighlightText text={project.description} keywords={keywords} />
                  </p>
                  <div className="project-stack">
                    {project.stack.map((tech, i) => {
                      const isHighlighted = keywords.some(
                        kw => tech.toLowerCase().includes(kw.toLowerCase())
                      );
                      return (
                        <span
                          key={i}
                          className={`stack-tag${isHighlighted ? ' is-highlighted' : ''}`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
