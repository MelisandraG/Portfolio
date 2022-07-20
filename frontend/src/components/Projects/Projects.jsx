// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../../data";

export default function Projects() {
  return (
    <section id="projects">
      <div>
        <div>
          <CodeIcon/>
          <h1> Apps I've Built</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div>
          {projects.map((project) => (
            <a href={project.link} key={project.image}>
              <div className="flex relative">
                <img alt="gallery"  src={project.image} />
                <div>
                  <h2>{project.subtitle}</h2>
                  <h1> {project.title}</h1>
                  <p>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}