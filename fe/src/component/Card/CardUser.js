import React from "react";
import { Row, Col, Image, Button } from "antd";
const CardUser = ({ title, data, redirect = () => {} }) => {
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
          <Row
            style={{
              paddingTop: 55,
              paddingBottom: 50,
              justifyContent: "center",
            }}
          >
            <Image
              src={data?.image}
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
            {data?.fullname}
          </Row>
          <Row
            style={{
              justifyContent: "center",
              fontSize: 16,
              paddingBottom: 24,
            }}
          >
            {title?.title1?.title} {data[title?.title1?.value]}
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
        <Row style={{ justifyContent: "center" }}>{title?.title2?.title}</Row>
        <Row style={{ justifyContent: "center" }}>
          {data[title?.title2?.value]}
        </Row>
      </Row>
      <Row
        style={{
          justifyContent: "space-between",
          padding: "20px 32px",
          color: "var(--color-gray-job)",
        }}
      >
        <Row style={{ justifyContent: "center" }}>{title?.title3?.title}</Row>
        <Row style={{ justifyContent: "center" }}>
          {data[title?.title3?.value]}
        </Row>
      </Row>
      <Row style={{ padding: "0 32px 16px 32px" }}>
        <Button
          style={{ width: "100%", height: "55px" }}
          className="button-job"
          size="large"
          onClick={() => {
            redirect(data.id);
          }}
        >
          Xem hồ sơ
        </Button>
      </Row>
    </Col>
  );
};

export default CardUser;
