import React from "react";
import { Col, Row, Form } from "antd";

const FormItemVertical = ({ children, label, name, rules }) => {
  return (
    <Row style={{ width: "100%" }}>
      <Col span={24}>
        <Row className="title-container" style={{ fontSize: 20 }}>
          {label}
        </Row>
        <Form.Item
          wrapperCol={{ span: 24 }}
          name={name}
          style={{ width: "100%" }}
          rules={rules}
        >
          {children}
        </Form.Item>
      </Col>
    </Row>
  );
};

export default FormItemVertical;
