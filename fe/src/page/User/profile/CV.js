import React, { useEffect, useState } from "react";
import { Col, Row, Select, Input, Radio, Form } from "antd";
import UploadImage from "../../../component/Card/UploadImage";
import RowVertical from "../../../component/RowVertical";
import BoxCV from "../../../component/BoxCV";
import "./Profile.scss";
import { getProfileUser as getProfileService } from "../../../service/User";
import { useContext } from "react";
import { AuthContext } from "../../../provider/authProvider";
import moment from "moment";
import { buildAddress, buildCategories } from "../../../const/buildData";
import FormItemHorizontal from "../../../component/Form/FormItemHorizontal";
import FormItemVertical from "../../../component/Form/FormItemVertical";
import ExpAddField from "./ExpAddField";
import Project from "./Project";
const { TextArea } = Input;

const CV = () => {
  const { authUser, addresses, exps } = useContext(AuthContext);
  const [workablePlaces, setWorkablePlaces] = useState([]);
  const [user, setUser] = useState({});
  const [form, formExps, formProjects] = Form.useForm();
  const [edit, setEdit] = useState(false);

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  useEffect(() => {
    getInfoProfile(authUser.id);
    return () => {
      form.resetFields();
    };
  }, []);

  const onSave = async () => {
    await form.validateFields();
    form.resetFields();
    console.log(form.getFieldsValue());
  };

  const getInfoProfile = async (id) => {
    const res = await getProfileService(id);
    if (res.success === 1 && res.data) {
      setUser(res.data);
      if (res.data.workable_places) {
        setWorkablePlaces(buildAddress(res.data.workable_places, false));
      }
      form.setFieldValue("fullname", user.fullname);
      console.log("setFile");
      ss;
    }
  };

  const TextVertical = ({ title, content }) => {
    return (
      <Row style={{ padding: "5px 4px 5px 0px", fontSize: 20 }}>
        <Row style={{ padding: "0px 4px 5px 0px", fontSize: 20 }}>
          {title ? title : "Chưa có dữ liệu"}
        </Row>
        <Row style={{ padding: "0px 4px 5px 0px", fontSize: 20 }}>
          {content ? content : "Chưa có dữ liệu"}
        </Row>
      </Row>
    );
  };

  return (
    <Col
      style={{
        padding: 20,
        backgroundColor: "var(--background-box-search)",
      }}
    >
      <Form className="form-cv" form={form}>
        <BoxCV title={"Profile"}>
          <Row style={{ paddingTop: 20 }}>
            <Col style={{ paddingRight: 40 }}>
              <UploadImage image={user?.image} />
            </Col>
            <Col span={12}>
              <Row className="font-text-28" style={{ paddingBottom: 15 }}>
                {user?.fullname ? user.fullname : "Nguyễn Văn A"}
              </Row>
              <TextVertical
                title="Công việc:"
                content={user?.category?.content}
              />
              <TextVertical
                title="Kinh nghiệm:"
                content={user?.exp_year?.content}
              />
              <TextVertical title="Email:" content={user?.email} />
              <TextVertical
                title="Ngày cập nhật :"
                content={moment(
                  user?.updated_at ? user.updated_at : new Date()
                ).format("l")}
              />
            </Col>
          </Row>
        </BoxCV>

        <BoxCV
          title={"Thông tin cá nhân"}
          isEdit={true}
          setEdit={setEdit}
          edit={edit}
          onSave={onSave}
        >
          <Col>
            <FormItemHorizontal name={"fullname"} label={"Họ và tên:"}>
              <Input disabled={!edit} />
            </FormItemHorizontal>
            <FormItemHorizontal name={"email"} label={"Email:"}>
              <Input defaultValue={user?.email} disabled={!edit} />
            </FormItemHorizontal>
            <FormItemHorizontal name={"birth_year"} label={"Năm sinh:"}>
              <Input defaultValue={user?.birth_year} disabled={!edit} />
            </FormItemHorizontal>
            <FormItemHorizontal
              name={"gender"}
              label={"Giới tính:"}
              disabled={!edit}
            >
              <Radio.Group
                onChange={onChange}
                value={1}
                size={"large"}
                disabled={!edit}
              >
                <Radio value={1} disabled={!edit}>
                  Nam
                </Radio>
                <Radio value={2} disabled={!edit}>
                  Nu
                </Radio>
              </Radio.Group>
            </FormItemHorizontal>
            <FormItemHorizontal name={"address_id"} label={"Nơi sống:"}>
              <Select
                style={{ minWidth: 200 }}
                defaultValue={user?.address_id}
                options={buildAddress(addresses, false)}
                disabled={!edit}
              />
            </FormItemHorizontal>

            <FormItemVertical label="Mô tả về bản thân" name="description">
              <TextArea
                defaultValue={user.description}
                autoSize={{
                  minRows: 4,
                  maxRows: 6,
                }}
                name="description"
                allowClear={true}
                style={{ width: "100%" }}
                disabled={!edit}
              />
            </FormItemVertical>
          </Col>
        </BoxCV>

        <BoxCV
          title={"Thông tin nghề nghiệp"}
          isEdit={true}
          setEdit={setEdit}
          edit={edit}
          onSave={onSave}
        >
          <Col span={24}>
            {
              <FormItemHorizontal
                label={"Nơi có thể làm việc"}
                name={"workable_places"}
              >
                <Select
                  mode="multiple"
                  style={{ minWidth: 200 }}
                  defaultValue={workablePlaces}
                  value={workablePlaces}
                  onChange={setWorkablePlaces}
                  options={buildAddress(addresses, false)}
                  disabled={!edit}
                />
              </FormItemHorizontal>
            }
            <FormItemVertical
              label="Mong muốn bản thân về công việc"
              name={"desire"}
            >
              <TextArea
                autoSize={{
                  minRows: 4,
                  maxRows: 6,
                }}
                defaultValue={user?.desire}
                allowClear={true}
                disabled={!edit}
              />
            </FormItemVertical>
          </Col>
        </BoxCV>
        <BoxCV
          isEdit={true}
          title="Kinh nghiệm làm việc"
          setEdit={setEdit}
          edit={edit}
          onSave={onSave}
        >
          <Col span={24}>
            {
              <FormItemHorizontal
                name={"year_of_experience"}
                label="Số năm kinh nghiệm"
              >
                <Select
                  defaultValue={user?.year_of_experience}
                  style={{ minWidth: 200 }}
                  options={buildCategories(exps, false)}
                  disabled={!edit}
                />
              </FormItemHorizontal>
            }
            <RowVertical title="Chi tiết kinh nghiệm">
              <ExpAddField exps={user?.exp_detail} form={form} edit={edit} />
            </RowVertical>
          </Col>
        </BoxCV>

        <BoxCV
          title={"Dự án đã tham gia"}
          isEdit={true}
          setEdit={setEdit}
          edit={edit}
          onSave={onSave}
        >
          <Col>
            <Project projects={user?.projects} form={form} edit={edit} />
          </Col>
        </BoxCV>
      </Form>
    </Col>
  );
};

export default CV;
