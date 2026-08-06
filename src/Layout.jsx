import "./Home.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import LiveBackground from "./components/LiveBackground/LiveBackground";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  // Sidebar mobil ekranda faqat "Loyihalar" va "Bog'lanish" sahifalarida yashiriladi
  const hideSidebarOnMobile =
    location.pathname === "/loyihalar" || location.pathname === "/boglanish";

  return (
    <>
      <LiveBackground />
      <Navbar />
      <div className="home">
        <Sidebar hideOnMobile={hideSidebarOnMobile} />

        <div className="right">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
