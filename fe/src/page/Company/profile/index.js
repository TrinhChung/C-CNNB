import React from "react";
import {
  UserOutlined,
  FolderOutlined,
  FolderAddOutlined,
} from "@ant-design/icons";
import SiderLayout from "../../../layout/SiderLayout";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Analytic from "../analytic";
import AnalyticApply from "./AnalyticApply";

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
    label: "Thống kê Apply",
    path: "/analytic-apply",
    key: "analytic-apply",
    icon: <FolderOutlined />,
  },
];
const ProfileCompany = () => {
  return (
    <SiderLayout menuProps={{ items: menu, layout: "profile" }}>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/analytic-job" element={<Analytic />} />
        <Route path="/analytic-apply" element={<AnalyticApply />} />
      </Routes>
    </SiderLayout>
  );
};

export default ProfileCompany;
