import React from "react";
import { Col, Row, Image } from "antd";
import Banner from "../../../component/home/Banner";
import imageBanner from "../../../assets/banner-company.jpeg";
import imageBanner2 from "../../../assets/banner-company-2.jpeg";

import TitleViewAll from "../../../component/TitleViewAll";
import CardUser from "../../../component/Card/CardUser";
import WrapBox from "../../../layout/HomeLayout/WrapBox";

const Home = () => {
  const title = {
    title1: "Số công việc đang phụ trách:",
    title2: "Số năm kinh nghiệm",
  };
  const data = [
    {
      name: "Truong Tam Phong",
      position: "leader",
      value1: 3,
      value2: 5,
      id: 1,
    },
    {
      name: "Truong Tam Phong",
      position: "leader",
      jobsCharge: 3,
      value1: 5,
      value2: 1,
      id: 2,
    },
    {
      name: "Truong Tam Phong",
      position: "leader",
      jobsCharge: 3,
      value1: 5,
      value2: 1,
      id: 3,
    },
  ];
  return (
    <Col style={{ backgroundColor: "white" }}>
      <Banner role={2} image={imageBanner} />
      <Col
        style={{
          padding: "40px 200px 25px 200px",
          backgroundColor: "var(--color-smoke)",
        }}
      >
        <TitleViewAll title={"Quản lý nhân sự"} />
        <Row
          style={{
            justifyContent: "space-around",
            padding: "0 0px 65px 0px",
          }}
        >
          {data &&
            data.length > 0 &&
            data.map((item, i) => {
              return <CardUser title={title} data={item} />;
            })}
        </Row>
        <Col span={24} style={{ paddingTop: 50 }}>
          <WrapBox title={"Tin tuyển dụng của công ty"} isPagination={true} />
        </Col>
      </Col>
      <Image src={imageBanner2} preview={false} width={"100%"} />
    </Col>
  );
};

export default Home;
