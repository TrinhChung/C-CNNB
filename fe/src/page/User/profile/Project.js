import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Col, Row, InputNumber } from "antd";
import { useEffect } from "react";
import FormItemHorizontal from "../../../component/Form/FormItemHorizontal";
import FormItemVertical from "../../../component/Form/FormItemVertical";
import moment from "moment";
const { TextArea } = Input;
const Project = ({ projects = [], edit = false }) => {
  return (
    <Form.List
      name="projects"
      style={{ width: "100%" }}
      initialValue={[...projects]}
    >
      {(data, { add, remove }) => {
        return (
          <Row>
            {data.map(({ key, name, ...restField }) => (
              <Col span={24} style={{ paddingBottom: 15 }} key={key}>
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <Col span={18}>
                    <FormItemHorizontal
                      name={[name, "amount_of_member"]}
                      label={"Số lượng thành viên:"}
                      rules={[
                        {
                          required: true,
                          message: "Số lượng thành viên",
                        },
                      ]}
                    >
                      <InputNumber
                        placeholder="Số lượng thành viên"
                        min={1}
                        step={1}
                        disabled={!edit}
                      />
                    </FormItemHorizontal>
                    <FormItemHorizontal
                      label={"Thời gian bắt đầu:"}
                      name={[name, "start"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing Thời gian bắt đầu",
                        },
                      ]}
                    >
                      <Input placeholder="Place" disabled={!edit} />
                    </FormItemHorizontal>
                    <FormItemHorizontal
                      label={"Thời gian kết thúc:"}
                      name={[name, "end"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing Thời gian kết thúc",
                        },
                      ]}
                    >
                      <Input placeholder="Place" disabled={!edit} />
                    </FormItemHorizontal>
                    <FormItemHorizontal
                      label={"Công nghệ sử dụng:"}
                      name={[name, "technology"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing Công nghệ sử dụng",
                        },
                      ]}
                    >
                      <Input placeholder="Công nghệ sử dụng" disabled={!edit} />
                    </FormItemHorizontal>
                  </Col>
                  {edit && (
                    <Col>
                      <MinusCircleOutlined
                        style={{ fontSize: 30, color: "red" }}
                        onClick={() => {
                          if (edit) {
                            remove(name);
                          }
                        }}
                      />
                    </Col>
                  )}
                </Row>
                <Col>
                  <FormItemVertical
                    name={[name, "description"]}
                    label="Kinh nghiệm, cống hiến"
                    rules={[
                      {
                        required: true,
                        message: "Missing exp description",
                      },
                    ]}
                  >
                    <TextArea
                      placeholder="Kinh nghiệm, cống hiến"
                      allowClear={true}
                      style={{ width: "100%" }}
                      autoSize={{
                        minRows: 4,
                        maxRows: 6,
                      }}
                      disabled={!edit}
                    />
                  </FormItemVertical>
                </Col>
              </Col>
            ))}
            {edit && (
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    if (edit) {
                      add();
                    }
                  }}
                  block
                  icon={<PlusOutlined />}
                  style={{ width: "100%" }}
                >
                  Add field
                </Button>
              </Form.Item>
            )}
          </Row>
        );
      }}
    </Form.List>
  );
};

export default Project;
