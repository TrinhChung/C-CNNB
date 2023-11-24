import { Form, Input, Col } from "antd";
import React, { useEffect } from "react";
import FormItemVertical from "../../component/Form/FormItemVertical";
import FormItemHorizontal from "../../component/Form/FormItemHorizontal";

const FormSignupUser = () => {
  return (
    <Col span={24}>
      <FormItemVertical name={"fullname"} label={"Họ và tên"} required={true}>
        <Input />
      </FormItemVertical>
      <FormItemVertical name={"email"} label={"Email"} required={true}>
        <Input />
      </FormItemVertical>
      <FormItemVertical required={true} name={"birth_year"} label={"Năm sinh:"}>
        <Input />
      </FormItemVertical>
      <FormItemVertical name={"password"} label={"Mật khẩu"} required={true}>
        <Input type="password" />
      </FormItemVertical>
      <FormItemVertical
        name={"repassword"}
        label={"Nhập lại mật khẩu"}
        required={true}
      >
        <Input type="password" />
      </FormItemVertical>
    </Col>
  );
};

export default FormSignupUser;
