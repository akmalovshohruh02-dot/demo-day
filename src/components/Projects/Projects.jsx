import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Movie App",
      desc: "React va API yordamida yaratilgan kino sayti.",
      image: "https://picsum.photos/300/200?1",
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Portfolio",
      desc: "Shaxsiy portfolio veb-sayti.",
      image: "https://picsum.photos/300/200?2",
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Todo App",
      desc: "React yordamida yaratilgan vazifalar dasturi.",
      image: "https://picsum.photos/300/200?3",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="buttons">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub /> GitHub
                </a>

                <a href={project.demo} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;