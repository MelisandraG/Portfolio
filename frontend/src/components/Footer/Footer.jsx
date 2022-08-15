import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HashLink } from 'react-router-hash-link';
//create your first component and export it
export function Footer() {
    return (
        <footer className="footer">
            <p>Copyright &copy; {new Date().getFullYear()}</p>
            <div className="nav-footer">
        <HashLink to ="/#about"> About Me </HashLink>
        <HashLink to ="/#Background"> Background </HashLink>
        <HashLink to ="/#projects"> Past Work</HashLink>
        <HashLink to ="/#skills"> Skills</HashLink>
        <HashLink to ="/#contact" > Contact me</HashLink>
        {/*<Link to="/private-acess">Private Acess</Link>*/}
      </div>
            <div>
                <a href="https://github.com/MelisandraG"><AiFillGithub/></a>
                <a href="https://www.linkedin.com/in/melisandra-goncalves/"><AiFillLinkedin/></a>
            </div>
        </footer>
    );
}
