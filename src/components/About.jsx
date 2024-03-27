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
            Highly capable and experienced{" "}
            <box className="font-bold">Full Stack Developer</box> with over 2
            years of experience developing Software for Quantum Innovative Tech
            Solutions and CanRise Technologies using{" "}
            <box className="font-bold">Front-end</box> and{" "}
            <box className="font-bold">Back-end </box>
            Technologies.
            <br />
            Proficient in HTML5, CSS3, TailwindCSS, JavaScript, ReactJS,
            ASP.NET, C#, Python, Django, Databases, and Agile methodologies.
            <br />A team player with{" "}
            <box className="font-bold">Excellent communication</box> and{" "}
            <box className="font-bold">Problem-solving skills </box>
            looking for a challenging and rewarding Web development position to
            leverage my skills and experience and make a positive impact.
          </p>
        </div>
      </div>
    </div>
  );
}

// Hi, i
// am <box className="font-bold"> Kizito Okeke</box>, a Full Stack
// Software Engineer. As a self-taught Developer, I take pride in my
// ability to solve complex problems and maintain the highest quality
// standards in all my work. I have a wealth of experience working with
// a wide range of programming languages, frameworks, and tools, which
// enables me to build intuitive{" "}
// <box className="font-bold"> user interfaces </box> and develop
// robust <box className="font-bold"> server-side </box> applications.
// My technical know-how aside, I excel at effective communication and
// time management, and i adapt quickly to new conditions and
// environment. I am also passionate about{" "}
// <box className="font-bold"> UX/UI </box> and 3D Modeling/Animation
// which i use in adding some special effects to Software. When I'm not
// busy coding, I like to relax my mind by watching movies or stay
// active by hitting the gym. These activities help me to stay sharp,
// motivated, and in touch with my creative side. Lets work together to
// bring your project to life!
