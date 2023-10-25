import React from "react";
import { Row, Col } from "antd";
import { AuditOutlined } from "@ant-design/icons";
const TopJobBox = ({ name, number }) => {
  return (
    <Row
      style={{
        backgroundColor: "var(--background-box-search)",
        padding: 20,
        width: 347,
        height: 114,
      }}
    >
      <Col>
        <AuditOutlined style={{ fontSize: 67, color: "var(--color-main)" }} />
      </Col>
      <Col style={{ paddingLeft: 26 }}>
        <Row className="font-text-20 bold">{name}</Row>
        <Row style={{ paddingTop: 6 }}>{number}</Row>
      </Col>
    </Row>
  );
};

export default TopJobBox;
