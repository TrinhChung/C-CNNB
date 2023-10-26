import React from "react";
import { Routes, Route } from "react-router-dom";
import JobDetail from "../../User/job/detail";
import Search from "./Search";

const JobCompany = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/detail/*" element={<JobDetail />} />
    </Routes>
  );
};

export default JobCompany;
