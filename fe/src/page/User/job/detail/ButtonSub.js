import React from "react";
import { Row, Button } from "antd";

const ButtonSub = ({ isCol = true }) => {
  return (
    <>
      <Row className={`${isCol === false ? "width-40" : ""}`}>
        <Button
          className="button-job"
          style={{
            width: "100%",
            height: 64,
            margin: "12px 0",
            fontSize: "20px",
          }}
        >
          Ứng tuyển
        </Button>
      </Row>
      <Row className={`${isCol === false ? "width-40" : ""}`}>
        <Button
          className="button-job button-color-inner"
          style={{
            width: "100%",
            height: 64,
            fontSize: "20px",
            margin: "12px 0",
          }}
        >
          Lưu việc làm
        </Button>
      </Row>
    </>
  );
};

export default ButtonSub;
