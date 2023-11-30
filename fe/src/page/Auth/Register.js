import React, { useEffect } from "react";
import { Row, Col, Tabs, Button, Image, Form, Spin } from "antd";
import imageLogin from "../../assets/image-login.jpeg";
import logoLogin from "../../assets/logo1.svg";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import FormSignupUser from "./FormSignupUser";
import FormSignupHr from "./FormSignupHr";
import FormSignupCompany from "./FormSignupCompany";
import { singUpForm } from "../../service/Auth/SignUpForm";

import "./Auth.scss";
const Register = () => {
  const [role, setRole] = useState(0);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    form.resetFields();
  }, []);

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
      key: 2,
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
    const url = `${process.env.URL_BE}${
      role === 2 ? "/api/company/new" : "/api/user/new"
    }`;

    const formData = new FormData();
    const fieldsValue = form.getFieldsValue();
    Object.keys(fieldsValue).forEach((key) => {
      formData.append(key, fieldsValue[key]);
    });
    formData.append("role", role);
    setLoading(true);
    const res = await singUpForm(formData, url);
    if (res.success === 1) {
      toast.success("Đăng ký thành công");
      navigate("/wait-verify-mail");
    } else {
      toast.error(res?.message);
    }
    setLoading(false);
  };

  return (
    <Spin spinning={loading} tip="Loading">
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
    </Spin>
  );
};

export default Register;
