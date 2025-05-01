import os
from extract_solution import extract_solution

llm_response = '''
```javascript

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

```

```css
/* /src/styles.css */

/* 1. Theme Variables */
:root {
    --primary-color: #000000;
    --background-color: #ffffff;
    --accent-color: #3d3d3d;
    --gradient: linear-gradient(135deg, #000000 0%, #333333 100%);
    --card-bg: #f9f9f9;
    --hover-bg: #f0f0f0;
    --border-color-light: rgba(0, 0, 0, 0.05);
    --border-color-card: rgba(128, 128, 128, 0.1);
    --shadow-color-light: rgba(0, 0, 0, 0.05);
    --shadow-color-button: rgba(0, 0, 0, 0.1);
    --shadow-color-button-hover: rgba(0, 0, 0, 0.15);
    --nav-bg: rgba(255, 255, 255, 0.8);
  }
  
  [data-theme="dark"] {
    --primary-color: #ffffff;
    --background-color: #121212;
    --accent-color: #a0a0a0;
    --gradient: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%);
    --card-bg: #1e1e1e;
    --hover-bg: #2d2d2d;
    --border-color-light: rgba(255, 255, 255, 0.08);
    --border-color-card: rgba(128, 128, 128, 0.2);
    --shadow-color-light: rgba(255, 255, 255, 0.05);
    --shadow-color-button: rgba(255, 255, 255, 0.1);
    --shadow-color-button-hover: rgba(255, 255, 255, 0.15);
    --nav-bg: rgba(18, 18, 18, 0.8);
  }
  
  /* Reset and Base Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--background-color);
    color: var(--primary-color);
    line-height: 1.6;
    /* 2. Global Transitions */
    transition: background-color 0.3s ease, color 0.3s ease;
    padding-top: 95px;
  }
  
  a {
    color: inherit;
    text-decoration: none;
    transition: opacity 0.3s ease;
  }
  
  img, svg {
    display: block;
    max-width: 100%;
  }
  
  section {
    /* 9. Section Padding */
    padding: 120px 0;
  }
  
  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 40px;
  }
  
  /* 3. Navigation Styling */
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 25px 0;
    background-color: var(--nav-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border-color-light);
    z-index: 100;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }
  
  .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .nav-left {
      display: flex;
      align-items: center;
      gap: 20px;
  }
  
  /* 4. Logo and Navigation Links */
  .logo {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -1px;
    color: var(--primary-color);
  }
  
  .nav-links {
    display: flex;
    align-items: center;
    /* 4. Add 40px gap between navigation items */
    gap: 40px;
  }
  
  .nav-links a {
    font-size: 17px;
    font-weight: 500;
    color: var(--primary-color);
    opacity: 0.7;
    position: relative;
    padding-bottom: 4px;
    margin-left: 10px;
  }
  
  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }
  
  .nav-links a:hover {
    opacity: 1;
  }
  
  .nav-links a:hover::after {
    width: 100%;
  }
  
  /* 5. Theme Toggle Button */
  .theme-toggle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--card-bg);
    border: 2px solid var(--primary-color);
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px;
    transition: all 0.3s ease;
    margin-left: 20px;
  }
  
  .theme-toggle:hover {
    transform: scale(1.05);
  }
  
  .toggle-circle {
    position: absolute;
    width: 24px;
    height: 24px;
    background-color: var(--primary-color);
    border-radius: 50%;
    transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
    transform: translateX(-6px);
  }
  
  [data-theme='dark'] .toggle-circle {
    transform: translateX(20px);
  }
  
  .sun-icon,
  .moon-icon {
    width: 16px;
    height: 16px;
    color: var(--primary-color);
    transition: all 0.3s ease;
    z-index: 1;
  }
  
  .sun-icon {
    margin-left: 4px;
    opacity: 1;
  }
  
  .moon-icon {
    margin-right: 4px;
    opacity: 0.5;
  }
  
  [data-theme='dark'] .sun-icon {
    opacity: 0.5;
  }
  
  [data-theme='dark'] .moon-icon {
    opacity: 1;
  }
  
  .theme-toggle:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--accent-color);
  }
  
  /* 6. Hero Section */
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 120px 0;
    animation: fadeIn 1s ease-out forwards;
  }
  
  .hero-content {
    max-width: 700px; /* Limit content width */
    margin: 0 auto;
  }
  
  .hero h1 {
    font-size: 80px; /* Use 80px font size for headline */
    font-weight: 600;
    letter-spacing: -2px; /* -2px letter spacing */
    margin-bottom: 20px;
    line-height: 1.1;
    color: var(--primary-color);
    transition: color 0.3s ease;
  }
  
  .hero p {
    font-size: 26px; /* Set description to 26px */
    line-height: 1.4; /* 1.4 line height */
    color: var(--accent-color);
    margin-bottom: 40px;
    animation: fadeIn 1s ease-out 0.2s forwards; /* Add 0.2s delay */
    opacity: 0; /* Start hidden for animation */
    transition: color 0.3s ease;
  }
  
  .hero .button {
      animation: fadeIn 1s ease-out 0.4s forwards; /* Add 0.4s delay */
      opacity: 0; /* Start hidden for animation */
  }
  
  /* 9. Section Headlines */
  h2 {
    font-size: 48px;
    font-weight: 600;
    letter-spacing: -1px;
    margin-bottom: 20px;
    text-align: center;
    color: var(--primary-color);
    transition: color 0.3s ease;
  }
  
  section > .container > p {
    font-size: 18px;
    color: var(--accent-color);
    text-align: center;
    max-width: 600px;
    margin: 0 auto 60px auto;
    transition: color 0.3s ease;
  }
  
  /* 7. Feature Cards */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px; /* Set up 40px gap in features grid */
  }
  
  .feature-card {
    background-color: var(--card-bg);
    padding: 32px;
    border-radius: 16px;
    border: 1px solid var(--border-color-card);
    transform: translateY(0);
    transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  }
  
  .feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px var(--shadow-color-button);
  }
  
  .features-grid h3 {
    font-size: 24px; /* Use 24px for card titles */
    font-weight: 600;
    letter-spacing: -0.5px; /* -0.5px letter spacing */
    margin-bottom: 15px;
    color: var(--primary-color);
    transition: color 0.3s ease;
  }
  
  .features-grid p {
    font-size: 17px; /* Set card description to 17px */
    line-height: 1.6; /* 1.6 line height */
    color: var(--accent-color);
    transition: color 0.3s ease;
  }
  
  /* 8. Buttons */
  .button {
    display: inline-block;
    padding: 18px 40px; /* Set padding to 18px 40px */
    border-radius: 40px; /* Use 40px border radius */
    background-image: var(--gradient);
    color: var(--background-color); /* Text color contrasts with gradient */
    font-size: 18px; /* Set font size to 18px */
    font-weight: 600; /* with 600 weight */
    box-shadow: 0 10px 20px var(--shadow-color-button); /* Add box-shadow */
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-image 0.3s ease, color 0.3s ease; /* 2. Global Transitions */
  }
  
  .button:hover {
    transform: translateY(-2px); /* Transform by translateY(-2px) on hover */
    box-shadow: 0 15px 30px var(--shadow-color-button-hover); /* Increase shadow on hover */
  }
  
  /* Contact Section Specifics */
  .contact {
    text-align: center;
  }
  
  .contact h2 {
     margin-bottom: 15px;
  }
  
  .contact p {
     margin-bottom: 40px;
  }
  
  /* 11. Animation Keyframes */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  
  /* 10. Responsive Adjustments */
  @media (max-width: 768px) {
    .container {
      padding: 0 20px; /* Set container padding to 20px */
    }
  
    /* Hide navigation links */
    .nav-links {
      position: fixed;
      top: 95px;
      left: 0;
      width: 100%;
      background-color: var(--nav-bg);
      padding: 0;
      flex-direction: column;
      align-items: center;
      border-bottom: 1px solid var(--border-color-light);
      transform: translateY(-100%);
      opacity: 0;
      pointer-events: none;
      transition: transform 0.3s ease, opacity 0.3s ease;
      display: flex;
    }
  
    .nav-links.mobile-menu-open {
      transform: translateY(0);
      opacity: 1;
      pointer-events: auto;
      display: flex;
    }
  
    .mobile-menu-items {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px 0;
    }
  
    .mobile-menu-items a {
      padding: 12px 0;
      width: 100%;
      text-align: center;
      font-size: 18px;
    }
  
    .hero {
      padding: 80px 0;
      min-height: calc(100vh - 80px); /* Adjust based on smaller nav height if changed */
    }
  
    .hero h1 {
      font-size: 48px; /* Reduce hero headline to 48px */
    }
  
    .hero p {
      font-size: 20px; /* Reduce hero description to 20px */
    }
  
    section {
      padding: 80px 0;
    }
  
    h2 {
      font-size: 36px; /* Change section headlines to 36px */
    }
  
    .features-grid > div {
      padding: 30px; /* Reduce card padding to 30px */
    }
  
    .button {
      padding: 15px 30px;
      font-size: 16px;
    }
  }

  /* Mobile Menu Button */
  .mobile-menu-button {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    margin-left: 16px;
  }

  .mobile-menu-button svg {
    width: 24px;
    height: 24px;
    color: var(--primary-color);
  }

  .mobile-menu-button:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--accent-color);
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 20px;
    }

    .mobile-menu-button {
      display: block;
    }

    .nav-links {
      position: fixed;
      top: 95px;
      left: 0;
      width: 100%;
      background-color: var(--nav-bg);
      padding: 0;
      flex-direction: column;
      align-items: center;
      border-bottom: 1px solid var(--border-color-light);
      transform: translateY(-100%);
      opacity: 0;
      pointer-events: none;
      transition: transform 0.3s ease, opacity 0.3s ease;
    }

    .nav-links.mobile-menu-open {
      transform: translateY(0);
      opacity: 1;
      pointer-events: auto;
    }

    .mobile-menu-items {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px 0;
    }

    .mobile-menu-items a {
      padding: 12px 0;
      width: 100%;
      text-align: center;
      font-size: 18px;
    }

    .hero {
      padding: 80px 0;
      min-height: calc(100vh - 95px);
    }

    .hero h1 {
      font-size: 48px;
      letter-spacing: -1px;
    }

    .hero p {
      font-size: 20px;
    }

    section {
      padding: 80px 0;
    }

    h2 {
      font-size: 36px;
    }

    .features-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .features-grid > div {
      padding: 24px;
    }

    .button {
      padding: 12px 24px;
      font-size: 16px;
    }
  }

```

```html
<!-- /index.html -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!-- Link the favicon -->
    <link rel="icon" type="image/svg+xml" href="/r.svg" />
    <!-- Configure viewport for responsive design -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Add an SEO-friendly description -->
    <meta name="description" content="rollers - Adaptive AI tools designed to enhance human creativity and streamline workflows. Join the waitlist for early access." />
    <!-- Set the title -->
    <title>rollers | adaptive ai tools</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

'''

try:
    response = extract_solution(llm_response=llm_response)

    if not isinstance(response, list):
        raise ValueError(
            "Expected response to be a list of (file_name, code) tuples.")

    for item in response:
        if not isinstance(item, tuple) or len(item) != 2:
            raise ValueError("Invalid tuple.")

        file_name, code = item
        
        # Create the directory if it doesn't exist
        directory = os.path.dirname(file_name)
        if directory and not os.path.exists(directory):
            os.makedirs(directory)

        # Write the file
        with open(file_name, "w") as file:
            file.write(code)

        print(f"File '{file_name}' written successfully.")

except Exception as e:
    print(f"An error occurred while running extract solution test: {e}")
