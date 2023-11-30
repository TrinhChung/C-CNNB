import React, { useEffect, useState } from "react";
import { Col, Row, Select, Input, Radio, Form, Button, Modal } from "antd";
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
import { updateProfile } from "../../../service/User";
import { toast } from "react-toastify";
import Skill from "./Skill";
import { EyeOutlined } from "@ant-design/icons";
import CVUser from "../../HR/candidate/CV/CVUser";
import { singUpForm } from "../../../service/Auth/SignUpForm";
import dayjs from "dayjs";
const { TextArea } = Input;

const CV = () => {
  const { authUser, addresses, exps, categories, birthYears } =
    useContext(AuthContext);
  const [user, setUser] = useState({});
  const [form] = Form.useForm();
  const [edit, setEdit] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  useEffect(() => {
    getInfoProfile(authUser.id);
    form.resetFields();
  }, []);

  const onSave = async () => {
    await form.validateFields();
    const data = form.getFieldsValue();
    data.projects = data.projects.map((item) => {
      return {
        ...item,
        start: item.start.format("YYYY-MM-DD"),
        end: item.end.format("YYYY-MM-DD"),
      };
    });

    data.workable_places = data.workable_places.map((workable_place) => {
      return workable_place;
    });

    data.skills = data.skills.map((skill) => {
      return skill.id;
    });

    try {
      const res = await updateProfile(data);
      if (res.success === 1) {
        toast.success("Update thành công");
      } else {
        toast.error("Update that bai");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getInfoProfile = async (id) => {
    const res = await getProfileService(id);
    if (res.success === 1 && res.data) {
      setUser(res.data);
      form.resetFields();

      if (res.data.workable_places) {
        form.setFieldsValue({ ...res.data });
        form.setFieldValue(
          "workable_places",
          res.data.workable_places.map((place) => place.id)
        );
        form.setFieldValue("birth_year", res.data?.birth_year?.id);
        const projects = res.data.projects.map((item) => {
          return {
            ...item,
            start: dayjs(new Date(item.start)),
            end: dayjs(new Date(item.end)),
          };
        });
        form.setFieldValue("projects", projects);
      }
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

  const uploadImage = async (form) => {
    console.log(process.env.URL_BE);
    const res = await singUpForm(
      form,
      `${process.env.URL_BE}/api/image/upload/${authUser.id}?role=user`
    );
    if (res.success === 1) {
      toast.success("Đã Upload Ảnh ");
    }
  };

  return (
    <Col
      style={{
        padding: 20,
        backgroundColor: "var(--background-box-search)",
      }}
    >
      <Form form={form} className="form-cv">
        <BoxCV title={"Profile"}>
          <Row style={{ paddingTop: 20 }}>
            <Col style={{ paddingRight: 40 }}>
              <UploadImage
                image={user?.applier?.image ? user?.applier?.image : undefined}
                uploadAction={uploadImage}
              />
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
              </Row>
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
            <FormItemHorizontal
              name="fullname"
              label={"Họ và tên:"}
              required={true}
            >
              <Input disabled={!edit} />
            </FormItemHorizontal>
            <FormItemHorizontal required={true} name={"email"} label={"Email:"}>
              <Input disabled={!edit} />
            </FormItemHorizontal>
            <FormItemHorizontal
              required={true}
              name={"birth_year"}
              label={"Năm sinh:"}
            >
              <Select
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                showSearch
                style={{ minWidth: 200 }}
                options={buildCategories(birthYears, false)}
                disabled={!edit}
              />
            </FormItemHorizontal>
            <FormItemHorizontal
              name={"gender"}
              required={true}
              label={"Giới tính:"}
              disabled={!edit}
            >
              <Radio.Group
                onChange={onChange}
                value={1}
                size={"large"}
                disabled={!edit}
              >
                <Radio value={"1"} disabled={!edit}>
                  Nam
                </Radio>
                <Radio value={"2"} disabled={!edit}>
                  Nu
                </Radio>
              </Radio.Group>
            </FormItemHorizontal>
            <FormItemHorizontal
              name={"address_id"}
              label={"Nơi sống:"}
              required={true}
            >
              <Select
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                showSearch
                style={{ minWidth: 200 }}
                options={buildAddress(addresses, false)}
                disabled={!edit}
              />
            </FormItemHorizontal>
            <FormItemHorizontal
              name={"category_id"}
              label={"Lĩnh vực làm việc:"}
              required={true}
            >
              <Select
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                showSearch
                style={{ minWidth: 200 }}
                options={buildCategories(categories, false)}
                disabled={!edit}
              />
            </FormItemHorizontal>

            <FormItemVertical
              label="Mô tả về bản thân"
              name="description"
              required={true}
            >
              <TextArea
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
                required={true}
              >
                <Select
                  mode="multiple"
                  style={{ minWidth: 200 }}
                  filterOption={(input, option) =>
                    (option?.label ?? "").includes(input)
                  }
                  options={buildAddress(addresses, false)}
                  disabled={!edit}
                />
              </FormItemHorizontal>
            }
            <FormItemVertical
              label="Mong muốn bản thân về công việc"
              name={"desire"}
              required={true}
            >
              <TextArea
                autoSize={{
                  minRows: 4,
                  maxRows: 6,
                }}
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
                required={true}
              >
                <Select
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
        <BoxCV
          title={"Skill"}
          isEdit={true}
          setEdit={setEdit}
          edit={edit}
          onSave={onSave}
        >
          <Col>
            <Skill mySkills={user?.skills} edit={edit} />
          </Col>
        </BoxCV>
      </Form>
      <Modal
        open={isOpenModal}
        width={"100%"}
        style={{ top: 0 }}
        onOk={() => setIsOpenModal(false)}
        onCancel={() => setIsOpenModal(false)}
      >
        <CVUser id={authUser?.id} />
      </Modal>
    </Col>
  );
};

export default CV;
