import React, { memo } from "react";
import { Col, Row, Button, Form } from "antd";
import { EditOutlined } from "@ant-design/icons";
import "../page/User/profile/Profile.scss";

const BoxCV = ({
  title,
  isEdit = false,
  children,
  edit = false,
  setEdit = () => {},
  onSave = () => {},
}) => {
  return (
    <Row className="box-cv box-shadow-bottom" style={{ width: "100%" }}>
      <Col span={24}>
        <Row style={{ justifyContent: "space-between", paddingBottom: 15 }}>
          <Col span={22} className="font-text-28">
            {title}
          </Col>
          {isEdit === true && (
            <Col span={2}>
              <Button
                className="button-job"
                size="large"
                onClick={() => {
                  setEdit(true);
                }}
              >
                <EditOutlined />
                Chỉnh sửa
              </Button>
            </Col>
          )}
        </Row>
        {children}
        {isEdit && edit && (
          <Row>
            <Form.Item
              wrapperCol={{
                span: 12,
                offset: 6,
              }}
            >
              <Button
                className="button-color-inner"
                size="large"
                onClick={() => {
                  setEdit(false);
                  onSave();
                }}
                htmlType="submit"
              >
                Save
              </Button>
            </Form.Item>
          </Row>
        )}
      </Col>
    </Row>
  );
};

export default memo(BoxCV);
