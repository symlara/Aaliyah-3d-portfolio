import { HashRouter } from "react-router-dom";
import {
  About,
  Hero,
  Navbar,
  Experience,
  Tech,
  Works,
  Contact,
  StarsCanvas,
  Footer,
} from "./components";

function App() {
  return (
    <HashRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
