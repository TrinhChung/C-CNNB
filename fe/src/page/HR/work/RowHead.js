import React from "react";
import { Col, Row } from "antd";

const RowHead = ({ listHead }) => {
  return (
    <Row style={{ marginTop: 40 }}>
      <Col span={24}>
        <Row
          className="background-color-main pdx40"
          style={{ paddingTop: 15, paddingBottom: 15 }}
        >
          {listHead &&
            listHead.length > 0 &&
            listHead.map((item, index) => {
              return (
                <Col
                  className={`cell-content ${
                    item.borderRight === false ? "" : "border-right"
                  } `}
                  span={item.col}
                  key={index}
                >
                  {item.title}
                </Col>
              );
            })}
        </Row>
      </Col>
    </Row>
  );
};

export default RowHead;
