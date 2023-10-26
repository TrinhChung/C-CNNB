import React from "react";
import { Col, Row, Input, Select, DatePicker, Button, Pagination } from "antd";
import WrapInput from "./WrapInput";
import "./Work.scss";
import CardWork from "./CardWork";
const Work = () => {
  return (
    <Col
      style={{
        margin: 40,
        border: "1px solid var(--gray)",
        paddingLeft: 60,
        paddingBottom: 30,
        paddingRight: 60,
      }}
      className="box-shadow-bottom"
    >
      <Row style={{ paddingTop: 30, alignItems: "end" }}>
        <Col span={5}>
          <WrapInput title={"Từ khóa tìm kiếm"}>
            <Input style={{ width: "90%" }} />
          </WrapInput>
        </Col>
        <Col span={5}>
          <WrapInput title={"Tìm theo công ty"}>
            <Select style={{ width: "90%" }} />
          </WrapInput>
        </Col>
        <Col span={5}>
          <WrapInput title={"Ngày đăng"}>
            <DatePicker style={{ width: "90%" }} />
          </WrapInput>
        </Col>
        <Col span={5}>
          <WrapInput title={"Ngày tuyển dụng"}>
            <DatePicker style={{ width: "90%" }} />
          </WrapInput>
        </Col>
        <Col span={4}>
          <Button
            className="button-color-inner"
            style={{ width: "90%", height: 40 }}
          >
            Tìm ngay
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 40 }}>
        <Col span={24}>
          <Row
            className="background-color-main pdx40"
            style={{ paddingTop: 15, paddingBottom: 15 }}
          >
            <Col className="cell-content border-right " span={8}>
              Tiêu đề, tên công việc
            </Col>
            <Col className="cell-content border-right " span={4}>
              Số người ứng tuyển
            </Col>

            <Col className="cell-content border-right " span={4}>
              Ngày đăng tin
            </Col>
            <Col className="cell-content border-right " span={4}>
              Cập nhật lần cuối
            </Col>
            <Col className="cell-content" span={2}>
              Thao tác
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        style={{ border: "1px solid var(--color-main)", marginBottom: 40 }}
        className="pdx40"
      >
        <CardWork />
        <CardWork />
        <CardWork />
        <CardWork />
        <Row
          style={{ justifyContent: "center", paddingBottom: 60, width: "100%" }}
        >
          <Pagination defaultCurrent={1} total={50} size="large" />
        </Row>
      </Row>
    </Col>
  );
};

export default Work;
