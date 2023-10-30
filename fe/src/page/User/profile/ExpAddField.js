import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Col, Row } from "antd";
import { useEffect } from "react";

const { TextArea } = Input;
const ExpAddField = ({ exps = [], edit }) => {
  useEffect(() => {
    // form.resetFields();
  }, [exps]);

  return (
    <Form.List
      name="exp_detail"
      style={{ width: "100%" }}
      initialValue={[...exps]}
    >
      {(data, { add, remove }) => {
        return (
          <>
            {data.map(({ key, name, ...restField }) => (
              <Col span={24} style={{ paddingBottom: 15 }} key={key}>
                <Row
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Col>
                    <Row>Place</Row>
                    <Row>
                      <Form.Item
                        {...restField}
                        name={[name, "place"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing place",
                          },
                        ]}
                        wrapperCol={{ span: 24 }}
                      >
                        <Input placeholder="Place" disabled={!edit} />
                      </Form.Item>
                    </Row>
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
                  <Row>Kinh nghiệm, cống hiến</Row>
                  <Row>
                    <Form.Item
                      {...restField}
                      name={[name, "content"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing exp content",
                        },
                      ]}
                      style={{ width: "100%" }}
                      wrapperCol={{ span: 24 }}
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
                    </Form.Item>
                  </Row>
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
                >
                  Add field
                </Button>
              </Form.Item>
            )}
          </>
        );
      }}
    </Form.List>
  );
};

export default ExpAddField;
