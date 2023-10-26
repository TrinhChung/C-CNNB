import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import HomeLayout from "../../layout/HomeLayout";
import Home from "./home";
import Profile from "../User/profile";

const HR = () => {
  const items = [
    {
      label: <Link to="/">Trang chủ</Link>,
      key: "home",
    },
    {
      label: <Link to={"/recruit"}>Đăng tuyển</Link>,
      key: "recruit",
    },
    {
      label: <Link to={"/candidate"}>Ứng viên</Link>,
      key: "candidate",
    },
    {
      label: <Link to={"/profile/"}>Hồ sơ</Link>,
      key: "profile",
    },
  ];

  return (
    <HomeLayout menu={items}>
      <div style={{ paddingTop: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/*" element={<Profile />} />
        </Routes>
      </div>
    </HomeLayout>
  );
};

export default HR;
