function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-container">

        <div className="project-card">
          <h3>Student Performance Analytics Dashboard</h3>

          <p>
            Power BI dashboard analysing student performance based
            on different academic and demographic factors.
          </p>

          <p>
            <strong>Tools:</strong> Power BI, DAX, CSV
          </p>

          <a
            href="https://github.com/Sree200628/student-performance-analytics-dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>HR Employee Attrition Dashboard</h3>

          <p>
            HR analytics dashboard for analysing employee attrition
            across departments, job roles, age and gender.
          </p>

          <p>
            <strong>Tools:</strong> Power BI, Excel, DAX
          </p>

          <a
            href="https://github.com/Sree200628/HR-Employee-Attrition-Dashboard.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Retail Sales ETL Pipeline</h3>

          <p>
            ETL pipeline for extracting, cleaning, transforming and
            loading retail sales data into a database.
          </p>

          <p>
            <strong>Tools:</strong> Python, SQL, MySQL
          </p>

          <a
            href="https://github.com/Sree200628/retail-sales-etl-pipeline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>GitHub User Finder</h3>

          <p>
            Flask web application that allows users to search for
            GitHub profiles using the GitHub REST API.
          </p>

          <p>
            <strong>Tools:</strong> Python, Flask, HTML, CSS, GitHub REST API
          </p>

          <a
            href="https://github.com/Sree200628/GitHub-User-Finder"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects