import React from "react";
import { Navigate, Route } from "react-router-dom";
import { UserContext } from "../../UserContext";

const ProtectedRoute = (props) => {
  const { login } = React.useContext(UserContext);

  if (login) {
    return <Route to="/user" {...props} />;
  } else if (login === false) {
    return <Navigate to="/user" />;
  }

  return null;
};

export default ProtectedRoute;
