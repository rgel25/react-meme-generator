import React from "react";
import troll from "../images/troll-face.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <img src={troll} alt="troll face" className="nav-logo" />
        <nav className="nav-title">Meme Generator</nav>
      </div>
      <span className="nav-attribution">React App by Argel Miralles</span>
    </nav>
  );
}
