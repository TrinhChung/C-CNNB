import React from "react";
import { Col, Row, Image } from "antd";
import ButtonSub from "./ButtonSub";

const BannerJob = () => {
  return (
    <Row
      style={{
        height: 382,
        backgroundColor: "var(--color-job-box)",
        padding: "90px 80px",
      }}
    >
      <Col>
        <Image
          src="https://th.bing.com/th/id/OIP.BXIXu1wyoCCoO0l_JZuQPwAAAA?pid=ImgDet&w=195&h=182&c=7"
          preview={false}
          style={{ width: 200, height: 200 }}
        />
      </Col>
      <Col span={16} style={{ paddingLeft: 30 }}>
        <Row>
          <Col>
            <Row
              style={{ fontSize: 30, fontWeight: "bold", paddingBottom: 12 }}
            >
              Tên vị trí tuyển dụng
            </Row>
            <Row style={{ fontSize: 20, paddingBottom: 17 }}>Tên công ty</Row>
            <Row style={{ paddingBottom: 19 }}>
              <Col style={{ fontSize: 20 }}>Nơi làm việc: </Col>
              <Col style={{ fontSize: 20 }}>Lương: </Col>
            </Row>
            <Row
              style={{
                fontSize: 20,
                height: 41,
                width: 200,
                marginBottom: 20,
                backgroundColor: "var(--color-yellow)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
              }}
            >
              Hình thức làm việc
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Col>
      <Col span={5} style={{ justifyContent: "center" }}>
        <Row style={{ fontSize: 20, color: "var(--color-gray-job)" }}>
          Ngày đăng: dd/mm/yy
        </Row>
        <ButtonSub />
      </Col>
    </Row>
  );
};

export default BannerJob;
