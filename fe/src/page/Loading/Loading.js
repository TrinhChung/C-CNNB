import React from "react";
import HomeLayout from "../../layout/HomeLayout";
import { Spin } from "antd";
const Loading = () => {
  return (
    <Spin tip="Loading" size="large">
      <HomeLayout></HomeLayout>
    </Spin>
  );
};

export default Loading;
