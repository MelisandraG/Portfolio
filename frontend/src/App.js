import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Main/>
      </Router>
    </div>
  );
}