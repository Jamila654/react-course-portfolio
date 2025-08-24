import React from 'react'
import './Portfolio.css'

function Portfolio() {
  return (
    <div className="portfolio">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Jamila Yaqoob Dhedhi</h1>
          <h2 className="hero-subtitle">Cybersecurity | Web Development | AI</h2>
          <p className="hero-tagline">Exploring the future of security and intelligent systems 🚀</p>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-card">
          <p>
            I’m a passionate learner blending <b>cybersecurity expertise</b> with <b>modern web technologies</b>.  
            My journey revolves around creating secure, user-focused applications while exploring <b>Agentic AI</b> — systems 
            that reason, learn, and act autonomously.  
            <br /><br />
            Beyond code, I value <b>collaboration, problem solving, and curiosity</b> as my driving forces in technology.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "Python"].map((skill, i) => (
            <div key={i} className="cube">
              <div className="face front">{skill}</div>
              <div className="face back">{skill}</div>
              <div className="face left">{skill}</div>
              <div className="face right">{skill}</div>
              <div className="face top">{skill}</div>
              <div className="face bottom">{skill}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-placeholder">🔒</div>
            <h3>Security Dashboard</h3>
            <p>An interactive dashboard simulating real-time vulnerability tracking and user authentication flow.</p>
          </div>
          <div className="project-card">
            <div className="project-placeholder">🌐</div>
            <h3>Responsive Web Platform</h3>
            <p>A fully responsive multi-page platform showcasing modern UI/UX with 3D-inspired design.</p>
          </div>
          <div className="project-card">
            <div className="project-placeholder">🤖</div>
            <h3>AI Agent Prototype</h3>
            <p>A proof-of-concept agent that explores decision making and autonomous task execution in Python.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact">
        <h2 className="section-title">Contact</h2>
        <p>Interested in collaborating or learning together? Let’s connect!</p>
        <div className="contact-links">
          <a href="mailto:nurjamila1@gmail.com">📧 Email</a>
          <a href="https://www.linkedin.com/in/jamila-yaqoob-dhedhi/" target="_blank" rel="noreferrer">💼 LinkedIn</a>
          <a href="https://github.com/Jamila654" target="_blank" rel="noreferrer">💻 GitHub</a>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
