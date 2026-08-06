import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "../Reveal/Reveal";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Movie App",
      desc: "React va API yordamida yaratilgan kino sayti.",
      image: "https://avatars.mds.yandex.net/i?id=c21f20fac5c5e69072844df89bd9f9cd20a407d8-8275014-images-thumbs&n=13",
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Portfolio",
      desc: "Shaxsiy portfolio veb-sayti.",
      image: "https://t3.ftcdn.net/jpg/07/30/98/58/360_F_730985885_qsS8suN4Tp9sgJ5UqqRuPlm6UkqUcYU5.jpg",
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Todo App",
      desc: "React yordamida yaratilgan vazifalar dasturi.",
      image: "https://avatars.mds.yandex.net/i?id=ef3593db96e9341de59b4e3b0c40a7023d6886d4-5233303-images-thumbs&n=13",
      github:"https://github.com/shohruh",
      demo: "#",
    },
  ];

  return (
    <section className="projects">
      <Reveal direction="down">
        <h2>My Projects</h2>
      </Reveal>

      <div className="project-grid">
        {projects.map((project, i) => (
          <Reveal
            key={project.id}
            direction={i % 2 === 0 ? "left" : "right"}
            delay={i * 0.1}
          >
            <div className="project-card">
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
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;
