import React from "react";
import Bar from "./components/Bar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Abilities from "./components/Abilities";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

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
