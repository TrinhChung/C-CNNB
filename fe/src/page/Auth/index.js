import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
const Auth = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/auth/signup" element={<Register />} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default Auth;
