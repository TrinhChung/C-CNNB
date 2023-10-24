import React from "react";
import { Image, Col, Row } from "antd";
import Search from "./Search";
const Banner = ({ role }) => {
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
            src="https://th.bing.com/th/id/R.1c441b4605dc3fe87a01740c9c8d6ae4?rik=DUQoPEyqXdm%2fvA&riu=http%3a%2f%2finap.gouvernement.lu%2fdam-assets%2fimages%2fjobs.png%2f_jcr_content%2frenditions%2fthumb-mdpi.png&ehk=%2fNHsz89eih6i4eP1M6pIN218mvC1%2f%2bgM9alMHzt5GoA%3d&risl=&pid=ImgRaw&r=0"
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
