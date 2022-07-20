import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Background from "./components/Background/Background";


export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Background/>
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}