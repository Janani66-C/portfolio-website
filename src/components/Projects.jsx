import "./Projects.css";
function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built using React and Vite.",
    },
    {
      title: "Weather App",
      description: "Weather application using API integration.",
    },
    {
      title: "To-Do App",
      description: "Task management application with React.",
    },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;