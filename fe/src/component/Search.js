import React from "react";
import { Col, Row, Input, Button } from "antd";

const Search = () => {
  return (
    <Row>
      <Col span={20}>
        <Input
          placeholder="Công việc, vị trí ứng tuyển"
          className="input-custom"
          size="large"
        />
      </Col>
      <Col span={4}>
        <Button
          className="button-search center-flex"
          style={{ height: "100%" }}
        >
          Tìm ngay
        </Button>
      </Col>
    </Row>
  );
};

export default Search;
