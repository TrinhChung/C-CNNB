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
import { arrayToPlaces } from "../../../../const/arrayToString";
const Detail = ({ data }) => {
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
          <Row className="fs-20">{data?.description}</Row>
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
            {data?.workable_places
              ? arrayToPlaces(data.workable_places)
              : "Khong co"}
          </Row>
          <Row className="fs-20 bold">Mong muốn bản thân về công việc: </Row>
          <Row className="fs-20">{data?.desire}</Row>
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
            Kỹ năng
          </Row>
          <Row style={{ gap: 10, paddingTop: 20, paddingBottom: 20 }}>
            {data?.skills &&
              data?.skills.length &&
              data.skills.map((item, index) => {
                return (
                  <Col className="box-skill" key={index}>
                    {item.content}
                  </Col>
                );
              })}
          </Row>
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
      children: <Experience data={data?.exp_detail} />,
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
      children: <Project data={data?.projects} />,
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
