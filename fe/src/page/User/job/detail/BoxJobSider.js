import { Col } from "antd";
import React from "react";
import DescriptionBox from "./DescriptionBox";

const BoxJobSider = ({ title, children }) => {
  return (
    <Col
      span={24}
      style={{
        backgroundColor: "var(--color-job-box)",
        borderRadius: 20,
        marginTop: 40,
      }}
    >
      <DescriptionBox title={title}>{children}</DescriptionBox>
    </Col>
  );
};

export default BoxJobSider;
