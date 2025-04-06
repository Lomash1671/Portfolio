import React from 'react';
import '../styles/AboutMe.css';

const AboutMe = () => {
  const skills = {
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js', 'Python', 'MongoDB', 'PostgreSQL'],
    tools: ['Git', 'GitHub', 'VS Code', 'Docker', 'Figma', 'Postman']
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src="/path-to-your-profile-image.jpg" 
              alt="Professional headshot" 
              className="profile-image"
            />
          </div>

          <div className="about-text">
            <h3>Hi, I'm <span className="highlight">Lomash Gupta</span></h3>
            <p className="bio">
            I'm a passionate Software Developer with a focus on creating elegant, 
              efficient solutions to complex problems.
             I specialize in building responsive and user-friendly 
              applications and have a strong background in both frontend and backend technologies.
              I thrive in collaborative environments and am always eager to learn new skills and technologies.
            </p>

            <div className="skills-section">
              <h3>Technical Skills</h3>
              
              <div className="skills-container">
                <div className="skill-category">
                  <h4>Frontend</h4>
                  <ul>
                    {skills.frontend.map((skill, index) => (
                      <li key={index} className="skill-item">{skill}</li>
                    ))}
                  </ul>
                </div>

                <div className="skill-category">
                  <h4>Backend</h4>
                  <ul>
                    {skills.backend.map((skill, index) => (
                      <li key={index} className="skill-item">{skill}</li>
                    ))}
                  </ul>
                </div>

                <div className="skill-category">
                  <h4>Tools & Technologies</h4>
                  <ul>
                    {skills.tools.map((skill, index) => (
                      <li key={index} className="skill-item">{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="education-section">
              <h3>Education</h3>
              <div className="education-item">
                <h4>Bachlors in Computer Science </h4>
                <p>Model Institute of Education and Technology, Jammu</p>
                <p>3 year</p>
              </div>
            </div>

            <div className="cta-buttons">
              <a 
                href="/path-to-your-resume.pdf" 
                className="resume-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
              <a href="#contact" className="contact-button">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;