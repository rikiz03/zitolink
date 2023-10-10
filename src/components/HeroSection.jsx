import React from "react";
import HireMe from "./HireMe";
import Bar from "./Bar";

const HeroSection = () => {
  return (
    <div className="hero-section flex flex-col">
      <Bar />
      {/* My introduction */}
      <div className="z-40 translate-y-60">
        <h1 className="pb-4 text-white text-5xl">Hi!</h1>
        <p className="text-2xl text-white">Welcome to my interactive resume</p>
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
