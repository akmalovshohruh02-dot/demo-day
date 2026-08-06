import "./Sidebar.css";
import { FaGithub, FaTelegramPlane, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

function Sidebar({ hideOnMobile = false }) {
  return (
    <motion.div
      className={`sidebar${hideOnMobile ? " hide-on-mobile" : ""}`}
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img
        src="https://avatars.mds.yandex.net/i?id=27d31709182be3a2df0e4e500d8e34c9be4e6f48-16117020-images-thumbs&n=13"
        alt="profile"
        className="profile"
      />

      <h2>SHOXRUX</h2>
      <p>DASTURCHI</p>

      <div className="info">
        <p><a href="mailto:akmalovshoxrux02@gmail.com"><MdEmail /></a> akmalovshoxrux02@gmail.com</p>
        <p><a href="https://github.com/shohruh" target="_blank" rel="noreferrer"><FaGithub /></a> github.com/shohruh</p>
        <p><a href="https://t.me/akmlv_sh" target="_blank" rel="noreferrer"><FaTelegramPlane /></a> @akmlv_sh</p>
        <p><a href="tel:+998977451105"><FaPhone /></a> +998 (97) 745 11 05</p>
      </div>
      <a href="/CV.pdf" download className="cv-btn">Download CV</a>
    </motion.div>
  );
}

export default Sidebar;
