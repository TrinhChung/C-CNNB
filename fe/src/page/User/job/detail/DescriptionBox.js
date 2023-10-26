import { Col, Row } from "antd";
import React from "react";

const DescriptionBox = ({ title, children }) => {
  return (
    <Col style={{ padding: 33, paddingBottom: 47 }}>
      <Row style={{ fontSize: 30, paddingBottom: 18, fontWeight: "bold" }}>
        {title}
      </Row>
      <Row>{children}</Row>
    </Col>
  );
};

export default DescriptionBox;
