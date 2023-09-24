import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="heroground">
      <Navbar />
      <div className="outlook">
        <h1 className="name">I am kizito</h1>
        <p className="who">a React/Node Engineer</p>
      </div>

      <div>
        <img className="me" src="https://imgur.com/Eg0BFV8" alt="" />
      </div>
    </div>
  );
}

export default Header;
