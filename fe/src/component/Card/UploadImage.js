import React from "react";
import { Col, Row, Image, Button } from "antd";
const UploadImage = ({
  image = "https://th.bing.com/th/id/OIP.mPe6EcAAhBZxQ2DXmzj8wwHaGT?w=252&h=215&c=7&r=0&o=5&pid=1.7",
}) => {
  return (
    <Col>
      <Row>
        <Image width={224} height={224} src={image} />
      </Row>
      <Row>
        <Row style={{ justifyContent: "center", paddingTop: 20, width: 224 }}>
          <Button className="button-job" size="large">
            Tải ảnh lên
          </Button>
        </Row>
      </Row>
    </Col>
  );
};

export default UploadImage;
