import React from "react";
import { Row, Col, Image, Button } from "antd";
import "../layout/HomeLayout/HomeLayout.scss";
const BoxJob = ({ data, size }) => {
  return (
    <Row
      className="shadow-box-job"
      style={{ marginBottom: 20, alignItems: "center" }}
    >
      <Col span={4} style={{ padding: "10px 30px" }}>
        <Image
          src={data.image}
          style={{ width: size, height: size }}
          preview={false}
        />
      </Col>
      <Col span={16} gutter={[8, 8]}>
        <Row style={{ paddingBottom: 4 }}>
          <Col>
            <Row style={{ color: "var(--color-main)", fontWeight: 500 }}>
              Chế độ làm việc
            </Row>
            <Row>{data.mode}</Row>
          </Col>
        </Row>
        <Row style={{ paddingBottom: 4 }}>
          <Col>
            <Row style={{ fontWeight: "bold", fontSize: 16 }}>
              Vị trí tuyển dụng
            </Row>
            <Row>{data.position}</Row>
          </Col>
        </Row>
        <Row style={{ paddingBottom: 4 }}>
          <Col>
            <Row>
              Đăng từ <Row style={{ color: "orange" }}> {" " + data.time}</Row>
              của công ty {"  "}
              <Row style={{ color: "var(--color-main)" }}>
                {" " + data.company}
              </Row>
            </Row>
          </Col>
        </Row>
        <Row style={{ paddingBottom: 4 }}>
          <Row style={{ paddingRight: "20%" }}>
            <Col>
              <i class="fa-light fa-location-dot" />
              Địa điểm
            </Col>
            <Col style={{ paddingLeft: 4 }}>{data.location}</Col>
          </Row>
          <Row>
            <Col>
              <i class="fa-light fa-location-dot" />
              Luơng
            </Col>
            <Col style={{ paddingLeft: 4 }}>{data.location}</Col>~
            <Col style={{ paddingLeft: 4 }}>{data.location}</Col>
          </Row>
        </Row>
      </Col>
      <Col span={4}>
        <Button className="button-job" size="large">
          Xem ngay
        </Button>
      </Col>
    </Row>
  );
};

export default BoxJob;
