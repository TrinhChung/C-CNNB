import React, { useState } from "react";
import { Form } from "antd";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../provider/authProvider";
import FormCompany from "../../HR/profile/FormCompany";
import {
  detailCompany,
  editProfileCompany,
} from "../../../service/Company/index";
import { toast } from "react-toastify";
const CompanyProfile = () => {
  const { authUser } = useContext(AuthContext);
  const [form] = Form.useForm();
  const [data, setData] = useState({});
  const getInfoCompany = async (id) => {
    const res = await detailCompany(id);
    if (res.success === 1 && res.data) {
      console.log(res.data);
      form.setFieldsValue({ ...res.data });
      setData(res.data);
    }
  };

  useEffect(() => {
    getInfoCompany(authUser.id);
    form.resetFields();
  }, []);

  const onEdit = async () => {
    const data = form.getFieldsValue();
    const res = await editProfileCompany(authUser.id, data);
    if (res.success === 1) {
      toast.success("Update thành công");
    } else {
      toast.error("Xảy ra lỗi gì đó");
    }
  };

  return (
    <Form form={form}>
      <FormCompany onEdit={onEdit} image={data?.image} />
    </Form>
  );
};

export default CompanyProfile;
