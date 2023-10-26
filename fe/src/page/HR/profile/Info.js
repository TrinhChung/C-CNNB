import { Col, Row, Input, Button } from "antd";
import React from "react";
import UploadImage from "../../../component/Card/UploadImage";
import RowVertical from "../../../component/RowVertical";
import "./Profile.scss";
const Info = () => {
  return (
    <Col
      style={{
        margin: 40,
        borderRadius: 10,
        border: "1px solid var(--color-main)",
        paddingLeft: 60,
        paddingBottom: 150,
      }}
    >
      <Row className="title-color-main" style={{ padding: "30px 0" }}>
        Thông tin tài khoản
      </Row>
      <Row>
        <Col span={8}>
          <UploadImage />
        </Col>
        <Col span={16}>
          <Col span={24} style={{ paddingLeft: 40, paddingBottom: 120 }}>
            <RowVertical title="Họ và tên" paddingBottom={30}>
              <Col span={16} className="custom">
                <Input />
              </Col>
            </RowVertical>
            <RowVertical title="Giới tính" paddingBottom={30}>
              <Col span={16} className="custom">
                <Input />
              </Col>
            </RowVertical>
            <RowVertical title="Email" paddingBottom={30}>
              <Col span={16} className="custom">
                <Input />
              </Col>
            </RowVertical>
            <RowVertical title="Số điện thoại" paddingBottom={30}>
              <Col span={16} className="custom">
                <Input />
              </Col>
            </RowVertical>
            <RowVertical title="Chức vụ" paddingBottom={30}>
              <Col span={16} className="custom">
                <Input />
              </Col>
            </RowVertical>
          </Col>
          <Row>
            <Button className="button-job" size="large">
              Cập nhât
            </Button>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default Info;
