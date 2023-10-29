import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
const Auth = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Auth;
