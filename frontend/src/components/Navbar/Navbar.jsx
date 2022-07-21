import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "../../index";


export default function Navbar() {
  return (
    <header className="NavBar">
      <img src="avatar.png" alt="image" />
      <nav className="nav">
     
        <HashLink to ="/#about"> About Me </HashLink>
        <HashLink to ="/#Background"> Background </HashLink>
        <HashLink to ="/#projects"> Past Work</HashLink>
        <HashLink to ="/#skills"> Skills</HashLink>
        <HashLink to ="/#contact" >Hire Me </HashLink>
        <Link to="/private-acess">dfd</Link>
      </nav>
    </header>
  );
}