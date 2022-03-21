import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

import styles from "./User.module.css";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login) {
    <Navigate to="/user" />;
  }

  return (
    <div className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<div>bla</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default Login;
