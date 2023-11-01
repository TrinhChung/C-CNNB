import React from "react";
import { Row, Col, Timeline } from "antd";
import {
  UserOutlined,
  SnippetsOutlined,
  TrophyOutlined,
  StarOutlined,
} from "@ant-design/icons";
import "./CV.scss";
import DotElement from "./DotElement";
import Experience from "./Experience";
import Project from "./Project";
const Detail = () => {
  const items = [
    {
      dot: <></>,
      children: <Col style={{ height: 20 }}></Col>,
    },
    {
      dot: (
        <DotElement
          icon={
            <UserOutlined
              style={{ fontSize: 40, color: "var(--color-main)" }}
            />
          }
        />
      ),
      children: (
        <Col span={18}>
          <Row
            className="title-color-main"
            style={{ borderBottom: "1px solid var(--color-main)" }}
          >
            Mô tả bản thân
          </Row>
          <Row className="fs-20">
            Nhân viên bán hàng hiệu xuất cao với X năm kinh nghiệm trong lĩnh
            vực A, B, C. Kỹ năng thế mạnh bao gồm tìm kiếm khách hàng tiềm năng,
            chốt sales và giao tiếp. Trong quá khứ đã đạt thành tích vượt 15%
            KPI của năm. Hiện đang tìm kiếm cơ hội trở thành nhân viên bán hàng
            và đóng góp tăng trưởng doanh thu cho công ty X
          </Row>
        </Col>
      ),
    },
    {
      dot: (
        <DotElement
          icon={
            <SnippetsOutlined
              style={{ fontSize: 40, color: "var(--color-main)" }}
            />
          }
        />
      ),
      children: (
        <Col span={18}>
          <Row
            className="title-color-main"
            style={{ borderBottom: "1px solid var(--color-main)" }}
          >
            Mục tiêu nghề nghiệp
          </Row>
          <Row
            className="fs-20 bold"
            style={{ paddingTop: 16, paddingBottom: 12 }}
          >
            Nơi có thể làm việc:{" "}
          </Row>
          <Row className="fs-20 bold">Mong muốn bản thân về công việc: </Row>
          <Row className="fs-20">
            Nhân viên bán hàng hiệu xuất cao với X năm kinh nghiệm trong lĩnh
            vực A, B, C. Kỹ năng thế mạnh bao gồm tìm kiếm khách hàng tiềm năng,
            chốt sales và giao tiếp. Trong quá khứ đã đạt thành tích vượt 15%
            KPI của năm. Hiện đang tìm kiếm cơ hội trở thành nhân viên bán hàng
            và đóng góp tăng trưởng doanh thu cho công ty X
          </Row>
        </Col>
      ),
    },
    {
      dot: (
        <DotElement
          icon={
            <TrophyOutlined
              style={{ fontSize: 40, color: "var(--color-main)" }}
            />
          }
        />
      ),
      children: (
        <Col span={18}>
          <Row
            className="title-color-main"
            style={{ borderBottom: "1px solid var(--color-main)" }}
          >
            Chứng chỉ
          </Row>
          <Row style={{ minHeight: 100 }}></Row>
        </Col>
      ),
    },
    {
      dot: (
        <DotElement
          icon={
            <UserOutlined
              style={{ fontSize: 40, color: "var(--color-main)" }}
            />
          }
        />
      ),
      children: (
        <Col span={18}>
          <Row
            className="title-color-main"
            style={{ borderBottom: "1px solid var(--color-main)" }}
          >
            Kỹ năng
          </Row>
          <Row style={{ minHeight: 100 }}></Row>
        </Col>
      ),
    },
    {
      dot: (
        <DotElement
          icon={
            <StarOutlined
              style={{ fontSize: 40, color: "var(--color-main)" }}
            />
          }
        />
      ),
      children: <Experience />,
    },
    {
      dot: (
        <DotElement
          icon={
            <UserOutlined
              style={{ fontSize: 40, color: "var(--color-main)" }}
            />
          }
        />
      ),
      children: <Project />,
    },
    {
      dot: <></>,
      children: <Col style={{ height: 20 }}></Col>,
    },
  ];

  return (
    <Row style={{ paddingLeft: 100 }} className="custom-detail">
      <Timeline items={items} style={{ width: "100%", paddingRight: 61 }} />
    </Row>
  );
};

export default Detail;
