import React from "react";
import SiderLayout from "../../../layout/SiderLayout";
import { Routes, Route } from "react-router-dom";
import CompanyProfile from "./CompanyProfile";
import Info from "./Info";
import {
  UserOutlined,
  FolderOutlined,
  FolderAddOutlined,
} from "@ant-design/icons";

const menu = [
  {
    label: "Thông tin tài khoản",
    path: "",
    key: "",
    icon: <UserOutlined />,
  },
  {
    label: "Thông tin công ty",
    path: "/company",
    key: "company",
    icon: <FolderAddOutlined />,
  },
  {
    label: "Thay đổi mật khẩu",
    path: "/passwd",
    key: "passwd",
    icon: <FolderOutlined />,
  },
];
const Profile = () => {
  return (
    <SiderLayout menuProps={{ items: menu, layout: "profile" }}>
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/company" element={<CompanyProfile />} />
      </Routes>
    </SiderLayout>
  );
};

export default Profile;
