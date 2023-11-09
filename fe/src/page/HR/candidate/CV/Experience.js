import React from "react";
import { Row, Col } from "antd";

const Experience = ({ data }) => {
  //   const data = [
  //     {
  //       companyName: "CÔNG TY ABC",
  //       time: "08/2022 - 08/2022",
  //       work: `Nhân viên kinh doanh
  // Phục vụ nhóm 20 khách hàng lớn đem về doanh thu 5-10 tỉ mỗi năm cho công ty.
  // Đánh giá nhu cầu khách hàng dựa trên mục tiêu công ty, cung và cầu của thị trường.
  // Phát triển mạng lưới quan hệ khách hàng với hơn 1000 dữ liệu khách hàng tiềm năng.
  // Hợp tác với bộ phận Marketing để đẩy mạnh quảng bá sản phẩm.
  // Thành tích: Vượt mục tiêu doanh số hơn 15% trong mỗi quý.`,
  //     },
  //     {
  //       companyName: "CÔNG TY BCD",
  //       time: "08/2022 - 08/2022",
  //       work: `Nhân viên kinh doanh
  // Phục vụ nhóm 20 khách hàng lớn đem về doanh thu 5-10 tỉ mỗi năm cho công ty.
  // Đánh giá nhu cầu khách hàng dựa trên mục tiêu công ty, cung và cầu của thị trường.
  // Phát triển mạng lưới quan hệ khách hàng với hơn 1000 dữ liệu khách hàng tiềm năng.
  // Hợp tác với bộ phận Marketing để đẩy mạnh quảng bá sản phẩm.
  // Thành tích: Vượt mục tiêu doanh số hơn 15% trong mỗi quý.`,
  //     },
  //   ];
  return (
    <Col span={18}>
      <Row
        className="title-color-main"
        style={{ borderBottom: "1px solid var(--color-main)" }}
      >
        Kinh nghiệm làm việc
      </Row>
      <Row style={{ minHeight: 100 }}>
        <Col span={24}>
          {data &&
            data.length > 0 &&
            data.map((item, index) => {
              return (
                <Row key={index} style={{ paddingBottom: 5, paddingTop: 15 }}>
                  <Col span={2} className="h2-color-main">
                    {index + 1}
                  </Col>
                  <Col span={22} className="fs-20">
                    <Row className="fs-20">Địa điểm: {item.place}</Row>
                    <Row>
                      <Col span={24}>
                        <Row className="fs-24 bold">Mô tả</Row>
                        <Row className="fs-20">{item.content}</Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              );
            })}
        </Col>
      </Row>
    </Col>
  );
};

export default Experience;
