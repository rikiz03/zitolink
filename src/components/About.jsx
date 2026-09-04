import React from "react";

export default function About() {
  return (
    <div className="my-20" id="about">
      <h2 className="font-black mb-4 md:mb-2 md:text-center ml-4 md:ml-0">
        ABOUT ME
      </h2>
      <div className="flex flex-col md:flex-row md:items-center md:pt-4 pl-4 md:pl-16 md:justify-between gap-10">
        <div className="flex items-start md:items-end md:w-1/3 md:mb-8">
          <img
            className="rounded-t-lg md:rounded-none md:rounded-l-lg w-auto h-48 md:ml-44"
            src="https://i.postimg.cc/7C2bpYjr/hd-mokker-e50ad6f8c41f.png"
            alt="my-avatar"
          />
        </div>

        <div className="leading-normal md:w-2/3">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 md:w-2/3">
            I am a highly capable and experienced{" "}
            <box className="font-bold">Full-Stack Developer</box> with over 3
            years of experience developing Software for Quantum Innovative Tech
            Solutions and CanRise Technologies using{" "}
            <box className="font-bold">Front-end</box> and{" "}
            <box className="font-bold">Back-end </box>
            Technologies.
            <br />
            Proficient in HTML5, CSS3, TailwindCSS, JavaScript, ReactJS,
            ASP.NET Core, C#, Python, Django, Databases, and Agile methodologies.
            <br />A Problem Solver with{" "}
            <box className="font-bold">Great Communication</box> and{" "}
            <box className="font-bold">Creativity. </box>
            Let's work together to bring your project to life!
          </p>
        </div>
      </div>
    </div>
  );
}