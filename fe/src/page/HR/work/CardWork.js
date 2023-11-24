import React from "react";
import { Col, Row } from "antd";
import { memo } from "react";

const CardWork = ({ contentBox = [], data, key, redirect = () => {} }) => {
  return (
    <Col
      span={24}
      style={{
        padding: "30px 0px 30px 0px",
        marginBottom: 30,
        backgroundColor: "white",
      }}
      className="box-border-shadow"
      key={key}
      onClick={() => {
        redirect();
      }}
    >
      <Row style={{ alignItems: "center" }}>
        {contentBox &&
          contentBox.length > 0 &&
          contentBox.map((box, index) => {
            return (
              <Col span={box.col} key={index}>
                {box.render(data)}
              </Col>
            );
          })}
      </Row>
    </Col>
  );
};

export default memo(CardWork);
