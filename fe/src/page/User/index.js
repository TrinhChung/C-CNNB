import HomeLayout from "../../layout/HomeLayout";
import { Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./home";
import Job from "./job";
import Company from "./company";
import Profile from "./profile";
import React, { memo } from "react";

const items = [
  {
    label: <Link to="/">Trang chủ</Link>,
    key: "home",
  },
  {
    label: <Link to={"/job"}>Việc làm</Link>,
    key: "job",
  },
  {
    label: <Link to={"/company"}>Công ty</Link>,
    key: "company",
  },
  {
    label: <Link to={"/profile/"}>Hồ sơ</Link>,
    key: "profile",
  },
];

const User = () => {
  return (
    <HomeLayout menu={items}>
      <div style={{ paddingTop: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job/*" element={<Job />} />
          <Route path="/company/*" element={<Company />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </HomeLayout>
  );
};

export default memo(User);
