import { useState, useContext } from "react";
import { Col, Row, Input, Button, Radio, Modal } from "antd";
import UploadImage from "../../../component/Card/UploadImage";
import FormItemVertical from "../../../component/Form/FormItemVertical";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import ProfileHR from "../../Company/manager/ProfileHR";
import { AuthContext } from "../../../provider/authProvider";
import { toast } from "react-toastify";
import { singUpForm } from "../../../service/Auth/SignUpForm";

const FormInfoHr = ({ onSubmit, image }) => {
  const [edit, setEdit] = useState(false);
  const { authUser } = useContext(AuthContext);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const uploadImage = async (form) => {
    const res = await singUpForm(
      form,
      `${process.env.URL_BE}/api/image/upload/${authUser.id}?role=hr`
    );
    if (res.success === 1) {
      toast.success("Đã Upload Ảnh ");
    }
  };

  return (
    <Col
      style={{
        margin: 40,
        borderRadius: 10,
        border: "1px solid var(--color-main)",
        paddingLeft: 60,
        paddingBottom: 150,
      }}
    >
      <Row
        style={{
          padding: "30px 0",
          paddingRight: 30,
          justifyContent: "space-between",
        }}
      >
        <Col className="title-color-main">Thông tin tài khoản</Col>
        <Col>
          <Row style={{ gap: 10 }}>
            <Button
              className="button-job"
              size="large"
              onClick={() => {
                setIsOpenModal(true);
              }}
            >
              <EyeOutlined />
              View
            </Button>
            <Button
              className="button-job"
              size="large"
              onClick={() => {
                setEdit(true);
              }}
            >
              <EditOutlined />
              Chỉnh sửa
            </Button>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <UploadImage image={image} uploadAction={uploadImage} />
        </Col>
        <Col span={16}>
          <Col span={24} style={{ paddingLeft: 40, paddingBottom: 120 }}>
            <Col span={16} className="custom">
              <FormItemVertical
                label={"Họ và tên"}
                name={"fullname"}
                required={true}
              >
                <Input disabled={!edit} />
              </FormItemVertical>
            </Col>
            <Col span={16} className="custom">
              <FormItemVertical
                label="Giới tính"
                name={"gender"}
                required={true}
              >
                <Radio.Group size={"large"} disabled={!edit}>
                  <Radio value={"0"} disabled={!edit}>
                    Nam
                  </Radio>
                  <Radio value={"1"} disabled={!edit}>
                    Nu
                  </Radio>
                </Radio.Group>
              </FormItemVertical>
            </Col>
            <Col span={16} className="custom">
              <FormItemVertical label="Email" name={"email"} required={true}>
                <Input disabled={true} />
              </FormItemVertical>
            </Col>
          </Col>
        </Col>
      </Row>
      {edit === true && (
        <Row style={{ justifyContent: "flex-start" }}>
          <Button
            className="button-job"
            size="large"
            onClick={() => {
              setEdit(false);
              onSubmit();
            }}
          >
            Cập nhât
          </Button>
        </Row>
      )}
      <Modal
        open={isOpenModal}
        width={"100%"}
        style={{ top: 0 }}
        onOk={() => {
          setIsOpenModal(false);
        }}
        onCancel={() => {
          setIsOpenModal(false);
        }}
      >
        <Col style={{ paddingTop: 20 }}></Col>
        <ProfileHR id={authUser?.id} />
      </Modal>
    </Col>
  );
};

export default FormInfoHr;
