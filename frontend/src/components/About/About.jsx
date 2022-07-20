import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="aboutContainer">
        <div>
          <h1>Hi, I'm Melisandra. <br/>I love to build amazing apps.</h1>
          <p>I am a civil engineer who wants to change career paths. After two years working in a construction company, I discovered that I made a mistake in my professional choice, although I like to solve/analyze problems, there are other more suitable career paths for me.</p>
          <p>On 02/29/2022 I started taking the full stack developer course. In this course I learned to work with html, css, javascript, react, express, mysql. I finish the course on 07/29/2022, taking this course is being pleasant because in addition to learning programming language, I put my knowledge into practice through projects, quests and checkpoints.</p>
          <p>After the course I want to continue to learn new programming languages, so I want to work in a company that gives me continuous training and new challenges.</p>
          <p>if you want to know more information about me you can contact me by email: melisandra.goncalves@homail.com</p>
          <div>
            <a href="#contact"> Work With Me</a>
            <a href="#projects"> See My Past Work </a>
          </div>
        </div>
        <div>
          <img alt="hero" src="./melisandra.jpg"/>
        </div>
      </div>
    </section>
  );
}