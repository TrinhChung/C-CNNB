import React from "react";
import { Row, Col } from "antd";
import Slider from "react-slick";
import TopJobBox from "../../../component/TopJobBox";
import "../../../layout/HomeLayout/HomeLayout.scss";
const TopJob = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    pauseHover: false,
  };

  const dataJobTop = [
    { name: "Tên ngành nghề", number: "số việc làm" },
    { name: "Tên ngành nghề", number: "số việc làm" },
    { name: "Tên ngành nghề", number: "số việc làm" },
    { name: "Tên ngành nghề", number: "số việc làm" },
    { name: "Tên ngành nghề", number: "số việc làm" },
    { name: "Tên ngành nghề", number: "số việc làm" },
    { name: "Tên ngành nghề", number: "số việc làm" },
    { name: "Tên ngành nghề", number: "số việc làm" },
    { name: "Tên ngành nghề", number: "số việc làm" },
  ];

  return (
    <Col span={24} style={{ padding: "30px 122px", backgroundColor: "white" }}>
      <Row className="center-flex font-text-28">Top ngành nghề nổi bật</Row>
      <Row style={{ justifyContent: "center", paddingTop: 30 }}>
        <Col>
          <Slider {...settings}>
            {dataJobTop.map((item, index) => {
              return (
                <TopJobBox key={index} name={item.name} number={item.number} />
              );
            })}
          </Slider>
        </Col>
      </Row>
    </Col>
  );
};

export default TopJob;
