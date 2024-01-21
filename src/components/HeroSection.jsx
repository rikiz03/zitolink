import React from "react";
import HireMe from "./HireMe";
import Bar from "./Bar";

const HeroSection = () => {
  return (
    <div className="relative text-center h-screen overflow-hidden flex flex-col">
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
          className="absolute w-full h-screen object-cover z-[1] border-[none] left-0 top-0"
          allowFullScreen
        />
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.7)] z-[2] left-0 top-0"></div>
      </div>
    </div>
  );
};

export default HeroSection;
