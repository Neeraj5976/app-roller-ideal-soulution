// /src/App.jsx
import React, { useState, useEffect } from 'react';
import './styles.css'; // Import styles.css file

function App() {
  // 1. State Management: Initialize theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. useEffect hook for theme handling
  useEffect(() => {
    // Set initial theme
    document.documentElement.setAttribute('data-theme', theme);

    // Check system theme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      const systemTheme = e.matches ? 'dark' : 'light';
      setTheme(systemTheme);
      localStorage.setItem('theme', systemTheme);
      document.documentElement.setAttribute('data-theme', systemTheme);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // 2. Theme Toggle Function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* 1. Navigation Section */}
      <nav>
        <div className="container nav-content">
          <div className="nav-left">
            <a href="#" className="logo">rollers</a>
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              <div className="toggle-circle"></div>
              <svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
              <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            </button>
            <button 
              className="mobile-menu-button"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
              </svg>
            </button>
          </div>
          <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <div className="mobile-menu-items">
              <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>features</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>about</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>ai that rolls with your ideas</h1>
            <p>unleash your creativity with our adaptive ai platform that learns, evolves, and flows seamlessly with your unique creative process</p>
            <a href="#contact" className="button">join the waitlist →</a>
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="features" id="features">
        <div className="container">
          <h2>intelligent features</h2>
          <p>designed to enhance your creative workflow</p>
          <div className="features-grid">
            {/* First feature card */}
            <div className="feature-card">
              <h3>adaptive learning</h3>
              <p>our ai system learns from your preferences and adapts to your unique creative style, making each interaction more personalized</p>
            </div>
            {/* Second feature card */}
            <div className="feature-card">
              <h3>creative assist</h3>
              <p>get intelligent suggestions and inspirations that align perfectly with your creative vision and workflow patterns</p>
            </div>
            {/* Third feature card */}
            <div className="feature-card">
              <h3>smart automation</h3>
              <p>streamline repetitive tasks while maintaining full creative control, letting you focus on what truly matters</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. About Section */}
      {/* Note: Using 'features' class as requested, though 'about-section' might be semantically clearer */}
      <section className="features" id="about">
        <div className="container">
          <h2>why rollers?</h2>
          <p>we're reimagining how ai can enhance human creativity</p>
          <div className="features-grid">
            {/* First information card */}
            <div className="feature-card">
              <h3>human-first approach</h3>
              <p>we believe in augmenting human creativity, not replacing it. our ai works alongside you, adapting to your unique style</p>
            </div>
            {/* Second information card */}
            <div className="feature-card">
              <h3>continuous evolution</h3>
              <p>our platform grows with you, constantly learning and improving to better serve your creative needs</p>
            </div>
            {/* Third information card */}
            <div className="feature-card">
              <h3>seamless integration</h3>
              <p>designed to fit naturally into your existing workflow, making the creative process smoother and more intuitive</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2>ready to roll with us?</h2>
          <p>join our waitlist to be among the first to experience the future of creative ai</p>
          <a href="mailto:hello@rollers.ai" className="button">get early access →</a>
        </div>
      </section>
    </>
  );
}

export default App;