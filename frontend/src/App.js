import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContext";
import BurgerMenu from "./components/Navbar/BurgerMenu/BurgerMenu";

export default function App() {
  return (
    <div>
      <AuthContextProvider>
      <Router>
        <Navbar />
        <BurgerMenu/>
        <Main/>
      </Router>
      </AuthContextProvider>
    </div>
  );
}