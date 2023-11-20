import React, { useContext } from "react";
import { Select, Input, Col } from "antd";
import FormItemVertical from "../../component/Form/FormItemVertical";
import { AuthContext } from "../../provider/authProvider";
import { buildAddress } from "../../const/buildData";

const FormSignupHr = () => {
  const { companies } = useContext(AuthContext);

  return (
    <Col span={24}>
      <FormItemVertical name={"fullname"} label={"Họ và tên"} required={true}>
        <Input />
      </FormItemVertical>
      <FormItemVertical
        name={"company_id"}
        label={"Công ty của bạn"}
        required={true}
      >
        <Select options={buildAddress(companies, false)} />
      </FormItemVertical>
      <FormItemVertical name={"email"} label={"Email"} required={true}>
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

export default FormSignupHr;
