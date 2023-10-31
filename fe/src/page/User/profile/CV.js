import React, { useEffect, useState } from "react";
import { Col, Row, Switch, Select, Input, Radio } from "antd";
import RowHorizontal from "../../../component/RowHorizontal";
import UploadImage from "../../../component/Card/UploadImage";
import RowVertical from "../../../component/RowVertical";
import BoxCV from "../../../component/BoxCV";
import "./Profile.scss";
import { getProfileUser as getProfileService } from "../../../service/User";
import { useContext } from "react";
import { AuthContext } from "../../../provider/authProvider";
const { TextArea } = Input;
const CV = () => {
  const { authUser } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  useEffect(() => {
    getInfoProfile(authUser.id);
  }, []);

  const getInfoProfile = async (id) => {
    const res = await getProfileService(id);
    if (res.success === 1 && res.data) {
      setUser(res.data);
    }
  };

  console.log(user);

  return (
    <Col
      style={{
        padding: 20,
        backgroundColor: "var(--background-box-search)",
      }}
    >
      <BoxCV title={"Profile"}>
        <Row style={{ paddingTop: 20 }}>
          <Col style={{ paddingRight: 40 }}>
            <UploadImage />
          </Col>
          <Col span={12}>
            <Row className="font-text-28" style={{ paddingBottom: 15 }}>
              Họ và tên
            </Row>
            <Row style={{ padding: "5px 4px 5px 0px", fontSize: 20 }}>
              Vi tri mong muon:<Row></Row>
            </Row>
            <Row style={{ padding: "5px 4px 5px 0px", fontSize: 20 }}>
              Kinh nghiem:<Row></Row>
            </Row>
            <Row style={{ padding: "5px 4px 5px 0px", fontSize: 20 }}>
              Muc luong mong muon:<Row></Row>
            </Row>
            <Row style={{ padding: "5px 4px 5px 0px", fontSize: 20 }}>
              Ngay cap nhat:<Row></Row>
            </Row>
          </Col>
          <Col span={6}>
            <Row>
              <Col
                style={{
                  padding: 20,
                  backgroundColor: "var(--background-box-search)",
                  borderRadius: 10,
                }}
              >
                <Row className="title-container">Bat trang thai tim viec</Row>
                <Row>
                  <Switch
                    defaultChecked
                    onChange={onChange}
                    checkedChildren="Bật"
                    unCheckedChildren="Tắt"
                  />
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </BoxCV>

      <BoxCV title={"Thong tin ca nhan"} isEdit={true}>
        <Col>
          <RowHorizontal title={"Ho va ten:"}>
            <Row style={{ fontSize: 20 }}>Nguyen van A</Row>
          </RowHorizontal>
          <RowHorizontal title={"Email:"}>
            <Row style={{ fontSize: 20 }}>Nguyen van A</Row>
          </RowHorizontal>
          <RowHorizontal title={"Nam sinh"}>
            <Row style={{ fontSize: 20 }}>Nguyen van A</Row>
          </RowHorizontal>
          <RowHorizontal title={"Gioi tinh"}>
            <Row style={{ fontSize: 20 }}>
              <Radio.Group onChange={onChange} value={1} size={"large"}>
                <Radio value={1}>Nam</Radio>
                <Radio value={2}>Nu</Radio>
              </Radio.Group>
            </Row>
          </RowHorizontal>
          <RowHorizontal title={"Tinh trang hon nhan"}>
            <Select style={{ minWidth: 200 }} />
          </RowHorizontal>
          <RowHorizontal title={"Noi song"}>
            <Select style={{ minWidth: 200 }} />
          </RowHorizontal>
          <RowVertical title="Mô tả về bản thân">
            <TextArea
              autoSize={{
                minRows: 4,
                maxRows: 6,
              }}
            />
          </RowVertical>
        </Col>
      </BoxCV>

      <BoxCV title={"Thong tin nghe nghiep"} isEdit={true}>
        <Col span={24}>
          {
            <RowHorizontal title={"Noi co the lam viec"}>
              <Select style={{ minWidth: 200 }} />
            </RowHorizontal>
          }
          {
            <RowHorizontal title={"Muc luong mong muon"}>
              <Select style={{ minWidth: 200 }} />
            </RowHorizontal>
          }
          <RowVertical title="Mong muon cua ban than ve cong viec">
            <TextArea
              autoSize={{
                minRows: 4,
                maxRows: 6,
              }}
            />
          </RowVertical>
        </Col>
      </BoxCV>
      <BoxCV isEdit={true} title="Kinh nghiệm làm việc">
        <Col span={24}>
          {
            <RowHorizontal title="Số năm kinh nghiệm">
              <Select style={{ minWidth: 200 }} />
            </RowHorizontal>
          }
          <RowVertical title="Chi tiết kinh nghiệm">
            <Col>
              <Row style={{ fontSize: 18, paddingBottom: 10 }}>
                Nơi làm việc quá khứ
              </Row>
              <Row style={{ fontSize: 18, paddingBottom: 10 }}>
                Cong hien cho cong ty
              </Row>
              <TextArea
                autoSize={{
                  minRows: 4,
                  maxRows: 6,
                }}
              />
            </Col>
          </RowVertical>
        </Col>
      </BoxCV>

      <BoxCV title={"Dự án đã tham gia"} isEdit={true}>
        <Col>
          <RowHorizontal title={"Tên công ty:"}>
            <Row style={{ fontSize: 20 }}>Nguyen van A</Row>
          </RowHorizontal>
          <RowHorizontal title={"Số lượng thành viên:"}>
            <Row style={{ fontSize: 20 }}>Nguyen van A</Row>
          </RowHorizontal>
          <RowHorizontal title={"Thời gian bắt đầu"}>
            <Row style={{ fontSize: 20 }}>Nguyen van A</Row>
          </RowHorizontal>
          <RowHorizontal title={"Thời gian kết thúc"}>
            <Row style={{ fontSize: 20 }}>Nguyen van A</Row>
          </RowHorizontal>
          <RowHorizontal title={"Công nghệ sử dụng"}>
            <Row style={{ fontSize: 20 }}>Nguyen van A</Row>
          </RowHorizontal>
          <RowVertical title="Mô tả chi tiết">
            <TextArea
              autoSize={{
                minRows: 4,
                maxRows: 6,
              }}
            />
          </RowVertical>
        </Col>
      </BoxCV>
    </Col>
  );
};

export default CV;
