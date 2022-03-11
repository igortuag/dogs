import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginCreated from "./LoginCreated";
import LoginForm from "./LoginForm";
import LoginLostPassword from "./LoginLostPassword";
import LoginResetPassword from "./LoginResetPassword";

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreated />} />
        <Route path="lost-password" element={<LoginLostPassword />} />
        <Route path="reset-password" element={<LoginResetPassword />} />
      </Routes>
    </div>
  );
};

export default Login;
