import React from "react";
import { Select, Input, Col } from "antd";
import FormItemVertical from "../../component/Form/FormItemVertical";
import { buildCategories } from "../../const/buildData";

const FormSignupCompany = () => {
  return (
    <Col span={24}>
      <FormItemVertical name={"name"} label={"Tên công ty"} required={true}>
        <Input />
      </FormItemVertical>
      <FormItemVertical name={"tax_code"} label={"Mã số thuế"} required={true}>
        <Input />
      </FormItemVertical>
      <FormItemVertical name={"email"} label={"Email công ty"} required={true}>
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

export default FormSignupCompany;
