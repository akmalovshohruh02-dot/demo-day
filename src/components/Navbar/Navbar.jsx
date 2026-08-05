import "./Navbar.css";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  const changeTheme = () => {
    setDarkMode(!darkMode);

  document.body.classList.toggle("light-theme");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>SHOXRUX.UZ</h2> 
      </div>

      <ul className="nav-links">
         <li><a href="/">Bosh sahifa</a></li>
        <li><a href="/">Loyihalar</a></li>
        <li><a href="/">Bog'lanish</a></li>
      </ul>

      <button onClick={changeTheme} className="theme-btn">
        {darkMode ? <IoSunnyOutline /> : <FaMoon />}
      </button>
    </nav>
  );
}

export default Navbar;