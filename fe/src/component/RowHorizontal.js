import { Col, Row } from "antd";
const RowHorizontal = ({ title, data = [], children }) => {
  return (
    <Row>
      <Col span={8} className="title-container">
        {title}
      </Col>
      <Col span={16}>{children}</Col>
    </Row>
  );
};

export default RowHorizontal;
