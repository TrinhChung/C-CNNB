import React, { useContext } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Col, Row, Select } from "antd";
import FormItemHorizontal from "../../../component/Form/FormItemHorizontal";
import { AuthContext } from "../../../provider/authProvider";
import { buildCategories } from "../../../const/buildData";
const Skill = ({ mySkills = [], edit = false }) => {
  const { skills } = useContext(AuthContext);

  return (
    <Form.List
      name="skills"
      style={{ width: "100%" }}
      initialValue={[...mySkills]}
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
                      name={[name, "id"]}
                      label={"Kỹ năng:"}
                      required={true}
                    >
                      <Select
                        options={buildCategories(skills, false)}
                        disabled={!edit}
                      />
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

export default Skill;
