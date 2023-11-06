import React from "react";
import { Col, Row, Image } from "antd";
import ButtonSub from "./ButtonSub";
import "./Job.scss";
import { buildSalary } from "../../../../const/BuildSalaray";
import moment from "moment";
const BannerJob = ({ data = {}, apply = () => {}, save = () => {} }) => {
  return (
    <Row className="banner-job-detail">
      <Col>
        <Image
          src={data?.company?.image}
          preview={false}
          style={{ width: 200, height: 200 }}
        />
      </Col>
      <Col span={16} style={{ paddingLeft: 30 }}>
        <Row>
          <Col>
            <Row
              style={{ fontSize: 30, fontWeight: "bold", paddingBottom: 12 }}
            >
              {data.title}
            </Row>
            <Row
              style={{ fontSize: 24, fontWeight: "bold", paddingBottom: 17 }}
            >
              {data?.company?.name}
            </Row>
            <Row style={{ paddingBottom: 19 }}>
              <Col style={{ fontSize: 20 }}>
                Nơi làm việc: {data.detail_address}
              </Col>
              <Col style={{ fontSize: 20, paddingLeft: 100 }}>
                Lương: {buildSalary(data.salary_min, data.salary_max)}
              </Col>
            </Row>
            <Row>
              {data.types &&
                data.types.length > 0 &&
                data.types.map((item, index) => {
                  return (
                    <Row className="method-work" key={index}>
                      {item.content}
                    </Row>
                  );
                })}
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={5} style={{ justifyContent: "center" }}>
        <Row style={{ fontSize: 20, color: "var(--color-gray-job)" }}>
          Ngày đăng: {moment(data.updated_at).calendar()}
        </Row>
        <ButtonSub
          applied={data?.applied}
          saved={data?.saved}
          apply={apply}
          save={save}
        />
      </Col>
    </Row>
  );
};

export default BannerJob;
