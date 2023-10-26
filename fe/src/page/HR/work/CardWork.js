import React from "react";
import { Col, Row } from "antd";

const CardWork = ({ contentBox = [], data, key }) => {
  return (
    <Col
      span={24}
      style={{ padding: "30px 0px 30px 0px", marginBottom: 30 }}
      className="box-border-shadow"
      key={key}
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

export default CardWork;
