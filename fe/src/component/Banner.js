import React from "react";
import { Image, Col, Row } from "antd";
import Search from "./Search";
const Banner = ({ role, image }) => {
  return (
    <Col>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "var(--background-banner)",
        }}
      >
        {role === 0 ? (
          <Col
            span={16}
            className="center-flex"
            style={{
              height: "var(--height-banner)",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Col
              style={{
                backgroundColor: "var(--background-box-search)",
                padding: "20px 20px 40px 20px",
                borderRadius: "10px",
                width: "80%",
              }}
            >
              <Row className="font-banner">Chung toi doi ban o day</Row>
              <Search />
            </Col>
          </Col>
        ) : null}
        <Col span={role === 0 ? 8 : 24} className="center-flex">
          <Image
            height={"var(--height-banner)"}
            src={image}
            preview={false}
            width={"100%"}
          />
        </Col>
      </Row>
      {role === 1 && <Row>THong tin</Row>}
    </Col>
  );
};

export default Banner;
