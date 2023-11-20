import React from "react";
import { Routes, Route } from "react-router-dom";
import Search from "./Search";
import AcceptHr from "./AcceptHr";
const Manager = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/detail/:id" element={<AcceptHr />} />
    </Routes>
  );
};

export default Manager;
