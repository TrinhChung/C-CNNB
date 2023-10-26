import React from "react";
import { Routes, Route } from "react-router-dom";
import Search from "./Search";
const Manager = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
    </Routes>
  );
};

export default Manager;
