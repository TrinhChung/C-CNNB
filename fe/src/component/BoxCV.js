import React from "react";
import { Col, Row, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import "../page/User/profile/Profile.scss";

const BoxCV = ({ title, isEdit = false, children }) => {
  return (
    <Row className="box-cv box-shadow-bottom">
      <Col span={24}>
        <Row style={{ justifyContent: "space-between" }}>
          <Col span={22} className="font-text-28">
            {title}
          </Col>
          {isEdit && (
            <Col span={2}>
              <Button className="button-job" size="large">
                <EditOutlined />
                Chỉnh sửa
              </Button>
            </Col>
          )}
        </Row>
        {children}
      </Col>
    </Row>
  );
};

export default BoxCV;
