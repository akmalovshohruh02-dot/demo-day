import "./Home.css"; 
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";

function Home() {
  return (
    <div className="home">
      <Sidebar />
     
      <div className="right">
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}

export default Home;