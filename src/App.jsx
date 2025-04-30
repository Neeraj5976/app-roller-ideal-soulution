// /src/App.jsx
import React, { useState, useEffect } from 'react';
import './styles.css'; // Import styles.css file

function App() {
  // 1. State Management: Initialize theme state
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme;
    }
    // Check system preference if no stored theme
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  // 1. useEffect hook for theme handling
  useEffect(() => {
    // Set initial theme on the document element
    document.documentElement.setAttribute('data-theme', theme);
    // Store theme preference in localStorage
    localStorage.setItem('theme', theme);

    // Optional: Listener for system theme changes (if you want it to adapt automatically if no explicit choice was made)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
        // Only change if the user hasn't explicitly toggled
        // You might want more complex logic here if you want to respect user toggle *over* system preference
        // For simplicity now, we'll just log it, but you could update the theme state here conditionally
        // console.log(`System theme changed to ${e.matches ? 'dark' : 'light'}`);
        // Example conditional update:
        // if (!localStorage.getItem('theme-preference-set')) { // Check if user manually set it
        //    setTheme(e.matches ? 'dark' : 'light');
        // }
    };

    mediaQuery.addEventListener('change', handleChange);

    // Cleanup listener on component unmount
    return () => mediaQuery.removeEventListener('change', handleChange);

  }, [theme]); // Re-run effect when theme changes

  // 2. Theme Toggle Function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // Optional: Mark that the user has now explicitly set a preference
    // localStorage.setItem('theme-preference-set', 'true');
  };

  return (
    <>
      {/* 1. Navigation Section */}
      <nav>
        <div className="container nav-content">
          <div className="nav-left">
            <a href="#" className="logo">rollers</a>
            <button className="theme-toggle" aria-label="toggle theme" onClick={toggleTheme}>
              <div className="toggle-circle"></div>
              {/* Sun Icon SVG */}
              <span className="sun-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              </span>
              {/* Moon Icon SVG */}
              <span className="moon-icon">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                 </svg>
              </span>
            </button>
          </div>
          <div className="nav-links">
            <a href="#features">features</a>
            <a href="#about">about</a>
            <a href="#contact">contact</a>
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
            <div>
              <h3>adaptive learning</h3>
              <p>our ai system learns from your preferences and adapts to your unique creative style, making each interaction more personalized</p>
            </div>
            {/* Second feature card */}
            <div>
              <h3>creative assist</h3>
              <p>get intelligent suggestions and inspirations that align perfectly with your creative vision and workflow patterns</p>
            </div>
            {/* Third feature card */}
            <div>
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
            <div>
              <h3>human-first approach</h3>
              <p>we believe in augmenting human creativity, not replacing it. our ai works alongside you, adapting to your unique style</p>
            </div>
            {/* Second information card */}
            <div>
              <h3>continuous evolution</h3>
              <p>our platform grows with you, constantly learning and improving to better serve your creative needs</p>
            </div>
            {/* Third information card */}
            <div>
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