import React from "react";
import { Col, Row, Input, Button } from "antd";
import "../page/User/profile/Profile.scss";
const WrapSearch = ({ children }) => {
  return (
    <Col className="wrap-search" span={24}>
      <Row>
        <Row
          style={{
            justifyContent: "flex-end",
            width: "100%",
            paddingBottom: "30px",
          }}
        >
          <Col span={6}>
            <Input style={{ borderRadius: 0, width: "100%" }} size="large" />
          </Col>
          <Col>
            <Button
              className="button-search"
              style={{ borderRadius: "0px!important" }}
              size="large"
            >
              Search
            </Button>
          </Col>
        </Row>
      </Row>
      <Row>{children}</Row>
    </Col>
  );
};

export default WrapSearch;
