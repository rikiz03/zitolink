import React from "react";
import hairstylechangerai from "../../assets/hairstylechangerai.png";
import quantumdoctor from "../../assets/quantumdoctor.png";
import wikiapi from "../../assets/wikiapi.png";

export default function Projects() {
  return (
    <div className="mb-10 md:pt-14 pt-32" id="projects">
      <h2 className="text-center font-black mb-8">PROJECTS</h2>
      <div className="flex w-full box-border h-screen pl-[7%] pr-[3%] pt-[4%] pb-[8%]">
        <div className="hover:flex-[1_1_50%] flex-1 overflow-hidden transition-[0.5s] hover:duration-500 hover:ease-in-out shadow-[0_20px_30px_rgba(0,0,0,0.1)] leading-[0] mx-[2%] my-0">
          <img
            className="w-[200%] h-[calc(100%_-_10vh)] object-cover hover:w-full"
            src={hairstylechangerai}
            alt="hairstyle changer AI"
          />
          <span className="text-[3.8vh] block text-center h-[10vh] leading-[2.6]">Hairstyle Changer AI</span>
        </div>

        <div className="hover:flex-[1_1_50%] flex-1 overflow-hidden transition-[0.5s] hover:duration-500 hover:ease-in-out shadow-[0_20px_30px_rgba(0,0,0,0.1)] leading-[0] mx-[2%] my-0">
          <img
            className="w-[200%] h-[calc(100%_-_10vh)] object-cover transition-[0.5s]"
            src={quantumdoctor}
            alt="QIT project"
          />
          <span className="text-[3.8vh] block text-center h-[10vh] leading-[2.6]">Quantum Doctor Web Application</span>
        </div>

        <div className="hover:flex-[1_1_50%] flex-1 overflow-hidden transition-[0.5s] hover:duration-500 hover:ease-in-out shadow-[0_20px_30px_rgba(0,0,0,0.1)] leading-[0] mx-[2%] my-0">
          <img
            className="w-[200%] h-[calc(100%_-_10vh)] object-cover transition-[0.5s] hover:w-full"
            src={wikiapi}
            alt="wiki API"
          />
          <span className="text-[3.8vh] block text-center h-[10vh] leading-[2.6]">Wiki-API</span>
        </div>
      </div>
    </div>
  );
}

// https://source.unsplash.com/1000x800
// https://source.unsplash.com/1000x802
// https://source.unsplash.com/1000x804


// https://i.postimg.cc/W3bTYcDd/Screenshot-12.png
// https://i.postimg.cc/2y9yJMZy/Screenshot-14.png
// https://i.postimg.cc/fS4CXrKn/Screenshot-15.png