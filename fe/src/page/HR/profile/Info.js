import { Form } from "antd";
import { useEffect, useContext, useState } from "react";
import { getInfoHr } from "../../../service/User/index";
import { AuthContext } from "../../../provider/authProvider";
import "./Profile.scss";
import FormInfoHr from "./FormInfoHr";
const Info = () => {
  const { authUser } = useContext(AuthContext);
  const [data, setData] = useState();
  const [form] = Form.useForm();

  useEffect(() => {
    getInfoProfile(authUser.id);
    form.resetFields();
  }, []);

  const getInfoProfile = async (id) => {
    const res = await getInfoHr(id);
    if (res.success === 1 && res.data) {
      setData(res.data);
      form.setFieldsValue({ ...res.data });
    }
  };

  const onSubmit = async () => {
    await form.validateFields();
    console.log(form.getFieldsValue());
  };

  return (
    <Form form={form}>
      <FormInfoHr onSubmit={onSubmit} />
    </Form>
  );
};

export default Info;
