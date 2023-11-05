import React, { useState } from "react";
import { Col, Row, Input, Button, Radio } from "antd";
import UploadImage from "../../../component/Card/UploadImage";
import FormItemVertical from "../../../component/Form/FormItemVertical";
import { EditOutlined } from "@ant-design/icons";

const FormInfoHr = ({ onSubmit }) => {
  const [edit, setEdit] = useState(false);

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
      <Row
        style={{
          padding: "30px 0",
          paddingRight: 30,
          justifyContent: "space-between",
        }}
      >
        <Col className="title-color-main">Thông tin tài khoản</Col>
        <Col>
          <Button
            className="button-job"
            size="large"
            onClick={() => {
              setEdit(true);
            }}
          >
            <EditOutlined />
            Chỉnh sửa
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <UploadImage />
        </Col>
        <Col span={16}>
          <Col span={24} style={{ paddingLeft: 40, paddingBottom: 120 }}>
            <Col span={16} className="custom">
              <FormItemVertical
                label={"Họ và tên"}
                name={"fullname"}
                required={true}
              >
                <Input disabled={!edit} />
              </FormItemVertical>
            </Col>
            <Col span={16} className="custom">
              <FormItemVertical
                label="Giới tính"
                name={"gender"}
                required={true}
              >
                <Radio.Group size={"large"} disabled={!edit}>
                  <Radio value={"0"} disabled={!edit}>
                    Nam
                  </Radio>
                  <Radio value={"1"} disabled={!edit}>
                    Nu
                  </Radio>
                </Radio.Group>
              </FormItemVertical>
            </Col>
            <Col span={16} className="custom">
              <FormItemVertical label="Email" name={"email"} required={true}>
                <Input disabled={true} />
              </FormItemVertical>
            </Col>
          </Col>
        </Col>
      </Row>
      {edit === true && (
        <Row style={{ justifyContent: "flex-start" }}>
          <Button
            className="button-job"
            size="large"
            onClick={() => {
              setEdit(false);
              onSubmit();
            }}
          >
            Cập nhât
          </Button>
        </Row>
      )}
    </Col>
  );
};

export default FormInfoHr;
