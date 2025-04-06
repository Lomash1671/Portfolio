import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="text-zone">
          <div className="intro-text">
            <p className="greeting">Hi there,</p>
            <h1 className="name">I'm Lomash Gupta</h1>
            <h2 className="role">Software Developer</h2>
            <p className="subtitle">Full Stack Developer | Creative Coder | Problem Solver</p>
          </div>
          <div className="cta-buttons">
            <a href="#projects" className="primary-btn">View My Work</a>
            <a href="#contact" className="secondary-btn">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;