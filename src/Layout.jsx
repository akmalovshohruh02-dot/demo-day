import "./Home.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="home">
        <Sidebar />

        <div className="right">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
