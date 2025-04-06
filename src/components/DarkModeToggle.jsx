import React, { useState, useEffect } from 'react';
import '../styles/DarkModeToggle.css';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <button 
      className={`theme-toggle ${isDark ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
    >
      <div className="toggle-wrapper">
        <div className="toggle-background">
          <div className="icons">
            <span className="sun">🌞</span>
            <span className="moon">🌙</span>
          </div>
          <div className={`toggle-circle ${isDark ? 'dark' : ''}`}></div>
        </div>
      </div>
    </button>
  );
};

export default DarkModeToggle;