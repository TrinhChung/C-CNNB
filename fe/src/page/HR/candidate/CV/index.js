import React from "react";
import { Button, Col, Row } from "antd";
import Banner from "./Banner";
import Detail from "./Detail";
const CV = () => {
  return (
    <Col
      style={{
        backgroundColor: "white",
        padding: "30px 60px 40px 60px",
      }}
    >
      <Row>
        <Col
          span={24}
          style={{
            border: "1px solid var(--color-gray-card-user)",
            borderRadius: 10,
          }}
          className="box-shadow-bottom"
        >
          <Banner />
          <Detail />
        </Col>
      </Row>
      <Row
        style={{ marginTop: 70, justifyContent: "center", marginBottom: 70 }}
      >
        <Row style={{ width: "50%", justifyContent: "space-around" }}>
          <Col span={10}>
            <Button
              className="button-job"
              style={{ width: "100%", height: 60 }}
            >
              Chấp nhận hồ sơ
            </Button>
          </Col>
          <Col span={10}>
            <Button
              className="button-color-inner"
              style={{ width: "100%", height: 60 }}
            >
              Loại hồ sơ
            </Button>
          </Col>
        </Row>
      </Row>
    </Col>
  );
};

export default CV;
