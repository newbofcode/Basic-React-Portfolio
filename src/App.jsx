import "./App.css";
import { AppNavbar } from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/Banner/Banner";
import Skills from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <>
      <div className="nav">
        <AppNavbar />
      </div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <Skills></Skills>
      </div>
      <div>
        <Projects></Projects>
      </div>
      <div>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;
