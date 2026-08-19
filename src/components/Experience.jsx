import React from 'react';
import HighlightText from './HighlightText';

const Experience = ({ experience, keywords }) => {
  return (
    <section className="experience-section" id="experience">
      <div className="section-container">
        <div className="inner-section-wrapper">
          <div className="section-header">
            <h2 className="section-title">
              WORK <span className="primary-design-text">EXPERIENCE</span>
            </h2>
          </div>

          <div className="experience-list">
            {experience.map((job, index) => (
              <div key={index} className="exp-card reveal">
                <div className="exp-left">
                  <h3 className="exp-role">{job.role}</h3>
                  <span className="exp-company">{job.company}</span>
                  <span className="exp-period">{job.period}</span>
                </div>
                <ul className="exp-points">
                  {job.points.map((point, i) => (
                    <li key={i}>
                      <HighlightText text={point} keywords={keywords} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
