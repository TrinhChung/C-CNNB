import React from "react";
import { Col, Row, Input, Select, Button } from "antd";
import UploadImage from "../../../component/Card/UploadImage";
import RowVertical from "../../../component/RowVertical";
import "./Profile.scss";
const { TextArea } = Input;
const Company = () => {
  return (
    <Col
      style={{
        margin: 40,
        borderRadius: 10,
        border: "1px solid var(--color-main)",
        paddingLeft: 60,
        paddingBottom: 150,
        paddingRight: 60,
      }}
    >
      <Row className="title-color-main" style={{ padding: "30px 0" }}>
        Thông tin công ty
      </Row>
      <Row>
        <Col span={8}>
          <UploadImage image="https://th.bing.com/th/id/OIP.bSb43NL2Y-B-UoeRS7JHsAAAAA?pid=ImgDet&w=195&h=194&c=7" />
        </Col>
        <Col span={16}>
          <Col span={24} style={{ paddingLeft: 40, paddingBottom: 120 }}>
            <RowVertical title="Họ và tên" paddingBottom={20}>
              <Col span={16} className="custom">
                <Input />
              </Col>
            </RowVertical>
            <RowVertical title="Trang web của công ty" paddingBottom={20}>
              <Col span={16} className="custom">
                <Input />
              </Col>
            </RowVertical>
            <RowVertical title="Mã số thuế" paddingBottom={20}>
              <Col span={16} className="custom">
                <Input />
              </Col>
            </RowVertical>
            <RowVertical title="Địa chỉ công ty" paddingBottom={20}>
              <Col span={16} className="custom">
                <Select style={{ width: "100%", marginTop: 10 }} />
              </Col>
            </RowVertical>
          </Col>
        </Col>
      </Row>
      <RowVertical title={"Địa chỉ chi tiết"}>
        <Row className="text-area" style={{ width: "100%" }}>
          <TextArea
            showCount
            maxLength={100}
            style={{
              marginBottom: 24,
              width: "100%",
            }}
            placeholder="can resize"
          />
        </Row>
      </RowVertical>
      <RowVertical title={"Mô tả công ty "}>
        <Row className="text-area" style={{ width: "100%" }}>
          <TextArea
            showCount
            maxLength={100}
            style={{
              marginBottom: 24,
              width: "100%",
            }}
            placeholder="can resize"
          />
        </Row>
      </RowVertical>
      <RowVertical title={"Chế độ đãi ngộ "}>
        <Row className="text-area" style={{ width: "100%" }}>
          <TextArea
            showCount
            maxLength={100}
            style={{
              marginBottom: 24,
              width: "100%",
            }}
            placeholder="can resize"
          />
        </Row>
      </RowVertical>
      <Row>
        <Button className="button-job" size="large">
          Cập nhât
        </Button>
      </Row>
    </Col>
  );
};

export default Company;
