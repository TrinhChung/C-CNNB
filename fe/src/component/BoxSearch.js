import React, { useState } from "react";
import { Col, Row, Input, Button } from "antd";

const BoxSearch = ({
  handleSearch,
  placeholder = "Công việc, vị trí ứng tuyển",
}) => {
  const [key, setKey] = useState("");
  return (
    <Row>
      <Col span={20}>
        <Input
          placeholder={placeholder}
          className="input-custom"
          size="large"
          onChange={(e) => {
            setKey(e.target.value);
          }}
        />
      </Col>
      <Col span={4}>
        <Button
          className="button-search center-flex"
          style={{ height: "100%", width: "100%" }}
          onClick={() => {
            handleSearch(key);
          }}
        >
          Tìm ngay
        </Button>
      </Col>
    </Row>
  );
};

export default BoxSearch;
