import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Background from "./Background/Background";
import LoginPage from "./LoginPage/LoginPage";



export default function Main() {
  return (
      <div className="main">
        <Routes>
          <Route path="/" element={<><About /><Background/><Projects /><Skills /><Contact /></>}/>
          <Route path="/private-acess" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}