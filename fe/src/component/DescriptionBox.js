import React from "react";
import { Col, Row } from "antd";

const DescriptionBox = ({ name, des, paddingLeft = 50 }) => {
  return (
    <Col
      style={{
        padding: `50px 50px 50px ${paddingLeft}px`,
        paddingLeft: paddingLeft,
      }}
    >
      <Row style={{ fontSize: 30, paddingBottom: 18, fontWeight: "bold" }}>
        {name}
      </Row>
      <Row>
        <div className="text-description">{des}</div>
      </Row>
    </Col>
  );
};

export default DescriptionBox;
