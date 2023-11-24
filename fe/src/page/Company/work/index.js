import React from "react";
import { Routes, Route } from "react-router-dom";
import Search from "./Search";
import EditTask from "../../HR/work/EditTask";
import CV from "../../HR/candidate/CV";

const JobCompany = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/task/edit/:id" element={<EditTask />} />
      <Route path="/task/edit/:id/cv/:id" element={<CV />} />
    </Routes>
  );
};

export default JobCompany;
