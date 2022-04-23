import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { data } = useSelector((state) => state.user);

  if (data) return <Outlet />;
  else if (data === null) return <Navigate to="/login" />;
  else return null;
};

export default ProtectedRoute;
