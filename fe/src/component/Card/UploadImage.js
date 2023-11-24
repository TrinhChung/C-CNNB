import React, { useEffect, useState } from "react";
import { Col, Row, Image, Button, Upload } from "antd";
import "./Card.scss";

const UploadImage = ({
  image = "https://th.bing.com/th/id/OIP.qdSbn0McRHkJEzYu5_cAWgHaI9?pid=ImgDet&w=100&h=100&c=7",
  edit = true,
  uploadAction = () => {},
}) => {
  const [field, setField] = useState({});
  const [urlImage, setUrlImage] = useState(image);

  useEffect(() => {
    setUrlImage(image);
  }, [image]);

  return (
    <Col span={24}>
      <Row>
        <Image width={224} height={224} src={urlImage} />
      </Row>
      <Row style={{ gap: 10 }}>
        <Col style={{ justifyContent: "center", paddingTop: 20, width: 100 }}>
          <Upload
            multiple={false}
            maxCount={1}
            style={{ justifyContent: "center" }}
            className="upload-custom"
            onChange={async (e) => {
              const file = e.file.originFileObj;
              setUrlImage(URL.createObjectURL(file));
              setField(file);
            }}
          >
            <Button disabled={!edit} className="button-job" size="large">
              Tải ảnh lên
            </Button>
          </Upload>
        </Col>
        <Col style={{ justifyContent: "center", paddingTop: 20 }}>
          <Button
            disabled={!edit}
            className="button-color-inner"
            size="large"
            style={{ width: "100%" }}
            onClick={() => {
              var bodyFormData = new FormData();
              bodyFormData.append("image", field);
              uploadAction(bodyFormData);
            }}
          >
            Lưu
          </Button>
        </Col>
      </Row>
    </Col>
  );
};

export default UploadImage;
