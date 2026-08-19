import React from 'react';
import HighlightText from './HighlightText';

const ArrowIcon = () => (
  <svg className="btn-arrow" width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.12769 0.750114L10.6497 0.749993M10.6497 0.749993L10.6497 9.15078M10.6497 0.749993L0.750194 10.6495" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Hero = ({ data, keywords }) => {
  const [firstName, ...rest] = data.name.split(' ');
  const lastName = rest.join(' ');

  return (
    <section className="hero-section" id="hero">
      <div className="section-container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-greeting">
              <svg className="hero-greeting-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.1123 9.23875L15.4643 10.5504C17.3976 11.3069 18.3643 11.6852 18.3323 12.2852C18.3002 12.8852 17.2913 13.1603 15.2737 13.7106C14.6729 13.8744 14.3726 13.9563 14.1643 14.1647C13.956 14.3729 13.8741 14.6732 13.7103 15.274C13.16 17.2917 12.8848 18.3005 12.2848 18.3326C11.6848 18.3646 11.3066 17.3979 10.5501 15.4646L9.23843 12.1127C8.44634 10.0885 8.05034 9.0765 8.56326 8.56358C9.07618 8.05067 10.0882 8.44667 12.1123 9.23875Z" stroke="currentColor" strokeLinejoin="round"/>
              </svg>
              <span className="hero-greeting-text">Hey there. I'm</span>
            </div>

            <h1 className="hero-heading">
              {firstName}{' '}
              <span className="primary-design-text">{lastName}</span>
            </h1>

            <p className="hero-paragraph">
              <HighlightText text={data.summary} keywords={keywords} />
            </p>

            <div className="hero-cta-row">
              <div className="availability-badge">
                <div className="availability-dot" />
                <span>Available for new project</span>
              </div>
              <a href="#contact" className="primary-button">
                Let's Talk <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="hero-card">
            <img
              src="/profile.jpg"
              alt={`${data.name} - Full Stack Developer`}
              className="hero-card-image"
            />
            <div className="hero-social-row">
              <div className="hero-social-links">
                <a href={`https://${data.linkedin}`} target="_blank" rel="noreferrer" className="social-icon-link" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" fill="currentColor"/><path d="M6 9H2V21H6V9Z" fill="currentColor"/><path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="currentColor"/></svg>
                </a>
                <a href={`https://${data.github}`} target="_blank" rel="noreferrer" className="social-icon-link" aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.579 9.5 21.27 9.5 21.004V19.265C6.727 19.859 6.14 17.92 6.14 17.92C5.685 16.776 5.029 16.465 5.029 16.465C4.121 15.846 5.098 15.859 5.098 15.859C6.102 15.929 6.629 16.893 6.629 16.893C7.521 18.437 8.97 17.987 9.54 17.729C9.629 17.09 9.889 16.64 10.175 16.42C7.954 16.195 5.619 15.315 5.619 11.485C5.619 10.39 6.009 9.495 6.649 8.795C6.549 8.57 6.199 7.55 6.749 6.16C6.749 6.16 7.589 5.92 9.499 7.23C10.299 7.03 11.149 6.93 11.999 6.93C12.849 6.93 13.699 7.03 14.499 7.23C16.409 5.92 17.249 6.16 17.249 6.16C17.799 7.55 17.449 8.57 17.349 8.795C17.989 9.495 18.379 10.39 18.379 11.485C18.379 15.325 16.039 16.19 13.809 16.41C14.169 16.69 14.499 17.24 14.499 18.08V21.004C14.499 21.274 14.659 21.584 15.169 21.489C19.138 20.162 22 16.416 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/></svg>
                </a>
              </div>
              <span className="based-in-text">Based In | <span className="secondary-grey">{data.location.split(',')[0]}</span></span>
            </div>
            <div className="rotate-badge">
              <div className="rotate-badge-inner">
                <div className="rotate-badge-dot" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
