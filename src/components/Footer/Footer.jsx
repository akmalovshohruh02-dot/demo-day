import "./Footer.css";
import { FaGithub, FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h2>SHOXRUX.UZ</h2>

      <p>Frontend Developer | React Developer</p>

      <div className="socials">
        <a href="https://github.com/shohruh" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://t.me/akmlv_sh" target="_blank" rel="noreferrer"><FaTelegram /></a>
      </div>

      <small>© 2026 Barcha huquqlar himoyalangan.</small>
    </footer>
  );
}

export default Footer;
