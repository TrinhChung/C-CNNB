import React from "react";
import { Col, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import BoxJob from "../../component/BoxJob";
const WrapBox = ({ title }) => {
  const data = [
    {
      image:
        "https://th.bing.com/th?id=OIP.0NrOm1z0xVQQy20AAc1VHQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
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
        "https://th.bing.com/th?id=OIP.0NrOm1z0xVQQy20AAc1VHQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
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
        "https://th.bing.com/th?id=OIP.0NrOm1z0xVQQy20AAc1VHQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
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
        "https://th.bing.com/th?id=OIP.0NrOm1z0xVQQy20AAc1VHQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
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
