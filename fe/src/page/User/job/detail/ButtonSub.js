import React from "react";
import { Row, Button } from "antd";

const ButtonSub = ({
  isCol = true,
  apply,
  save,
  applied = false,
  saved = false,
}) => {
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
          onClick={() => {
            apply();
          }}
        >
          {applied ? "Đã ứng tuyển" : "Ứng tuyển"}
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
          onClick={() => {
            save();
          }}
        >
          {saved ? "Hủy lưu" : "Lưu"}
        </Button>
      </Row>
    </>
  );
};

export default ButtonSub;
