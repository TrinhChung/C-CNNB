import React from "react";
import { Routes, Route } from "react-router-dom";
import Search from "./search";
import CV from "./CV";
const Candidate = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/cv/*" element={<CV />} />
    </Routes>
  );
};

export default Candidate;
