import React from "react";
import { Row, Col, Image, Button } from "antd";
const CardUser = () => {
  return (
    <Col
      style={{
        border: "1px solid var(--background-banner)",
        width: 380,
        height: 540,
        backgroundColor: "white",
      }}
      className="box-shadow-bottom"
    >
      <Row style={{ justifyContent: "center" }}>
        <Col>
          <Row style={{ paddingTop: 55, paddingBottom: 50 }}>
            <Image
              src={
                "https://th.bing.com/th/id/OIP.8roqmbD6Awp7MUp68cuqDQAAAA?pid=ImgDet&w=100&h=100&c=7"
              }
              preview={false}
              style={{
                width: 130,
                height: 130,
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
          </Row>
          <Row
            style={{
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: 18,
              paddingBottom: 8,
            }}
          >
            Name
          </Row>
          <Row
            style={{
              justifyContent: "center",
              fontSize: 16,
              paddingBottom: 24,
            }}
          >
            Position
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          justifyContent: "space-between",
          padding: "38px 32px",
          backgroundColor: "var(--color-gray-card-user)",
          color: "var(--color-gray-job)",
        }}
      >
        <Row style={{ justifyContent: "center" }}>Title1</Row>
        <Row style={{ justifyContent: "center" }}>Value1</Row>
      </Row>
      <Row
        style={{
          justifyContent: "space-between",
          padding: "20px 32px",
          color: "var(--color-gray-job)",
        }}
      >
        <Row style={{ justifyContent: "center" }}>title2</Row>
        <Row style={{ justifyContent: "center" }}>Value2</Row>
      </Row>
      <Row style={{ padding: "0 32px 16px 32px" }}>
        <Button
          style={{ width: "100%", height: "55px" }}
          className="button-job"
          size="large"
        >
          Xem hồ sơ
        </Button>
      </Row>
    </Col>
  );
};

export default CardUser;
