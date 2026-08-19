import React from 'react';

const Contact = ({ data }) => {
  return (
    <section className="cta-section" id="contact">
      <div className="section-container">
        <div className="inner-section-wrapper">
          <div className="section-divider" style={{ marginBottom: 'var(--gap-section)' }} />
          <h2 className="cta-heading">
            LET'S <span className="primary-design-text">CONNECT</span>
          </h2>
          <p className="cta-desc">
            Currently open to new opportunities a Full Stack Engineer.
            Whether you have a question or want to discuss a project, I'll get back to you!
          </p>
          <a href={`mailto:${data.email}`} className="primary-button">
            Say Hello
            <svg className="btn-arrow" width="16" height="16" viewBox="0 0 12 12" fill="none">
              <path d="M2.12769 0.750114L10.6497 0.749993M10.6497 0.749993L10.6497 9.15078M10.6497 0.749993L0.750194 10.6495" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <div className="cta-links">
            <a href={`https://${data.linkedin}`} target="_blank" rel="noreferrer" className="cta-social-link">LinkedIn</a>
            <a href={`https://${data.github}`} target="_blank" rel="noreferrer" className="cta-social-link">GitHub</a>
            <a href={`mailto:${data.email}`} className="cta-social-link">Gmail</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="section-container">
        <div className="footer-content">
          <span className="footer-text">© {new Date().getFullYear()} Hitarth Patel </span>
        </div>
      </div>
    </footer>
  );
};

export { Contact, Footer };
export default Contact;
