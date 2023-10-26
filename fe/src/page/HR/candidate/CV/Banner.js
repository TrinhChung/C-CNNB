import React from "react";
import { Row, Col, Image } from "antd";
import TextHorizontal from "./TextHorizontal";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  StarOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";

const Banner = () => {
  const info = [
    {
      title: "Địa chỉ sống:",
      icon: <EnvironmentOutlined className="fs-20" />,
      value: "Hà Nội",
    },
    {
      title: "Email:",
      icon: <MailOutlined className="fs-20" />,
      value: "nguyenvana@gmail.com",
    },
    {
      title: "Số điện thoại::",
      icon: <PhoneOutlined className="fs-20" />,
      value: "0123456789",
    },
    {
      title: "Số năm kinh nghiệm::",
      icon: <StarOutlined className="fs-20" />,
      value: "3",
    },
    {
      title: "Mức lương mong muốn:",
      icon: <DollarCircleOutlined className="fs-20" />,
      value: "5.000.000 - 10.000.000",
    },
  ];
  return (
    <Row
      className="box-shadow-bottom background-color-main"
      style={{ borderRadius: "10px 10px 0 0" }}
    >
      <Col span={24}>
        <Row>
          <Col span={12} style={{ padding: "30px 0 30px 0" }}>
            <Row
              style={{
                alignItems: "center",
                color: "white",
                borderRight: "1px solid white",
              }}
            >
              <Col
                style={{
                  padding: "0 75px 0px 75px",
                  borderRadius: "50%",
                }}
              >
                <Image
                  src="https://th.bing.com/th/id/OIP.qdSbn0McRHkJEzYu5_cAWgHaI9?pid=ImgDet&w=100&h=100&c=7"
                  style={{ height: 216, width: 216, borderRadius: "50%" }}
                  preview={false}
                />
              </Col>
              <Col>
                <Row
                  style={{
                    fontSize: 40,
                    fontWeight: "bold",
                    paddingBottom: 24,
                  }}
                >
                  Họ và tên
                </Row>
                <Row className="fs-20" style={{ paddingBottom: 8 }}>
                  Vị trí mong muốn
                </Row>
                <Row className="fs-20" style={{ paddingBottom: 8 }}>
                  Năm sinh
                </Row>
                <Row className="fs-20" style={{ paddingBottom: 8 }}>
                  Giới tính
                </Row>
                <Row className="fs-20" style={{ paddingBottom: 8 }}>
                  Tình trạng hôn nhân
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={12} style={{ padding: "40px 120px 40px 40px" }}>
            {info.length > 0 &&
              info.map((item, key) => {
                return (
                  <Row style={{ paddingBottom: 16 }} key={key}>
                    <TextHorizontal
                      title={
                        <Row style={{ fontSize: 20 }}>
                          <Col style={{ paddingRight: 6 }}>{item.icon}</Col>
                          <Col className="fs-20">{item.title}</Col>
                        </Row>
                      }
                      value={item.value}
                    />
                  </Row>
                );
              })}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Banner;
