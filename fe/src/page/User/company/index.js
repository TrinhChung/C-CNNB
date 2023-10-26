import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchCompany from "./search";
import CompanyDetail from "./detail";
const Company = () => {
  return (
    <Routes>
      <Route path="/detail/*" element={<CompanyDetail />} />
      <Route path="/" element={<SearchCompany />} />
    </Routes>
  );
};

export default Company;
