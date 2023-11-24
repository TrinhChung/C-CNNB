import React from "react";
import { Routes, Route } from "react-router-dom";
import Search from "./Search";
import EditTask from "../../HR/work/EditTask";

const JobCompany = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/task/edit/:id" element={<EditTask />} />
    </Routes>
  );
};

export default JobCompany;
