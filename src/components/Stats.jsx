import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { number: '12', suffix: '+', label: 'Years of Learning' },
  { number: '32', suffix: '+', label: 'Projects Completed' },
  { number: '99', suffix: '%', label: 'Satisfaction Rate' },
  { number: '3', suffix: '+', label: 'Companies Served' },
];

const AnimatedCounter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const num = parseInt(target);
          const duration = 1500;
          const start = performance.now();

          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            setCount(Math.floor(eased * num));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stat-number">
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="section-container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
