// src/components/Skills.js

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../../data";

export default function Skills() {
  return (
    <section id="skills">
      <div>
        <div>
          <ChipIcon/>
          <h1>  Skills &amp; Technologies</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="tec">
          {skills.map((skill) => (
            <div key={skill}>
              <div className="language">
                <img alt="gallery"  src={skill.image} />
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
