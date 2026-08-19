import React from 'react';

const techList = [
  'React', 'Node.js', 'Go', 'Python', 'Next.js', 'TypeScript',
  'PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'Docker', 'Kubernetes',
  'AWS', 'GraphQL', 'System Design', 'Microservices'
];

const Marquee = () => {
  const items = [...techList, ...techList, ...techList]; // triple for seamless loop

  return (
    <section className="marquee-section">
      <div className="marquee-wrapper">
        {items.map((tech, i) => (
          <div key={i} className="marquee-item">
            <span className="marquee-dot" />
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
