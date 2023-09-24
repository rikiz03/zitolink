import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li onClick={() => setIsOpen(!isOpen)} className="dropdown">
          <a href="#about">About</a>
          {isOpen && (
            <ul className="dropdown-content">
              <li><a href="#about-me">About Me</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
            </ul>
          )}
        </li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;