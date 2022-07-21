// src/components/Skills.js

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../../data";

export default function Skills() {
  return (
    <section id="skills">
      <div>
        <div className="section-title">
          <div className="section-title-icon"><ChipIcon/></div>
          <h1>  Skills &amp; Technologies</h1>
        </div>
        <div className='skillsContainer'>
          <p>
          All my knowledge, I emphasize that I am at the beginning of my professional path as a developer.
          </p>
          <div className="tec">
            {skills.map((skill) => (
              <div key={skill} className ="skill-item">
                <div className="language">
                  <img alt="gallery"  src={skill.image} className ='skill-image'/>
                  <span>
                    {skill.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
