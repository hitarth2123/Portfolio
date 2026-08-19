import React from 'react';

const Header = ({ theme, toggleTheme, name }) => {
  const [firstName, ...rest] = name.split(' ');
  const lastName = rest.join(' ');

  return (
    <header className="nav-top-header">
      <div className="nav-container">
        <div className="nav-brand">
          <div className="nav-brand-info">
            <span className="nav-brand-title">Full Stack Developer</span>
            <span className="nav-brand-name">
              {firstName} <span className="primary-design-text">{lastName}</span>
            </span>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#hero" className="nav-link">Home</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div className="nav-right">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
        </div>

        <button className="hamburger-btn" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
