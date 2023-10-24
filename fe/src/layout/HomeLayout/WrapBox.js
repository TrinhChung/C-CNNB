import React from "react";
import { Col, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import BoxJob from "../../component/BoxJob";
const WrapBox = ({ title }) => {
  const data = [
    {
      image:
        "https://th.bing.com/th/id/R.e55418c5ec274f37932558763ddb3d4f?rik=MhY6a2fpVgpSRg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_70436.png&ehk=LSrpl7zuY4YLQgF88WlWhT%2bMx5alpNluLMpPvmswtDQ%3d&risl=&pid=ImgRaw&r=0",
      mode: "string",
      position: "string",
      time: "string",
      company: "string",
      location: "string",
      maxCost: "string",
      minCost: "string",
    },
    {
      image:
        "https://th.bing.com/th/id/R.e55418c5ec274f37932558763ddb3d4f?rik=MhY6a2fpVgpSRg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_70436.png&ehk=LSrpl7zuY4YLQgF88WlWhT%2bMx5alpNluLMpPvmswtDQ%3d&risl=&pid=ImgRaw&r=0",
      mode: "string",
      position: "string",
      time: "string",
      company: "string",
      location: "string",
      maxCost: "string",
      minCost: "string",
    },
    {
      image:
        "https://th.bing.com/th/id/R.e55418c5ec274f37932558763ddb3d4f?rik=MhY6a2fpVgpSRg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_70436.png&ehk=LSrpl7zuY4YLQgF88WlWhT%2bMx5alpNluLMpPvmswtDQ%3d&risl=&pid=ImgRaw&r=0",
      mode: "string",
      position: "string",
      time: "string",
      company: "string",
      location: "string",
      maxCost: "string",
      minCost: "string",
    },
    {
      image:
        "https://th.bing.com/th/id/R.e55418c5ec274f37932558763ddb3d4f?rik=MhY6a2fpVgpSRg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_70436.png&ehk=LSrpl7zuY4YLQgF88WlWhT%2bMx5alpNluLMpPvmswtDQ%3d&risl=&pid=ImgRaw&r=0",
      mode: "string",
      position: "string",
      time: "string",
      company: "string",
      location: "string",
      maxCost: "string",
      minCost: "string",
    },
    {
      image:
        "https://th.bing.com/th/id/R.e55418c5ec274f37932558763ddb3d4f?rik=MhY6a2fpVgpSRg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_70436.png&ehk=LSrpl7zuY4YLQgF88WlWhT%2bMx5alpNluLMpPvmswtDQ%3d&risl=&pid=ImgRaw&r=0",
      mode: "string",
      position: "string",
      time: "string",
      company: "string",
      location: "string",
      maxCost: "string",
      minCost: "string",
    },
  ];
  return (
    <Col className="padding-home">
      <Row
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 38,
        }}
      >
        <Col className="font-text-28">{title}</Col>
        <Col style={{ cursor: "pointer" }} className="font-text-28 ">
          Xem tat ca <ArrowRightOutlined />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          {data &&
            data.length > 0 &&
            data.map((item, index) => {
              return <BoxJob data={item} size={140} />;
            })}
        </Col>
      </Row>
    </Col>
  );
};

export default WrapBox;
