import React from "react";
import { Row, Col } from "antd";
import "./Home.scss";
const InfoBanner = () => {
  return (
    <Row
      style={{ paddingBottom: 50, paddingTop: 32, border: "1px solid #cccccc" }}
    >
      <Col span={6} style={{ borderRight: "2px solid #cccccc" }}>
        <Row style={{ justifyContent: "center" }} className="text-banner-info">
          7K+
        </Row>
        <Row
          style={{ justifyContent: "center" }}
          className="text-banner-bottom"
        >
          Ứng viên
        </Row>
      </Col>
      <Col span={6} style={{ borderRight: "2px solid #cccccc" }}>
        <Row style={{ justifyContent: "center" }} className="text-banner-info">
          25K+
        </Row>

        <Row
          style={{ justifyContent: "center" }}
          className="text-banner-bottom"
        >
          Công ty sử dụng dịch vụ
        </Row>
      </Col>
      <Col span={6} style={{ borderRight: "2px solid #cccccc" }}>
        <Row style={{ justifyContent: "center" }} className="text-banner-info">
          3K+
        </Row>

        <Row
          style={{ justifyContent: "center" }}
          className="text-banner-bottom"
        >
          Quản trị nhân sự
        </Row>
      </Col>
      <Col span={6}>
        <Row style={{ justifyContent: "center" }} className="text-banner-info">
          1M+
        </Row>
        <Row
          style={{ justifyContent: "center" }}
          className="text-banner-bottom"
        >
          Việc làm được đăng tuyển
        </Row>
      </Col>
    </Row>
  );
};

export default InfoBanner;
