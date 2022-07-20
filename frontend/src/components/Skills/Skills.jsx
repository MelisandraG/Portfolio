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
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
          ipsa delectus eum quo voluptas aspernatur accusantium distinctio
          possimus est.
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
    </section>
  );
}
