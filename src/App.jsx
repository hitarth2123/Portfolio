import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Stats from './components/Stats';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { Contact, Footer } from './components/Contact';
import { useTheme } from './hooks/useTheme';
import cvData from './data/cv.json';

function App() {
  const { theme, toggleTheme } = useTheme();

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-wrapper">
      <Header theme={theme} toggleTheme={toggleTheme} name={cvData.personal.name} />

      <Hero data={cvData.personal} keywords={cvData.jdKeywords} />

      <Marquee />

      <Stats />

      <div className="section-divider" />

      <Services keywords={cvData.jdKeywords} />

      <div className="section-divider" />

      <Experience experience={cvData.experience} keywords={cvData.jdKeywords} />

      <div className="section-divider" />

      <Projects projects={cvData.projects} keywords={cvData.jdKeywords} />

      <Contact data={cvData.personal} />

      <Footer />
    </div>
  );
}

export default App;
