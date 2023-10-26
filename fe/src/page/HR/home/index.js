import React from "react";
import { Col } from "antd";
import Banner from "../../../component/Banner";
import banner from "../../../assets/banner-hr-home.jpeg";
const Home = () => {
  return (
    <Col>
      <Banner role={1} image={banner} />
    </Col>
  );
};

export default Home;
