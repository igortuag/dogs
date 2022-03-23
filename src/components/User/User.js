import React from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

import UserHeader from "./UserHeader";

const User = () => {
  const { login } = React.useContext(UserContext);

  if (login) {
    <Navigate to="/user" />;
  }

  return (
    <section className="container">
      <UserHeader />
    </section>
  );
};

export default User;
