import React from "react";
import { Col, Row, Image, Button } from "antd";
const UploadImage = () => {
  return (
    <Col>
      <Row>
        <Image
          width={224}
          height={224}
          src="https://th.bing.com/th/id/OIP.mPe6EcAAhBZxQ2DXmzj8wwHaGT?w=252&h=215&c=7&r=0&o=5&pid=1.7"
        />
      </Row>
      <Row style={{ justifyContent: "center", paddingTop: 20 }}>
        <Button className="button-job" size="large">
          Tải ảnh lên
        </Button>
      </Row>
    </Col>
  );
};

export default UploadImage;
