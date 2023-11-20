import React from "react";
import { Row, Col, Image } from "antd";
import imageLogin from "../../assets/image-login.jpeg";
import logoLogin from "../../assets/logo1.svg";

import { useNavigate } from "react-router-dom";

const WaitVerifyMail = () => {
  const navigate = useNavigate();
  return (
    <Row className="auth-container">
      <Col className={"wrap-box"}>
        <Row style={{ paddingBottom: 20 }}>
          <Image height={80} preview={false} src={logoLogin} />
        </Row>
        <Row>
          <Col span={12} style={{ paddingRight: 40 }}>
            <Row>
              <Col span={24}>Mail wait</Col>
            </Row>
            <Row></Row>
            <Row style={{ paddingTop: 40 }}>
              <Col>
                <Row className="fs-20">Bạn đã xác thực?</Row>
                <Row
                  style={{ cursor: "pointer", color: "var(--color-main)" }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Đăng nhập tại đây
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Image src={imageLogin} preview={false} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default WaitVerifyMail;
