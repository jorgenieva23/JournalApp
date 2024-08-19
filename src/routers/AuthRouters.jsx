import React from "react";
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router";

import { Login } from "../components/auth/Login";
import { SignUp } from "../components/auth/SingUp";

export const AuthRouters = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />

          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
      </div>
    </div>
  );
};
