import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import "../../index"


export default function Navbar() {
  return (
    <header className="NavBar">
      <img src="avatar.png" alt="image" />
      <nav className="nav">
        <a href="#about"> About Me </a>
        <a href="#Background"> Background </a>
        <a href="#projects"> Past Work</a>
        <a href="#skills"> Skills</a>
        <a href="#contact" >Hire Me </a>
      </nav>
    </header>
  );
}