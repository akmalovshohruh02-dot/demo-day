import "./Skills.css";
import {FaHtml5, FaCss3Alt, FaReact, FaFigma,} from "react-icons/fa";
import {SiJavascript, SiTailwindcss,} from "react-icons/si";

function Skills() {
  return (
    <div className="skills">

      <h2>Asbob-uskunalar</h2>

      <div className="underline"></div>

      <div className="skill-box">

        <div className="card">
          <FaHtml5 className="icon html"/>
        </div>

        <div className="card">
          <FaCss3Alt className="icon css"/>
        </div>

        <div className="card">
          <SiJavascript className="icon js"/>
        </div>

        <div className="card">
          <FaFigma className="icon figma"/>
        </div>

        <div className="card">
          <FaReact className="icon react"/>
        </div>

        <div className="card">
          <SiTailwindcss className="icon tailwind"/>
        </div>

      </div>
    </div>
  );
}

export default Skills;