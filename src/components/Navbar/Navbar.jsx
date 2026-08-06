import "./Navbar.css";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  const changeTheme = () => {
    setDarkMode(!darkMode);

    document.body.classList.toggle("light-theme");
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="logo">
        <h2>SHOXRUX.UZ</h2>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Bosh sahifa
          </NavLink>
        </li>
        <li>
          <NavLink to="/loyihalar" className={({ isActive }) => (isActive ? "active" : "")}>
            Loyihalar
          </NavLink>
        </li>
        <li>
          <NavLink to="/boglanish" className={({ isActive }) => (isActive ? "active" : "")}>
            Bog'lanish
          </NavLink>
        </li>
      </ul>

      <button onClick={changeTheme} className="theme-btn">
        {darkMode ? <IoSunnyOutline /> : <FaMoon />}
      </button>
    </motion.nav>
  );
}

export default Navbar;
