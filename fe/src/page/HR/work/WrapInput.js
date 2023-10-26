import { Col, Row } from "antd";
import React from "react";

const WrapInput = ({ title, children }) => {
  return (
    <Col>
      <Row className="h2-color-main">{title}</Row>
      <Row>{children}</Row>
    </Col>
  );
};

export default WrapInput;
