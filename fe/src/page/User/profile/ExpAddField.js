import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Col, Row } from "antd";

const { TextArea } = Input;
const ExpAddField = ({ exps = [] }) => {
  const [form] = Form.useForm();

  return (
    <Form form={form}>
      <Form.List
        name="users"
        style={{ width: "100%" }}
        initialValue={[...exps]}
      >
        {(data, { add, remove }) => {
          console.log(data);
          return (
            <>
              {data.map(({ key, name, ...restField }) => (
                <Col span={24} style={{ paddingBottom: 15 }}>
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
                          <Input placeholder="Place" />
                        </Form.Item>
                      </Row>
                    </Col>
                    <Col>
                      <MinusCircleOutlined
                        style={{ fontSize: 30, color: "red" }}
                        onClick={() => remove(name)}
                      />
                    </Col>
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
                        />
                      </Form.Item>
                    </Row>
                  </Col>
                </Col>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
              </Form.Item>
            </>
          );
        }}
      </Form.List>
    </Form>
  );
};

export default ExpAddField;
