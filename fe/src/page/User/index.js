import HomeLayout from "../../layout/HomeLayout";
import { Link } from "react-router-dom";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./home";
import Job from "./job";
import Company from "./company";
import Profile from "./profile";
import React, { memo } from "react";
import LinkCustom from "../../component/LinkCustom";

const items = [
  {
    label: <LinkCustom to="/" label="Trang chủ" />,
    key: "home",
  },
  {
    label: <LinkCustom to={"/job"} label="Việc làm" />,
    key: "job",
  },
  {
    label: <LinkCustom to={"/company"} label="Công ty" />,
    key: "company",
  },
  {
    label: <LinkCustom to={"/profile/"} label="Hồ sơ" />,
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

export default User;
