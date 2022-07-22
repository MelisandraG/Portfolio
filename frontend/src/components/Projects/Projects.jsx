// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React,{useEffect, useState} from "react";
import axios from 'axios';

//import { projects } from "../../data";

export default function Projects() {
  const [projects, setProjects] = useState()

  useEffect(() => {
   getProject();
  }, []);


  const getProject = () => {
    axios
      .get(`/auth/project`)
      .then((response) => {
        setProjects(response.data)

      })
      .catch((error) => {

      });
  }




  return (
    <section id="projects">
      <div>
        <div className="section-title">
          <div className="section-title-icon"><CodeIcon/></div>
          <h1> Apps I've Built</h1>
        </div>
        <div className="projectsContainer">
          <p>
          The first two applications, I built during the bootcamp, Over time I will publish my new projects, because I really enjoy creating applications, learning new programming languages ​​and discovering new solutions.
          </p>
          <div className="project-items">
            {projects?.map((project) => (
              <div className="project-item">
                <div className="flex relative">
                  <img alt="gallery"  src={project.image} className='project-image'/>
                  <a href={project.link} key={project.image}>{project.link}</a>
                  <div>
                    <h1> {project.title}</h1>
                    <h2>{project.subtitle}</h2>
                    <p>{project.description}</p>
                    <p>{project.technologies}</p>
                  </div>
                </div>
              </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}