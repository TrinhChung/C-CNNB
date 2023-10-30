import React from "react";
import { Row, Col, Image, Button } from "antd";
import "../layout/HomeLayout/HomeLayout.scss";
import { useNavigate } from "react-router-dom";
import { buildSalary } from "../const/BuildSalaray";
import { arrayToString } from "../const/arrayToString";
import moment from "moment";
const BoxJob = ({ data, size, key, image = "" }) => {
  const navigate = useNavigate();
  return (
    <Row
      key={key}
      className="shadow-box-job"
      style={{ marginBottom: 30, alignItems: "center" }}
    >
      <Col span={4} style={{ padding: "10px 30px" }}>
        <Image
          src={data?.company?.image ? data?.company?.image : image}
          style={{ width: size, height: size }}
          preview={false}
        />
      </Col>
      <Col span={16} gutter={[8, 8]}>
        <Row style={{ paddingBottom: 4 }}>
          <Col>
            <Row style={{ fontWeight: "bold", fontSize: 24 }}>
              {data?.title}
            </Row>
          </Col>
        </Row>
        <Row style={{ paddingBottom: 4 }}>
          <Col>
            <Row className="fs-20" style={{ paddingRight: 6 }}>
              Đăng từ
              <Row
                style={{ color: "orange", paddingRight: 10 }}
                className="fs-20"
              >
                {moment(data.update_at).format("l")}
              </Row>
              của công ty
              <Row
                style={{ color: "var(--color-main)", paddingRight: 6 }}
                className="fs-20"
              >
                {data?.company?.name}
              </Row>
            </Row>
          </Col>
        </Row>
        <Row style={{ paddingBottom: 4 }}>
          <Col style={{ fontWeight: 500, paddingRight: 10 }} className="fs-20">
            Hình thức làm việc:
          </Col>
          <Col>
            <Row style={{ fontWeight: 500 }} className="fs-20">
              {data?.types ? arrayToString(data?.types) : ""}
            </Row>
          </Col>
        </Row>
        <Row style={{ paddingBottom: 4 }}>
          <Row style={{ paddingRight: "20%" }}>
            <Col>
              <i className="fa-light fa-location-dot" />
              Địa điểm
            </Col>
            <Col style={{ paddingLeft: 4 }}>{data?.address?.name}</Col>
          </Row>
          <Row>
            <Col>
              <i className="fa-light fa-location-dot" />
              Luơng
            </Col>

            <Col style={{ paddingLeft: 4, color: "green" }}>
              {buildSalary(data.salary_min, data.salary_max)}
            </Col>
          </Row>
        </Row>
      </Col>
      <Col span={4}>
        <Button
          className="button-job"
          size="large"
          onClick={() => {
            navigate(`/job/detail/${data?.id}`);
          }}
        >
          Xem ngay
        </Button>
      </Col>
    </Row>
  );
};

export default BoxJob;
