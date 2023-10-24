import React from "react";
import Banner from "../../../component/Banner";
import { Row, Col } from "antd";
import WrapBox from "../../../layout/HomeLayout/WrapBox";
const Home = () => {
  return (
    <Col>
      <Banner role={0} />
      <WrapBox title={"Tin tuyển dụng, việc làm tốt nhất"} />
    </Col>
  );
};

export default Home;
