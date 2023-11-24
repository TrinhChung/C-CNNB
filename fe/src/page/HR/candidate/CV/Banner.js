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
import { taskCategories } from "../../../../const/arrayToString";

const Banner = ({ data = {} }) => {
  return (
    <Row
      className="box-shadow-bottom background-color-main"
      style={{ borderRadius: "10px 10px 0 0" }}
    >
      <Col span={24}>
        <Row style={{ alignItems: "center" }}>
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
                  src={
                    data?.applier?.image
                      ? data.applier.image
                      : "https://th.bing.com/th/id/OIP.qdSbn0McRHkJEzYu5_cAWgHaI9?pid=ImgDet&w=100&h=100&c=7"
                  }
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
                  {data?.fullname}
                </Row>
                <Row className="fs-20" style={{ paddingBottom: 8 }}>
                  Vị trí mong muốn:{" "}
                  {data?.appliedTasks
                    ? taskCategories(data?.appliedTasks)
                    : "Khong co"}
                </Row>
                <Row className="fs-20" style={{ paddingBottom: 8 }}>
                  Năm sinh: {data?.birth_year}
                </Row>
                <Row className="fs-20" style={{ paddingBottom: 8 }}>
                  Giới tính:{" "}
                  {data?.gender
                    ? data.gender === "1"
                      ? "Nam"
                      : "Nữ"
                    : "Không xác định"}
                </Row>
              </Col>
            </Row>
          </Col>
          <Col
            span={12}
            style={{
              padding: "40px 120px 40px 40px",
            }}
          >
            <Row style={{ paddingBottom: 16 }}>
              <TextHorizontal
                title={
                  <Row style={{ fontSize: 20 }}>
                    <Col style={{ paddingRight: 6 }}>
                      <EnvironmentOutlined className="fs-20" />
                    </Col>
                    <Col className="fs-20">Nơi sống</Col>
                  </Row>
                }
                value={data?.address?.name}
              />
            </Row>
            <Row style={{ paddingBottom: 16 }}>
              <TextHorizontal
                title={
                  <Row style={{ fontSize: 20 }}>
                    <Col style={{ paddingRight: 6 }}>
                      <MailOutlined className="fs-20" />,
                    </Col>
                    <Col className="fs-20">Email</Col>
                  </Row>
                }
                value={data?.email}
              />
            </Row>
            <Row style={{ paddingBottom: 16 }}>
              <TextHorizontal
                title={
                  <Row style={{ fontSize: 20 }}>
                    <Col style={{ paddingRight: 6 }}>
                      <StarOutlined className="fs-20" />,
                    </Col>
                    <Col className="fs-20">Kinh nghiệm</Col>
                  </Row>
                }
                value={data?.exp_year?.content}
              />
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Banner;
