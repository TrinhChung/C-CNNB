import React from "react";
import { Col, Row, Input, Button } from "antd";
import UploadImage from "../../../component/Card/UploadImage";
import RowVertical from "../../../component/RowVertical";
import FormItemVertical from "../../../component/Form/FormItemVertical";

const FormInfoHr = () => {
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
            <FormItemVertical label={"Họ và tên"} name={"fullname"}>
              <Col span={16} className="custom">
                <Input />
              </Col>
            </FormItemVertical>
            <FormItemVertical label="Giới tính" name={"gender"}>
              <Col span={16} className="custom">
                <Input />
              </Col>
            </FormItemVertical>
            <FormItemVertical label="Email" name={"email"}>
              <Col span={16} className="custom">
                <Input />
              </Col>
            </FormItemVertical>
            <FormItemVertical label="Số điện thoại" name={"phone"}>
              <Col span={16} className="custom">
                <Input />
              </Col>
            </FormItemVertical>
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

export default FormInfoHr;
