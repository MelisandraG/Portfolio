import React, { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";


const RequireAuth = ({ allowedRoles }) => {
  const { user, loading } =
    useContext(AuthContext);
  const location = useLocation();
  console.log(user)

  return (
    <>
      {!loading && <div className="spinner">loading</div>}
      {loading && allowedRoles?.includes(user.role)
        ? (<Outlet />) :
        user.role ? (<Navigate to="/" />) : (<Navigate to="/" state={{ from: location }} replace />)}
    </>
  )
};

export default RequireAuth