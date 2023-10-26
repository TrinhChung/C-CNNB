import { Row } from "antd";
import React from "react";

const TextHorizontal = ({ title, value }) => {
  return (
    <Row
      style={{ justifyContent: "space-between", color: "white", width: "100%" }}
    >
      <Row className="fs-20">{title}</Row>
      <Row className="fs-20">{value}</Row>
    </Row>
  );
};

export default TextHorizontal;
