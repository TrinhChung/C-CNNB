import React from "react";
import { Col, Row, Form } from "antd";

const FormItemHorizontal = ({ children, label, name, rules }) => {
  return (
    <Row style={{ width: "100%" }}>
      <Form.Item
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        label={
          <Col span={8} className="title-container">
            {label}
          </Col>
        }
        name={name}
        rules={rules}
        style={{ width: "100%" }}
      >
        {children}
      </Form.Item>
    </Row>
  );
};

export default FormItemHorizontal;
