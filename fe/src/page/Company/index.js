import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomeLayout from "../../layout/HomeLayout";
import Home from "./home";
import JobCompany from "./work";
import Manager from "./manager";
import CompanyProfile from "../HR/profile/CompanyProfile";
const Company = () => {
  const items = [
    {
      label: <Link to="/">Trang chủ</Link>,
      key: "home",
    },
    {
      label: <Link to={"/work"}>Công việc</Link>,
      key: "work",
    },
    {
      label: <Link to={"/manager"}>Quản lý nhân sự</Link>,
      key: "manager",
    },
    {
      label: <Link to={"/company"}>Hồ sơ công ty</Link>,
      key: "company",
    },
  ];

  return (
    <HomeLayout menu={items}>
      <div style={{ paddingTop: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/*" element={<JobCompany />} />
          <Route path="/manager/*" element={<Manager />} />
          <Route path="/company" element={<CompanyProfile />} />
        </Routes>
      </div>
    </HomeLayout>
  );
};

export default Company;
