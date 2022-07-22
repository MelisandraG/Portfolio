import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContext";

export default function App() {
  return (
    <div>
      <AuthContextProvider>
      <Router>
        <Navbar />
        <Main/>
      </Router>
      </AuthContextProvider>
    </div>
  );
}