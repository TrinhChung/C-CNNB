import React, { useState, memo } from "react";
import { Col, Row, Input, Button } from "antd";
import { useLocation } from "react-router-dom";

const BoxSearch = memo(
  ({ handleSearch, placeholder = "Công việc, vị trí ứng tuyển" }) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [key, setKey] = useState(
      searchParams.get("text") ? searchParams.get("text") : ""
    );

    return (
      <Row>
        <Col span={20}>
          <Input
            placeholder={placeholder}
            className="input-custom"
            defaultValue={key}
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
  }
);

export default BoxSearch;
