import { Col, Row } from "antd";
const RowVertical = ({ title, data, children }) => {
  return (
    <Row>
      <Col span={24}>
        <Row className="title-container">{title}</Row>
        {children}
      </Col>
    </Row>
  );
};
export default RowVertical;
