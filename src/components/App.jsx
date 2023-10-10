import React from "react";
import Bar from "./Bar";
import HeroSection from "./HeroSection";
import About from "./About";
import Abilities from "./Abilities";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";



function App() {
  return (
    <div className="App">
      <HeroSection />
      <About />
      <Abilities />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
export default App;
