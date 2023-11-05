import React, { useContext, useMemo } from "react";
import { Col, Row, Input, Button, Select, DatePicker, InputNumber } from "antd";
import RowVertical from "../../../component/RowVertical";
import TextArea from "antd/es/input/TextArea";
import FormItemVertical from "../../../component/Form/FormItemVertical";
import FormItemHorizontal from "../../../component/Form/FormItemHorizontal";
import { AuthContext } from "../../../provider/authProvider";
import { buildAddress, buildCategories } from "../../../const/buildData";

const FormRecruit = ({ onSubmit }) => {
  const { exps, categories, addresses, types } = useContext(AuthContext);

  return (
    <Col
      style={{
        margin: 40,
        border: "1px solid var(--gray)",
        paddingLeft: 60,
        paddingBottom: 30,
        paddingRight: 60,
      }}
      className="box-shadow-bottom"
    >
      <Row className="title-color-main" style={{ padding: "30px 0" }}>
        Thông tin đăng tuyển
      </Row>
      <Row>
        <Col
          span={24}
          style={{
            padding: "35px 40px 35px 40px",
            border: "1px solid var(--color-main)",
          }}
        >
          <Col span={8} className="custom">
            <FormItemVertical label="Tiêu đề:" name={"title"} required={true}>
              <Input />
            </FormItemVertical>
          </Col>

          <Col span={8} className="custom">
            <FormItemVertical
              label="Số năm kinh nghiệm yêu cầu:"
              name={"year_of_experience"}
              required={true}
            >
              <Select
                style={{
                  width: "100%",
                  backgroundColor: "transparent!important",
                }}
                options={buildCategories(exps, false)}
              />
            </FormItemVertical>
          </Col>

          <Col span={8} className="custom">
            <FormItemVertical
              label="Loại công việc:"
              name={"category_id"}
              required={true}
            >
              <Select
                style={{
                  width: "100%",
                  backgroundColor: "transparent!important",
                }}
                options={buildCategories(categories, false)}
              />
            </FormItemVertical>
          </Col>

          <RowVertical title="Mức lương:" paddingBottom={30}>
            <Col span={8}>
              <Row
                className="custom"
                style={{ justifyContent: "space-between", width: "100%" }}
              >
                <Col span={12}>
                  <FormItemHorizontal
                    label={"Tối thiểu"}
                    wrapCol={16}
                    name={"salary_min"}
                    required={true}
                  >
                    <InputNumber
                      style={{ width: "100%" }}
                      min={0}
                      step={1000000}
                      formatter={(value) =>
                        `${value} VNĐ`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }
                      parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                    />
                  </FormItemHorizontal>
                </Col>
                <Col span={12} style={{ paddingLeft: 20 }}>
                  <FormItemHorizontal
                    label={"Tối đa"}
                    wrapCol={16}
                    name={"salary_max"}
                    required={true}
                  >
                    <InputNumber
                      style={{ width: "100%" }}
                      min={0}
                      step={1000000}
                      formatter={(value) =>
                        `${value} VNĐ`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }
                      parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                    />
                  </FormItemHorizontal>
                </Col>
              </Row>
            </Col>
          </RowVertical>
          <Col span={8} className="custom">
            <FormItemVertical
              label="Số lượng tuyển:"
              name={"amount"}
              required={true}
            >
              <InputNumber min={1} step={1} style={{ width: "100%" }} />
            </FormItemVertical>
          </Col>
          <Col span={8} className="custom">
            <FormItemVertical
              label="Bắt đầu từ:"
              name={"start"}
              required={true}
            >
              <DatePicker style={{ width: "100%" }} />
            </FormItemVertical>
          </Col>
          <Col span={8} className="custom">
            <FormItemVertical
              label="Kết thúc vào:"
              name={"end"}
              required={true}
            >
              <DatePicker style={{ width: "100%" }} />
            </FormItemVertical>
          </Col>
          <Col span={8} className="custom">
            <FormItemVertical
              label="Địa điểm làm việc:"
              name={"address_id"}
              required={true}
            >
              <Select options={buildAddress(addresses, false)} />
            </FormItemVertical>
          </Col>
          <Col span={8} className="custom">
            <FormItemVertical
              label="Địa điểm làm việc chi tiết:"
              name={"detail_address"}
              required={true}
            >
              <Input />
            </FormItemVertical>
          </Col>
          <Col span={8} className="custom">
            <FormItemVertical
              label="Hình thức làm việc:"
              name={"types"}
              required={true}
            >
              <Select mode="multiple" options={buildCategories(types, false)} />
            </FormItemVertical>
          </Col>
          <Col span={8} className="custom">
            <FormItemVertical label="Đãi ngộ:" name={"benefit"} required={true}>
              <Input />
            </FormItemVertical>
          </Col>
          <Col span={24} className="text-area">
            <FormItemVertical
              label="Mô tả công viêc:"
              name={"description"}
              required={true}
            >
              <TextArea style={{ width: "100%" }} />
            </FormItemVertical>
          </Col>
          <Col span={24} className="text-area">
            <FormItemVertical
              label="Yêu cầu:"
              name={"requiment"}
              required={true}
            >
              <TextArea style={{ width: "100%" }} />
            </FormItemVertical>
          </Col>

          <Row style={{ width: "40%", gap: 20 }}>
            <Col span={10}>
              <Button
                className="button-job"
                size="large"
                style={{
                  width: "100%",
                  height: 60,
                }}
                onClick={() => {
                  onSubmit();
                }}
              >
                Đăng tin
              </Button>
            </Col>
            <Col span={10}>
              <Button
                className="button-color-inner"
                size="large"
                style={{
                  width: "100%",
                  height: 60,
                }}
              >
                Hủy bỏ
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default FormRecruit;
