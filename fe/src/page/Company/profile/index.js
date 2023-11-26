import React from "react";
import {
  UserOutlined,
  FolderOutlined,
  FolderAddOutlined,
} from "@ant-design/icons";
import SiderLayout from "../../../layout/SiderLayout";
import { Routes, Route, Link } from "react-router-dom";
import Profile from "./Profile";
import Analytic from "../analytic";

const menu = [
  {
    label: "Hồ sơ",
    path: "",
    key: "",
    icon: <UserOutlined />,
  },
  {
    label: "Thống kê Job",
    path: "/analytic-job",
    key: "analytic-job",
    icon: <FolderAddOutlined />,
  },
  {
    label: "Việc làm đã nộp",
    path: "/job-submitted",
    key: "job-submitted",
    icon: <FolderOutlined />,
  },
];
const ProfileCompany = () => {
  return (
    <SiderLayout menuProps={{ items: menu, layout: "profile" }}>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/analytic-job" element={<Analytic />} />
      </Routes>
    </SiderLayout>
  );
};

export default ProfileCompany;
