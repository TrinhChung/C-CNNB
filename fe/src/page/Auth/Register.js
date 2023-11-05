import React from "react";
import { Row, Col, Tabs, Button, Image, Select, Form } from "antd";
import imageLogin from "../../assets/image-login.jpeg";
import logoLogin from "../../assets/logo1.svg";
import { role as ROLE } from "../../const";
import { useState, useContext } from "react";
import { loginService } from "../../service/Auth/index";
import { AuthContext } from "../../provider/authProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import FormSignupUser from "./FormSignupUser";
import "./Auth.scss";
const Register = () => {
  const { authUser, setAuthUser } = useContext(AuthContext);
  const [role, setRole] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const handleChange = (value) => {
    setRole(value);
  };

  const items = [
    {
      key: "1",
      label: `Ứng viên`,
      children: <FormSignupUser form={form} />,
    },
    {
      key: "2",
      label: `HR`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: `Company`,
      children: `Content of Tab Pane 3`,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };

  const handlerLogin = async () => {
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
            <Tabs
              size="large"
              defaultActiveKey="1"
              items={items}
              onChange={onChange}
              style={{ fontSize: 20 }}
            />
            <Row>
              <Col>
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
