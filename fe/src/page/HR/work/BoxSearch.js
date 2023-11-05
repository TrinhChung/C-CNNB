import React from "react";
import { Col, Row, Button } from "antd";
import WrapInput from "./WrapInput";

const BoxSearch = ({ listInput = [], search }) => {
  return (
    <Row style={{ paddingTop: 30, alignItems: "end" }}>
      {listInput &&
        listInput.length > 0 &&
        listInput.map((item, index) => {
          return (
            <Col span={item.col ? item.col : 20 / listInput.length} key={index}>
              <WrapInput title={item.title}>{item.input}</WrapInput>
            </Col>
          );
        })}
      <Col span={4}>
        <Button
          className="button-color-inner"
          style={{ width: "100%", height: 40 }}
          onClick={() => {
            search();
          }}
        >
          Tìm ngay
        </Button>
      </Col>
    </Row>
  );
};

export default BoxSearch;
