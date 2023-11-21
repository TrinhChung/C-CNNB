import { Form } from "antd";
import { useEffect, useContext, useState } from "react";
import { getInfoHr, updateUser } from "../../../service/User/index";
import { AuthContext } from "../../../provider/authProvider";
import "./Profile.scss";
import FormInfoHr from "./FormInfoHr";
import { toast } from "react-toastify";
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
    try {
      const res = await updateUser(authUser.id, form.getFieldsValue());
      if (res.success === 1) {
        toast.success("Update thành công");
      } else {
        toast.error("Xảy ra lỗi");
      }
    } catch (error) {
      toast.error("Xảy ra lỗi");
    }
  };

  return (
    <Form form={form}>
      <FormInfoHr onSubmit={onSubmit} image={data?.image} />
    </Form>
  );
};

export default Info;
