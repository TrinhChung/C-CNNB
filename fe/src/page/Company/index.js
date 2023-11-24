import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomeLayout from "../../layout/HomeLayout";
import Home from "./home";
import JobCompany from "./work";
import Manager from "./manager";
import CompanyProfile from "./profile";
import CV from "../HR/candidate/CV";
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
      label: <Link to={"/profile"}>Hồ sơ công ty</Link>,
      key: "profile",
    },
  ];

  return (
    <HomeLayout menu={items}>
      <div style={{ paddingTop: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/*" element={<JobCompany />} />
          <Route path="/manager/*" element={<Manager />} />
          <Route path="/profile" element={<CompanyProfile />} />
          <Route path="/candidate/cv/:id" element={<CV />} />
        </Routes>
      </div>
    </HomeLayout>
  );
};

export default Company;
