import React from "react";
import { Col, Row } from "antd";
const Card = ({ icon, title, des }) => {
  return (
    <Row style={{ paddingTop: 20, paddingBottom: 20 }}>
      <Col
        style={{ fontSize: 30, color: "var(--color-main)", paddingRight: 30 }}
      >
        {icon}
      </Col>
      <Col>
        <Row style={{ fontSize: 20 }}>{title}</Row>
        <Row style={{ fontSize: 20, color: "var(--color-gray-job)" }}>
          {des}
        </Row>
      </Col>
    </Row>
  );
};

export default Card;
