import { Outlet } from "react-router-dom";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";


const Layout = () => {
  const { loading, auth } = useContext(AuthContext);
  console.log(loading)
  console.log(auth)

  return (
    <div className="layout">
      {(!loading) ? <div className="spinner">loading</div> : (
        auth ? <> <Outlet /></> : <Navigate to='/' />)
      }
    </div >
  )
}

export default Layout;
