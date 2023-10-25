import React from "react";
import { Layout } from "antd";
import SiderCustom from "../../component/SiderCustom";
const { Content } = Layout;

const SiderLayout = ({ menuProps = {}, children }) => {
  return (
    <Layout>
      <SiderCustom menuProps={menuProps} />
      <Content>{children}</Content>
    </Layout>
  );
};

export default SiderLayout;
