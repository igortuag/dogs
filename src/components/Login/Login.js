import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

import LoginCreated from "./LoginCreated";
import LoginForm from "./LoginForm";
import LoginLostPassword from "./LoginLostPassword";
import LoginResetPassword from "./LoginResetPassword";
import styles from "./Login.module.css";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login) {
    <Navigate to="/conta" />;
  }

  return (
    <div className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreated />} />
          <Route path="lost-password" element={<LoginLostPassword />} />
          <Route path="reset-password" element={<LoginResetPassword />} />
        </Routes>
      </div>
    </div>
  );
};

export default Login;
