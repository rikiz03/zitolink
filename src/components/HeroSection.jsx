import React from "react";
import HireMe from "./HireMe";

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* My introduction */}
      <div className="hero-content">
        <h1>I am Kizito Okeke</h1>
        <p>Welcome to my interactive resume</p>
        <HireMe />
      </div>
   
      {/* hero section background animation */}
      <div>
      <iframe 
      title="Spline Animation"
      src="https://my.spline.design/planetcopy-833b89d8a21fae34d504e83777cd49cb/"
      className="hero-video"
      allowFullScreen
      />
      <div className="overlay"></div>
      </div>

    </div>

  );
};

export default HeroSection;
