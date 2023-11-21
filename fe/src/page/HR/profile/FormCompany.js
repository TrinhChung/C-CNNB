import React from "react";
import { Col, Row, Input, Select, Button } from "antd";
import UploadImage from "../../../component/Card/UploadImage";
import { EditOutlined } from "@ant-design/icons";
import FormItemVertical from "../../../component/Form/FormItemVertical";
import { buildAddress } from "../../../const/buildData";
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/authProvider";
import { toast } from "react-toastify";
import { singUpForm } from "../../../service/Auth/SignUpForm";
const { TextArea } = Input;

const FormCompany = ({ onEdit = () => {}, image }) => {
  const { authUser, addresses } = useContext(AuthContext);
  const [edit, setEdit] = useState(false);

  const uploadImage = async (form) => {
    const res = await singUpForm(
      form,
      `http://localhost:8000/api/image/upload/${authUser.id}?role=company`
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
        paddingRight: 60,
      }}
    >
      <Row
        className="title-color-main"
        style={{ padding: "30px 0", justifyContent: "space-between" }}
      >
        <Col className="title-color-main">Thông tin công ty</Col>
        {authUser?.role === 2 && (
          <Col>
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
          </Col>
        )}
      </Row>
      <Row>
        <Col span={8}>
          <UploadImage image={image} uploadAction={uploadImage} />
        </Col>
        <Col span={16}>
          <Col span={24} style={{ paddingLeft: 40, paddingBottom: 120 }}>
            <Col span={16} className="custom">
              <FormItemVertical
                name={"name"}
                label="Tên công ty"
                paddingBottom={20}
              >
                <Input disabled={!edit} />
              </FormItemVertical>
            </Col>
            <Col span={16} className="custom">
              <FormItemVertical
                label="Trang web của công ty"
                name={"link"}
                paddingBottom={20}
              >
                <Input disabled={!edit} />
              </FormItemVertical>
            </Col>
            <Col span={16} className="custom">
              <FormItemVertical
                name="tax_code"
                label="Mã số thuế"
                paddingBottom={20}
              >
                <Input disabled={true} />
              </FormItemVertical>
            </Col>
            <Col span={16} className="custom">
              <FormItemVertical
                name={"address_id"}
                label="Địa chỉ công ty"
                paddingBottom={20}
              >
                <Select
                  style={{ width: "100%", marginTop: 10 }}
                  disabled={!edit}
                  options={buildAddress(addresses, false)}
                />
              </FormItemVertical>
            </Col>
          </Col>
        </Col>
      </Row>
      <Row className="text-area" style={{ width: "100%" }}>
        <FormItemVertical name="detail_address" label={"Địa chỉ chi tiết"}>
          <TextArea
            showCount
            maxLength={100}
            style={{
              marginBottom: 24,
              width: "100%",
            }}
            placeholder="can resize"
            disabled={!edit}
            autoSize={{
              minRows: 4,
              maxRows: 6,
            }}
            allowClear={true}
          />
        </FormItemVertical>
      </Row>
      <Row className="text-area" style={{ width: "100%" }}>
        <FormItemVertical name="description" label={"Mô tả công ty "}>
          <TextArea
            showCount
            maxLength={100}
            style={{
              marginBottom: 24,
              width: "100%",
            }}
            placeholder="can resize"
            disabled={!edit}
            autoSize={{
              minRows: 8,
              maxRows: 10,
            }}
            allowClear={true}
          />
        </FormItemVertical>
      </Row>

      {edit && (
        <Row>
          <Button
            className="button-job"
            size="large"
            onClick={() => {
              setEdit(false);
              onEdit();
            }}
          >
            Cập nhât
          </Button>
        </Row>
      )}
    </Col>
  );
};

export default FormCompany;
