import React from "react";
import { Col, Row, Pagination } from "antd";
import BoxJob from "../../component/BoxJob";
import TitleViewAll from "../../component/TitleViewAll";

const WrapBox = ({ title, isShowAll = true, isPagination = false }) => {
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
    <Col style={{ padding: "40px 10% 40px 10%" }}>
      <TitleViewAll
        title={"Tin tuyển dụng, việc làm tốt nhất"}
        isShowAll={isShowAll}
      />
      <Row>
        <Col span={24}>
          {data &&
            data.length > 0 &&
            data.map((item, index) => {
              return <BoxJob data={item} size={140} key={index} />;
            })}
        </Col>
      </Row>
      {isPagination && (
        <Row style={{ justifyContent: "center" }}>
          <Pagination defaultCurrent={1} total={50} />
        </Row>
      )}
    </Col>
  );
};

export default WrapBox;
