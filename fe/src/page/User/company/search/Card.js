import { Row, Image, Col } from "antd";
import React from "react";
import "../Company.scss";
import { useNavigate } from "react-router-dom";
import {
  GlobalOutlined,
  EnvironmentOutlined,
  MailOutlined,
} from "@ant-design/icons";
const Card = ({
  name = "Địa chỉ công ty",
  address = "Đại học Quốc Gia Hà Nội",
  email,
  link,
  total,
  key,
  image = "https://th.bing.com/th/id/OIP.wbmSfjRC-sAo0uGpIRYn9gHaFi?w=226&h=180&c=7&r=0&o=5&pid=1.7",
  banner = false,
  id,
}) => {
  const navigate = useNavigate();

  return (
    <Row
      key={key}
      style={{
        width: "100%",
        borderRadius: 10,
        marginBottom: 20,
        padding: `${banner ? "50px 0" : ""}`,
        backgroundColor: `${banner ? "var(--background-box-search)" : "white"}`,
      }}
      className={banner === false ? `babox-shadow-bottom` : ""}
    >
      <Col style={{ padding: "18px 33px 18px 120px", cursor: "pointer" }}>
        <Image
          style={{ width: 215, height: 215 }}
          preview={false}
          src={image}
        />
      </Col>
      <Col span={12}>
        <Row
          style={{
            paddingBottom: 15,
            paddingTop: 45,
            fontWeight: "bold",
            fontSize: 30,
          }}
          className="text-name-click"
          onClick={() => {
            navigate(`/company/detail/${id}`);
          }}
        >
          {name}
        </Row>
        <Row style={{ paddingBottom: 10 }}>
          <Col style={{ fontSize: 24, paddingRight: 10 }}>
            <EnvironmentOutlined style={{ paddingRight: 10 }} />
            Địa chỉ:{" "}
          </Col>
          <Col style={{ fontSize: 24 }}>{address}</Col>
        </Row>
        <Row style={{ paddingBottom: 30 }}>
          <Col style={{ fontSize: 24, paddingRight: 10 }}>
            <MailOutlined style={{ paddingRight: 10 }} />
            Email:{" "}
          </Col>
          <Col style={{ fontSize: 24 }}>{email}</Col>
        </Row>
        <Row style={{ paddingTop: 22, fontSize: 16 }}>
          <a target="_blank" href={link}>
            <GlobalOutlined style={{ paddingRight: 10 }} />
            Địa chỉ web của công ty
          </a>
        </Row>
      </Col>
      <Col
        span={4}
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Row
          style={{
            height: 60,
            backgroundColor: "var(--color-yellow)",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
            borderRadius: 20,
            fontWeight: "bold",
          }}
        >
          <Row style={{ paddingRight: 5 }}>Tổng số Job hiện có:</Row>
          <Row>{total}</Row>
        </Row>
      </Col>
    </Row>
  );
};

export default Card;
