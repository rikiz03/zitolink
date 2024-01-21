import React from "react";

export default function Projects() {
  return (
    <div className="mb-10 md:pt-14 pt-32" id="projects">
      <h2 className="text-center font-black mb-8">PROJECTS</h2>
      <div className="flex w-full box-border h-screen pl-[7%] pr-[3%] pt-[4%] pb-[8%]">
        <div className="hover:flex-[1_1_50%] flex-1 overflow-hidden transition-[0.5s] hover:duration-500 hover:ease-in-out shadow-[0_20px_30px_rgba(0,0,0,0.1)] leading-[0] mx-[2%] my-0">
          <img
            className="w-[200%] h-[calc(100%_-_10vh)] object-cover hover:w-full"
            src="https://source.unsplash.com/1000x800"
            alt="example-project"
          />
          <span className="text-[3.8vh] block text-center h-[10vh] leading-[2.6]">Quantum Doctor Web Application</span>
        </div>

        <div className="hover:flex-[1_1_50%] flex-1 overflow-hidden transition-[0.5s] shadow-[0_20px_30px_rgba(0,0,0,0.1)] leading-[0] mx-[2%] my-0">
          <img
            className="w-[200%] h-[calc(100%_-_10vh)] object-cover transition-[0.5s] hover:w-full hover:h-full"
            src="https://source.unsplash.com/1000x802"
            alt="example-project"
          />
          <span className="block text-center h-[10vh] leading-[2.6] text-lg font-semibold text-gray-900 dark:text-white">Image</span>
          <span className="block text-center h-[10vh] leading-[2.6] text-lg font-semibold text-gray-900 dark:text-white">another</span>
        </div>

        <div className="hover:flex-[1_1_50%] flex-1 overflow-hidden transition-[0.5s] shadow-[0_20px_30px_rgba(0,0,0,0.1)] leading-[0] mx-[2%] my-0">
          <img
            className="w-[200%] h-[calc(100%_-_10vh)] object-cover transition-[0.5s] hover:w-full hover:h-full"
            src="https://source.unsplash.com/1000x804"
            alt="example-project"
          />
          <span className="text-[3.8vh] block text-center h-[10vh] leading-[2.6]">Hover</span>
        </div>
      </div>
    </div>
  );
}

