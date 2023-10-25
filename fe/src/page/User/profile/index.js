import React from "react";
import {
  UserOutlined,
  FolderOutlined,
  FolderAddOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import SiderLayout from "../../../layout/SiderLayout";
import { Routes, Route } from "react-router-dom";

import CV from "./CV";

const menu = [
  {
    label: "Hồ sơ",
    path: "",
    key: "",
    icon: <UserOutlined />,
  },
  {
    label: "Việc làm đã lưu",
    path: "/job-markdown",
    key: "job-markdown",
    icon: <FolderAddOutlined />,
  },
  {
    label: "Việc làm đã nộp",
    path: "/job-submitted",
    key: "job-submitted",
    icon: <FolderOutlined />,
  },
  {
    label: "Nhà tuyển dụng của tôi",
    path: "/my-company",
    key: "my-company",
    icon: <EyeOutlined />,
  },
];
const Profile = () => {
  return (
    <SiderLayout menuProps={{ items: menu, layout: "profile" }}>
      <Routes>
        <Route path="/" element={<CV />} />
      </Routes>
    </SiderLayout>
  );
};

export default Profile;
