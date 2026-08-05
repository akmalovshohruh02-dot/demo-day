import "./Sidebar.css";
import { FaGithub, FaTelegramPlane, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {Link} from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        src="https://avatars.mds.yandex.net/i?id=27d31709182be3a2df0e4e500d8e34c9be4e6f48-16117020-images-thumbs&n=13"
        alt="profile"
        className="profile"
      />

      <h2>SHOXRUX</h2>
      <p>DASATURCHI</p>

      <div className="info">
        <p><Link to="mailto:akmalovshoxrux02@gmail.com"><MdEmail /></Link> akmalovshoxrux02@gmail.com</p>
        <p><Link to="https://github.com/shohruh"><FaGithub /></Link> github.com/shohruh</p>
        <p><Link to="https://t.me/akmlv_sh"><FaTelegramPlane /></Link> @akmlv_sh</p>
        <p><Link to="tel:+998977451105"><FaPhone /></Link> +998 (97) 745 11 05</p>
      </div>
      <a href="/CV.pdf" download className="cv-btn">Download CV</a>
    </div>
  );
}

export default Sidebar;