import React, { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../helpers/auth";
import Cookies from "js-cookie";

export const AuthContext = React.createContext(null);

export default function AuthContextProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});
  const [userRole, setUserRole] = useState();
  const [loading, setLoading] = useState(false);


  const getUser = async () => {
    axios
      .get("/auth/verify-token", config)
      .then((response) => {
        setUser(response.data);
        setAuth(true);
        setLoading(true);
      })
      .catch((error) => {
        setAuth(false);
        console.log("error context",error)
        Cookies.remove("userportfolio_token");
      });
  };

  const noUser = () => {
    setAuth(false);
    setLoading(true);
  };
  useEffect(() => {
    Cookies.get("userportfolio_token") ? getUser() : noUser();
  }, []);


  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        user,
        setUser,
        userRole,
        setUserRole,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
