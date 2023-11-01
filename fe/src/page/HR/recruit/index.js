import React from "react";
import { Form } from "antd";
import "./Recruit.scss";
import FormRecruit from "./FormRecruit";

const Recruit = () => {
  const [form] = Form.useForm();
  const handleSubmit = () => {
    console.log(form.getFieldsValue());
  };
  return (
    <Form className="form-recruit" form={form}>
      <FormRecruit onSubmit={handleSubmit} />
    </Form>
  );
};

export default Recruit;
