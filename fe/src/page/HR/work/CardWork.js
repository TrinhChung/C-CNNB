import React from "react";
import { Col, Row, Badge } from "antd";
import {
  DollarCircleOutlined,
  EnvironmentOutlined,
  LockOutlined,
  EditOutlined,
  CloseOutlined,
} from "@ant-design/icons";
const CardWork = () => {
  return (
    <Col
      span={24}
      style={{ padding: "30px 0px 30px 0px", marginBottom: 30 }}
      className="box-border-shadow"
    >
      <Row style={{ alignContent: "center" }}>
        <Col span={8} style={{ paddingLeft: 30 }}>
          <Row className="title-color-main">
            <Col style={{ fontSize: 30, paddingRight: 22 }}>
              Vị trí việc làm
            </Col>
            <Col style={{ display: "flex", alignItems: "center" }}>
              <Badge color="#f50" text="Trạng thái" style={{ color: "#f50" }} />
            </Col>
          </Row>
          <Row style={{ paddingTop: 27 }} className="color-main">
            <Col>
              <DollarCircleOutlined />
            </Col>
            <Col>Lương: 5.000.000 - 10.000.000</Col>
          </Row>
          <Row style={{ paddingTop: 9 }}>
            <Col>
              <EnvironmentOutlined />
            </Col>
            <Col>Nơi làm việc: Hà nội</Col>
          </Row>
        </Col>
        <Col span={4} className="color-main ">
          <Row style={{ justifyContent: "center" }} className="fs-16">
            20
          </Row>
          <Row
            style={{ justifyContent: "center", fontWeight: "bold" }}
            className="fs-16"
          >
            Người ứng tuyển
          </Row>
        </Col>
        <Col span={4}>
          <Row style={{ justifyContent: "center" }} className="fs-16">
            dd/mm/yy
          </Row>
        </Col>
        <Col span={4}>
          <Row style={{ justifyContent: "center" }} className="fs-16">
            dd/mm/yy
          </Row>
        </Col>
        <Col span={2}>
          <Row style={{ justifyContent: "center" }}>
            <Col span={8}>
              <LockOutlined />
            </Col>
            <Col span={8}>
              <EditOutlined />
            </Col>
            <Col span={8}>
              <CloseOutlined />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default CardWork;
