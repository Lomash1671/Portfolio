import React from 'react';
import profilePic from '../assets/a.jpg'; // Update with your actual image filename
import '../styles/AboutMe.css';

const AboutMe = () => {
  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'TypeScript', 'Tailwind CSS'],
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
              src={profilePic}
              alt="Lomash Gupta" 
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
                <h4>Bachelor of Technology in Computer Science and Engineering</h4>
                <p>Model Institute of Engineering and Technology, Jammu</p>
                <p>2022 - Present</p>
              </div>
              
              <div className="education-item">
                <h4>Senior Secondary (XII), Science</h4>
                <p>Little Flower Higher Secondary School, Jammu</p>
                <p>Completed June 2022</p>
              </div>
            </div>

            <div className="cta-buttons">
              <a 
                href="https://drive.google.com/file/d/12FCqH6GbPBfaozUzCKvPFG46s3UeHvs9/view?usp=drive_link" 
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