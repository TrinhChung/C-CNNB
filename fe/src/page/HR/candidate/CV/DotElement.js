import React from "react";
import { Row, Col, Badge } from "antd";

const DotElement = ({ icon }) => {
  return (
    <Row style={{ alignItems: "center" }}>
      <Col
        style={{ height: 1, width: 25, position: "relative" }}
        className="background-color-main"
      ></Col>
      <Col
        style={{
          position: "absolute",
          left: -40,
        }}
      >
        {icon}
      </Col>
      <Col>
        <Badge color={"var(--color-main)"} />
      </Col>
    </Row>
  );
};

export default DotElement;
