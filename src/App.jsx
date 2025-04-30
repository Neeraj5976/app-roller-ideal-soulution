import './styles.css';

function App() {
  return (
    <>
      <nav>
        <div className="container nav-content">
          <a href="#" className="logo">rollers</a>
          <div className="nav-links">
            <a href="#features">features</a>
            <a href="#about">about</a>
            <a href="#contact">contact</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>ai that rolls with your ideas</h1>
            <p>
              unleash your creativity with our adaptive ai platform that learns, evolves, and flows seamlessly with your unique creative process
            </p>
            <a href="#contact" className="button">join the waitlist →</a>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="container">
          <h2>intelligent features</h2>
          <p>designed to enhance your creative workflow</p>
          <div className="features-grid">
            <div className="feature-card">
              <h3>adaptive learning</h3>
              <p>our ai system learns from your preferences and adapts to your unique creative style, making each interaction more personalized</p>
            </div>
            <div className="feature-card">
              <h3>creative assist</h3>
              <p>get intelligent suggestions and inspirations that align perfectly with your creative vision and workflow patterns</p>
            </div>
            <div className="feature-card">
              <h3>smart automation</h3>
              <p>streamline repetitive tasks while maintaining full creative control, letting you focus on what truly matters</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="about">
        <div className="container">
          <h2>why rollers?</h2>
          <p>we're reimagining how ai can enhance human creativity</p>
          <div className="features-grid">
            <div className="feature-card">
              <h3>human-first approach</h3>
              <p>we believe in augmenting human creativity, not replacing it. our ai works alongside you, adapting to your unique style</p>
            </div>
            <div className="feature-card">
              <h3>continuous evolution</h3>
              <p>our platform grows with you, constantly learning and improving to better serve your creative needs</p>
            </div>
            <div className="feature-card">
              <h3>seamless integration</h3>
              <p>designed to fit naturally into your existing workflow, making the creative process smoother and more intuitive</p>
            </div>
          </div>
        </div>
      </section>

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
