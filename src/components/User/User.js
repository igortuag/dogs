import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Feed from "../Feed/Feed";

import UserHeader from "./UserHeader";

const User = () => {
  const { login } = React.useContext(UserContext);

  if (login) {
    <Navigate to="/user" />;
  }

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
    </section>
  );
};

export default User;
