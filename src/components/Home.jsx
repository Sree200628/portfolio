function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <p className="intro">Hello, I'm</p>

        <h1>Sreenithi B</h1>

        <h2>Final Year B.Tech AI&DS Student</h2>

        <p className="description">
          Aspiring Data Analyst passionate about data analytics,
          visualization and solving real-world problems using data.
        </p>

        <div className="buttons">
          <a href="#projects" className="btn primary">
            View My Projects
          </a>

          <a
            href="/resume.pdf"
            className="btn secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>

          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home