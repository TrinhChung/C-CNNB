import { Row, Image, Col } from "antd";
import React from "react";

const HRInfo = () => {
  const RowHorizontal = ({ title, des }) => {
    return (
      <Row
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <Col style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Col>
        <Col style={{ fontSize: 20 }}>{des}</Col>
      </Row>
    );
  };
  return (
    <Col span={24}>
      <Row style={{ paddingBottom: 40 }}>
        <Col>
          <Image
            src="https://th.bing.com/th/id/OIP.6hFKGbbvl63hqvVdWY7_pwHaFN?w=240&h=180&c=7&r=0&o=5&pid=1.7"
            style={{ height: 100, width: 100 }}
          />
        </Col>
        <Col style={{ paddingLeft: 13 }}>
          <Row style={{ fontSize: 24, fontWeight: "bold", paddingBottom: 10 }}>
            Họ và tên quản lý
          </Row>
          <Row>Tên công ty</Row>
        </Col>
      </Row>
      <RowHorizontal title={"Ngày tháng năm sinh: "} des="dd/mm/yy" />
      <RowHorizontal title={"Giới tính: : "} des="Nam" />
      <RowHorizontal title={"Số điện thoại: "} des="dd/mm/yy" />
      <RowHorizontal title={"Email: "} des="abc@gmail.com" />
    </Col>
  );
};

export default HRInfo;
