import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Background from "./Background/Background";
import LoginPage from "./LoginPage/LoginPage";
import SubmitProject from "./LoginPage/SubmiteProject/SubmiteProject";
import Layout from "./Layout";
import RequireAuth from "./RequireAuth/RequireAuth"

export default function Main() {
  const ROLES = {
    user: "user",
  };
  return (
      <div className="main">
        <Routes>
          <Route path="/" element={<><About /><Background/><Projects /><Skills /><Contact /></>}/>
          <Route path="/private-acess" element={<LoginPage/>}/>
          <Route path="/" element={<Layout />}>
            <Route
              element={<RequireAuth allowedRoles={[ROLES.user]} />}
            >
              <Route path="/private-acess/submite-project" element={<SubmitProject/>}/>
              </Route>
          </Route>
      </Routes>
    </div>
  );
}