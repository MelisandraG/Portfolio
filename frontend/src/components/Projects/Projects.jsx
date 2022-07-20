// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../../data";

export default function Projects() {
  return (
    <section id="projects">
      <div>
        <div className="section-title">
          <div className="section-title-icon"><CodeIcon/></div>
          <h1> Apps I've Built</h1>
        </div>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
        </p>
        <div className="project-items">
          {projects.map((project) => (
            <div className="project-item">
            <a href={project.link} key={project.image}></a>
              <div className="flex relative">
                <img alt="gallery"  src={project.image} className='project-image'/>
                <div>
                  <h2>{project.subtitle}</h2>
                  <h1> {project.title}</h1>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}