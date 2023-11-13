import React from "react";
import { Col, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const TitleViewAll = ({ title, isShowAll = true, redirect = () => {} }) => {
  return (
    <Row
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 38,
        width: "100%",
      }}
    >
      <Col className="font-text-28">{title}</Col>
      {isShowAll && (
        <Col
          style={{ cursor: "pointer" }}
          className="font-text-28 text-name-click"
          onClick={() => {
            redirect();
          }}
        >
          Xem tất cả <ArrowRightOutlined />
        </Col>
      )}
    </Row>
  );
};

export default TitleViewAll;
