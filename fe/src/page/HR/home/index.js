import React from "react";
import { Col, Row } from "antd";
import Banner from "../../../component/Banner";
import banner from "../../../assets/banner-hr-home.jpeg";
import TitleViewAll from "../../../component/TitleViewAll";
import CardUser from "../../../component/Card/CardUser";
import CardIcon from "../../../component/Card/CardIcon";
import { FileOutlined } from "@ant-design/icons";
import "./Home.scss";
const Home = () => {
  return (
    <Col style={{ backgroundColor: "white" }}>
      <Banner role={1} image={banner} />
      <Col
        style={{
          padding: "40px 200px 25px 200px",
          backgroundColor: "var(--color-smoke)",
        }}
      >
        <TitleViewAll title={"Ứng viên tân binh"} />
        <Row
          style={{
            justifyContent: "space-around",
            padding: "0 0px 65px 0px",
          }}
        >
          <CardUser />
          <CardUser />
          <CardUser />
        </Row>
      </Col>
      <Row>
        <Col span={24}>
          <Row
            style={{
              paddingTop: 56,
              paddingBottom: 24,
              justifyContent: "center",
            }}
            className="title-color-main"
          >
            Hiệu quả tuyển dụng
          </Row>
          <Row
            style={{
              justifyContent: "space-around",
              padding: "0 100px 65px 100px",
            }}
          >
            <Col className="card">
              <CardIcon
                row={false}
                icon={
                  <FileOutlined
                    style={{
                      fontSize: 80,
                      color: "var(--color-main)",
                      paddingBottom: 19,
                    }}
                  />
                }
                title={"Số tin đã ứng tuyển"}
              />
            </Col>
            <Col className="card">
              <CardIcon
                row={false}
                icon={
                  <FileOutlined
                    style={{
                      fontSize: 80,
                      color: "var(--color-main)",
                      paddingBottom: 19,
                    }}
                  />
                }
                title={"Số tin đã ứng tuyển"}
              />
            </Col>
            <Col className="card">
              <CardIcon
                row={false}
                icon={
                  <FileOutlined
                    style={{
                      fontSize: 80,
                      color: "var(--color-main)",
                      paddingBottom: 19,
                    }}
                  />
                }
                title={"Số tin đã ứng tuyển"}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default Home;
