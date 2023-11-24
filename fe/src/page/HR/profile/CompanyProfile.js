import React, { useEffect } from "react";
import { Form } from "antd";
import { useState, useContext } from "react";
import { AuthContext } from "../../../provider/authProvider";
import { detailCompany } from "../../../service/Company/index";
import "./Profile.scss";
import FormCompany from "./FormCompany";
const CompanyProfile = () => {
  const { authUser } = useContext(AuthContext);
  const [form] = Form.useForm();
  const [data, setDate] = useState({});

  const getInfoCompany = async (id) => {
    const res = await detailCompany(id);
    if (res.success === 1 && res.data) {
      form.setFieldsValue({ ...res.data });
      setDate(res.data);
    }
  };

  useEffect(() => {
    getInfoCompany(authUser.company_id);
    form.resetFields();
  }, []);

  return (
    <Form form={form}>
      <FormCompany image={data?.image} />
    </Form>
  );
};

export default CompanyProfile;
