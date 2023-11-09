import React from "react";
import { Row, Col } from "antd";

const Project = ({ data }) => {
  return (
    <Col span={18}>
      <Row
        className="title-color-main"
        style={{ borderBottom: "1px solid var(--color-main)" }}
      >
        Các dự án đã tham gia
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
                    <Row>
                      <Col className="fs-20 bold" style={{ paddingRight: 6 }}>
                        Số lượng thành viên:
                      </Col>
                      <Col className="fs-20">{item?.amount_of_member}</Col>
                    </Row>
                    <Row>
                      <Col className="fs-20 bold" style={{ paddingRight: 6 }}>
                        Thời gian bắt đầu:{" "}
                      </Col>
                      <Col className="fs-20">{item?.start}</Col>
                    </Row>
                    <Row>
                      <Col className="fs-20 bold" style={{ paddingRight: 6 }}>
                        Thời gian kết thúc:{" "}
                      </Col>
                      <Col className="fs-20">{item?.end}</Col>
                    </Row>
                    <Row style={{ paddingBottom: 23 }}>
                      <Col className="fs-20 bold" style={{ paddingRight: 6 }}>
                        Công nghệ sử dụng:{" "}
                      </Col>
                      <Col className="fs-20">{item?.technology}</Col>
                    </Row>
                    <Row>
                      <Col className="fs-20 bold" style={{ paddingRight: 6 }}>
                        Mô tả chi tiết: :{" "}
                      </Col>
                      <Col className="fs-20">{item?.description}</Col>
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

export default Project;
