import "../App.css";

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-page">
        <div className="card">
          <h1>01</h1>
          <img src="project.png" alt="project1" />
          <h2>Fundz</h2>
        </div>
      </div>
      <div className="projects-page">
        <div className="card">
          <h1>02</h1>
          <img src="project.png" alt="project1" />
          <h2>Screentime</h2>
        </div>
      </div>
      <div className="projects-page">
        <div className="card">
          <h1>03</h1>
          <img src="project.png" alt="project1" />
          <h2>Swipely</h2>
        </div>
      </div>
    </div>
  );
}

export default Projects;
