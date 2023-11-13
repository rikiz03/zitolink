import React from "react";

export default function Projects() {
  return (
    <div className="mb-10 mt-20" id="projects">
      <h2 className="text-center font-black mb-8">PROJECTS</h2>
      <div className="container">
        <div className="box">
          <img src="https://source.unsplash.com/1000x800" />
          <span className="text-lg font-semibold text-gray-900 mb-2">CSS</span>
        </div>

        <div className="box">
          <img src="https://source.unsplash.com/1000x802" />
          <span className="">Image</span>
        </div>

        <div className="box">
          <img src="https://source.unsplash.com/1000x804" />
          <span className="">Hover</span>
        </div>

        <div className="box">
          <img src="https://source.unsplash.com/1000x806" />
          <span className="">Effect</span>
        </div>
      </div>
    </div>
  );
}
