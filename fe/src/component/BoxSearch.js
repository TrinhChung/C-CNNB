import React, { useState, memo } from "react";
import { Col, Row, Input, Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const BoxSearch = memo(
  ({
    handleSearch,
    placeholder = "Công việc, vị trí ứng tuyển",
    layout = "job",
  }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [key, setKey] = useState(
      searchParams.get("searchInput") ? searchParams.get("searchInput") : ""
    );

    return (
      <Row>
        <Col span={20}>
          <Input
            placeholder={placeholder}
            className="input-custom"
            defaultValue={searchParams.get("searchInput")}
            size="large"
            onChange={(e) => {
              setKey(e.target.value);
            }}
            allowClear={true}
          />
        </Col>
        <Col span={4}>
          <Button
            className="button-search center-flex"
            style={{ height: "100%", width: "100%" }}
            onClick={() => {
              searchParams.set("searchInput", key);
              navigate(`/${layout}/?` + searchParams.toString());
              handleSearch();
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
