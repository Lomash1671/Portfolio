import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Railway Management System",
      description: "A comprehensive railway management solution built with modern technologies. Features include ticket booking, schedule management, and real-time train tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "/images/railway-project.jpg",
      github: "https://github.com/Lomash1671/railway-management",
      live: "#"
    },
    {
      title: "Car Parking Management System",
      description: "Smart parking solution with features for spot allocation, payment processing, and real-time space monitoring.",
      technologies: ["Python", "MySQL", "Flask", "JavaScript"],
      image: "/images/parking-project.jpg",
      github: "https://github.com/Lomash1671/parking-management",
      live: "#"
    },
    {
      title: "Weather Monitoring System",
      description: "Real-time weather monitoring application with detailed analytics, forecasting, and interactive weather maps.",
      technologies: ["React", "APIs", "Chart.js", "CSS3"],
      image: "/images/weather-project.jpg",
      github: "https://github.com/Lomash1671/weather-monitoring",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              className="project-card" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="project-content">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;