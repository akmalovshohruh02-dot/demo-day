import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaReact, FaFigma } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import Reveal from "../Reveal/Reveal";

const items = [
  { Icon: FaHtml5, cls: "html" },
  { Icon: FaCss3Alt, cls: "css" },
  { Icon: SiJavascript, cls: "js" },
  { Icon: FaFigma, cls: "figma" },
  { Icon: FaReact, cls: "react" },
  { Icon: SiTailwindcss, cls: "tailwind" },
];

function Skills() {
  return (
    <div className="skills">
      <Reveal direction="down">
        <h2>Asbob-uskunalar</h2>
        <div className="underline"></div>
      </Reveal>

      <div className="skill-box">
        {items.map(({ Icon, cls }, i) => (
          <Reveal key={cls} direction="up" delay={i * 0.08}>
            <div className="card">
              <Icon className={`icon ${cls}`} />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default Skills;
