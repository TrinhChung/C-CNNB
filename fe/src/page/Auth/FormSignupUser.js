import { Form, Input, Col } from "antd";
import React, { useEffect } from "react";
import FormItemVertical from "../../component/Form/FormItemVertical";

const FormSignupUser = ({ form }) => {
  useEffect(() => {
    form.resetFields();
  }, []);
  return (
    <Form form={form}>
      <Col span={24}>
        <FormItemVertical name={"fullname"} label={"Họ và tên"}>
          <Input />
        </FormItemVertical>
        <FormItemVertical name={"email"} label={"Email"}>
          <Input />
        </FormItemVertical>
        <FormItemVertical name={"password"} label={"Mật khẩu"}>
          <Input />
        </FormItemVertical>
        <FormItemVertical name={"repassword"} label={"Nhập lại mật khẩu"}>
          <Input />
        </FormItemVertical>
      </Col>
    </Form>
  );
};

export default FormSignupUser;
