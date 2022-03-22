import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../UserContext";

const ProtectedRoute = () => {
  const { login } = React.useContext(UserContext);

  if (login) return <Outlet />;
  else if (login === false) return <Navigate to="/login" />;
  else return null;
};

export default ProtectedRoute;
