import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Ao from "./components/ao";

function App() {
  return (
    <div>
      <NavBar />
      {/* Static Landing Page */}
      <Home />
      <About />
      <Experience />
      <Ao />
      <Portfolio />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
