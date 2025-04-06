import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-item">Home</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#projects" className="nav-item">Projects</a>
          <a href="#contact" className="nav-item">Contact</a>
          <a 
            href="https://drive.google.com/file/d/12FCqH6GbPBfaozUzCKvPFG46s3UeHvs9/view?usp=drive_link"
            className="resume-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <button 
          className={`menu-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;