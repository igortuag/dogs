import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginLostPassword from "./LoginLostPassword";
import LoginResetPassword from "./LoginResetPassword";
import styles from "./Login.module.css";
import NotFound from "../NotFound";
import { useSelector } from "react-redux";

const Login = () => {
  const { data } = useSelector((state) => state.user);

  if (data) {
    <Navigate to="/user" />;
  }

  return (
    <div className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="register" element={<LoginCreate />} />
          <Route path="lost-password" element={<LoginLostPassword />} />
          <Route path="reset-password" element={<LoginResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default Login;
