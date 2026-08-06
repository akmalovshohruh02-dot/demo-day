import "./Footer.css";
import { FaGithub, FaTelegram } from "react-icons/fa";
import Reveal from "../Reveal/Reveal";

function Footer() {
  return (
    <Reveal direction="up">
      <footer className="footer">
        <h2>SHOXRUX.UZ</h2>

        <p>Frontend Developer | React Developer</p>

        <div className="socials">
          <a href="https://github.com/shohruh" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://t.me/akma1ov_Sh" target="_blank" rel="noreferrer"><FaTelegram /></a>
        </div>

        <small>© 2026 Barcha huquqlar himoyalangan.</small>
      </footer>
    </Reveal>
  );
}

export default Footer;
