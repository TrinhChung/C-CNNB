import React from "react";
import { Row, Col, Tabs, Button, Image, Form } from "antd";
import imageLogin from "../../assets/image-login.jpeg";
import logoLogin from "../../assets/logo1.svg";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import FormSignupUser from "./FormSignupUser";
import FormSignupHr from "./FormSignupHr";
import FormSignupCompany from "./FormSignupCompany";

import "./Auth.scss";
const Register = () => {
  const [role, setRole] = useState(0);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleChange = (value) => {
    setRole(value);
  };

  const items = [
    {
      key: 0,
      label: `Ứng viên`,
      children: <FormSignupUser form={form} />,
    },
    {
      key: 1,
      label: `HR`,
      children: <FormSignupHr form={form} />,
    },
    {
      key: 3,
      label: `Company`,
      children: <FormSignupCompany form={form} />,
    },
  ];

  const onChange = (key) => {
    setRole(key);
    form.resetFields();
  };

  const handlerLogin = async () => {
    form.validateFields();
    console.log(form.getFieldsValue());
  };
  return (
    <Row className="auth-container">
      <Col className={"wrap-box"}>
        <Row style={{ paddingBottom: 20 }}>
          <Image height={80} preview={false} src={logoLogin} />
        </Row>
        <Row>
          <Col className="custom-register" span={12}>
            <Form form={form}>
              <Tabs
                size="large"
                defaultActiveKey="1"
                items={items}
                onChange={onChange}
                style={{ fontSize: 20 }}
              />
            </Form>

            <Row>
              <Col span={24}>
                <Button className="button-job" onClick={() => handlerLogin()}>
                  Signup
                </Button>
              </Col>
            </Row>
            <Row style={{ paddingTop: 40 }}>
              <Col>
                <Row className="fs-20">Bạn đã có tài khoản?</Row>
                <Row
                  style={{ cursor: "pointer", color: "var(--color-main)" }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Đăng nhập tại đây
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Image src={imageLogin} preview={false} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Register;
