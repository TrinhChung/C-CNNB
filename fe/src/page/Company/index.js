import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomeLayout from "../../layout/HomeLayout";
import Home from "./home";
import JobCompany from "./job";
import Manager from "./manager";
const Company = () => {
  const items = [
    {
      label: <Link to="/">Trang chủ</Link>,
      key: "home",
    },
    {
      label: <Link to={"/job"}>Công việc</Link>,
      key: "job",
    },
    {
      label: <Link to={"/manager"}>Quản lý nhân sự</Link>,
      key: "manager",
    },
  ];

  return (
    <HomeLayout menu={items}>
      <div style={{ paddingTop: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job/*" element={<JobCompany />} />
          <Route path="/manager/*" element={<Manager />} />
        </Routes>
      </div>
    </HomeLayout>
  );
};

export default Company;
