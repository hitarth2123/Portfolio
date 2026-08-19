import React, { useState } from 'react';
import HighlightText from './HighlightText';

const services = [
  {
    title: 'FULL STACK',
    titleAccent: 'DEVELOPMENT',
    description: 'Building end-to-end web applications with modern React frontends and robust Node.js/Go backends, ensuring scalable architecture and seamless user experiences.',
    details: [
      'React, Next.js, TypeScript frontends',
      'Node.js, Express, Go backends',
      'RESTful & GraphQL API design',
      'Database design & optimization',
    ],
  },
  {
    title: 'SYSTEM',
    titleAccent: 'DESIGN',
    description: 'Architecting distributed, fault-tolerant systems that handle millions of requests. Expertise in microservices, event-driven architecture, and high-availability patterns.',
    details: [
      'Microservices architecture',
      'Event-driven systems with Kafka',
      'Caching strategies with Redis',
      'Database sharding & replication',
    ],
  },
  {
    title: 'CLOUD &',
    titleAccent: 'DEVOPS',
    description: 'Deploying and managing containerized applications on AWS/GCP with automated CI/CD pipelines, infrastructure as code, and comprehensive monitoring.',
    details: [
      'Docker & Kubernetes orchestration',
      'AWS EKS, EC2, S3, Lambda',
      'Terraform infrastructure as code',
      'CI/CD with Jenkins & GitHub Actions',
    ],
  },
  {
    title: 'API &',
    titleAccent: 'INTEGRATION',
    description: 'Designing secure, performant APIs and third-party integrations that power modern applications, ensuring seamless connectivity across systems.',
    details: [
      'REST & GraphQL API development',
      'OAuth2 & JWT authentication',
      'Third-party service integrations',
      'API versioning & documentation',
    ],
  },
];

const Services = ({ keywords }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section className="services-section" id="services">
      <div className="section-container">
        <div className="inner-section-wrapper">
          <div className="section-header">
            <h2 className="section-title">
              MY <span className="primary-design-text">SERVICES</span>
            </h2>
          </div>

          <div className="service-list">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <div
                  className="service-header"
                  onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                >
                  <h3 className="service-h3">
                    <span>{service.title} </span>
                    <span className="secondary-grey">{service.titleAccent}</span>
                  </h3>
                  <div className="service-expand-icon">
                    <svg width="24" height="24" viewBox="0 0 43 43" fill="none">
                      <path d="M30.2216 12.4445L10.666 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M19.5547 10.9005C19.5547 10.9005 29.5698 10.0562 31.0898 11.5761C32.6096 13.0959 31.7652 23.1111 31.7652 23.1111" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {expandedIndex === index && (
                  <div className="service-detail">
                    <div>
                      <p className="service-detail-text">
                        <HighlightText text={service.description} keywords={keywords} />
                      </p>
                    </div>
                    <div>
                      <ul className="service-detail-list">
                        {service.details.map((detail, i) => (
                          <li key={i}>
                            <HighlightText text={detail} keywords={keywords} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
