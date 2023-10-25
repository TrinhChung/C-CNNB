import React from "react";
import { Col, Row } from "antd";
import "./Profile.scss";
const CV = () => {
  return (
    <Col
      style={{
        padding: 20,
        backgroundColor: "var(--background-box-search)",
      }}
    >
      <Row className="box-cv">
        <Col>
          <Row className="box-title">Profile</Row>
        </Col>
      </Row>
      CV
    </Col>
  );
};

export default CV;
