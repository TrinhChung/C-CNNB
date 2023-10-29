import React from "react";
import { Routes, Route } from "react-router-dom";
import JobDetail from "./detail";
import Search from "./search";
const Job = () => {
  return (
    <Routes>
      <Route path="/detail/:id" element={<JobDetail />} />
      <Route path="/" element={<Search />} />
    </Routes>
  );
};

export default Job;
