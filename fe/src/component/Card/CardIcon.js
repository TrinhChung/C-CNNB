import React from "react";
import { Row } from "antd";
import "./Card.scss";
const CardIcon = ({ icon, title, row = true }) => {
  return (
    <div className={`${row ? "flex-row-between" : "flex-column-center"}`}>
      <Row style={{ justifyContent: "center" }}>{icon}</Row>
      <Row style={{ fontSize: 18, justifyContent: "center" }}>{title}</Row>
    </div>
  );
};

export default CardIcon;
