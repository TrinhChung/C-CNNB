import { useEffect, useState } from "react";
import { Input, Col, Row, Button, Image, Select, Form, Spin } from "antd";
import FormItemVertical from "../../component/Form/FormItemVertical";
import imageLogin from "../../assets/image-login.jpeg";
import logoLogin from "../../assets/logo1.svg";
import { toast } from "react-toastify";
import { forgotService } from "../../service/Auth/index";
import { role as ROLE } from "../../const";
import { useNavigate } from "react-router-dom";
import "./Auth.scss";
const FormForgotPwd = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    form.setFieldValue("role", 0);
  }, []);
  const handlerForgot = async () => {
    await form.validateFields();
    setLoading(true);
    const data = form.getFieldsValue();
    data.role = ROLE[data.role].label;
    const res = await forgotService(data);
    if (res.success === 1) {
      toast.success("Vui lòng xác thực lại tại email");
      navigate("/wait-verify-mail");
    } else {
      toast.error(res.message);
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
            <Col span={12} style={{ paddingRight: 40 }}>
              <Form form={form}>
                <FormItemVertical name={"role"} label={"Role"} required={true}>
                  <Select style={{ width: "100%" }} options={ROLE} />
                </FormItemVertical>
                <FormItemVertical
                  name={"email"}
                  label={"Email tài khoản"}
                  required={true}
                >
                  <Input />
                </FormItemVertical>
                <FormItemVertical
                  name={"newpassword"}
                  label={"Mật khẩu mới"}
                  required={true}
                >
                  <Input type="password" />
                </FormItemVertical>

                <FormItemVertical
                  name={"checknewpassword"}
                  label={"Nhập lại mật khẩu"}
                  required={true}
                >
                  <Input type="password" />
                </FormItemVertical>
              </Form>
              <Row>
                <Col>
                  <Button
                    className="button-job"
                    onClick={() => handlerForgot()}
                  >
                    Đổi mật khẩu
                  </Button>
                </Col>
              </Row>
              <Row style={{ paddingTop: 40 }}>
                <Col>
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

export default FormForgotPwd;
