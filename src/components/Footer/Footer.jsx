import "./Footer.css";
import { FaGithub, FaTelegram, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h2>Shohruhbek.uz</h2>

      <p>Frontend Developer | React Developer</p>

      <div className="socials">
        <a href="https://github.com/login"><FaGithub /></a>
        <a href="https://telegram.org/?setln=en"><FaTelegram /></a>
        <a href="https://www.instagram.com/"><FaInstagram /></a>
      </div>

      <small>© 2026 Barcha huquqlar himoyalangan.</small>
    </footer>
  );
}

export default Footer;