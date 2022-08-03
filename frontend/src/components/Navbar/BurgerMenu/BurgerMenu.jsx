import React, { useState, useContext, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "../../../index";

import { GiHamburgerMenu } from "react-icons/gi";

export default function BurgerMenu() {


    const [showNav, setShowNav] = useState(false);
    const navBar = useRef(null);

    const showburger = (e) => {

        console.log((e))
        console.log((navBar.current))
        if (navBar.current.contains(e.target)) {
            setShowNav(!showNav);
          }
    }
    return (
        <header className="burger" ref={navBar} onClick={showburger} style={showNav? {overflow: 'hidden'} : {overflow: 'scroll'}}>
          <div className = "burger-icon" style={showNav? {backgroundColor: 'whitesmoke'} : {backgroundColor: 'transparent'}} ><GiHamburgerMenu/></div>
          <div className="nav-burger"   style={showNav? {display: 'grid'} : {display: 'none'}
  }>
            <HashLink to ="/#about"> About Me </HashLink>
            <HashLink to ="/#Background"> Background </HashLink>
            <HashLink to ="/#projects"> Past Work</HashLink>
            <HashLink to ="/#skills"> Skills</HashLink>
            <HashLink to ="/#contact" > Contact me</HashLink>
            <Link to="/private-acess">Private Acess</Link>
          </div>
        </header>
      );

}