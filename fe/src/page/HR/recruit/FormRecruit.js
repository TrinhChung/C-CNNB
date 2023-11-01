import React, { useContext, useMemo } from "react";
import { Col, Row, Input, Button, Select, DatePicker, InputNumber } from "antd";
import RowVertical from "../../../component/RowVertical";
import TextArea from "antd/es/input/TextArea";
import FormItemVertical from "../../../component/Form/FormItemVertical";
import FormItemHorizontal from "../../../component/Form/FormItemHorizontal";
import { AuthContext } from "../../../provider/authProvider";
import { buildAddress, buildCategories } from "../../../const/buildData";

const FormRecruit = ({ onSubmit }) => {
  const { exps, categories, companies, addresses } = useContext(AuthContext);

  const companiesSelect = useMemo(() => {
    return buildAddress(companies, false);
  }, [companies]);

  const addressesSelect = useMemo(() => {
    return buildAddress(addresses, false);
  }, [addresses]);

  const expsSelect = useMemo(() => {
    return buildCategories(exps, false);
  }, [exps]);

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
          <FormItemVertical label="Tiêu đề:" name={"title"}>
            <Col span={8} className="custom">
              <Input />
            </Col>
          </FormItemVertical>
          <FormItemVertical label="Công ty:" name={"company_id"}>
            <Col span={8} className="custom">
              <Select
                style={{
                  width: "100%",
                  backgroundColor: "transparent!important",
                }}
                defaultValue={companiesSelect?.[0]?.value}
                options={companiesSelect}
              />
            </Col>
          </FormItemVertical>
          <FormItemVertical
            label="Số năm kinh nghiệm yêu cầu:"
            name={"year_of_experience"}
          >
            <Col span={8} className="custom">
              <Select
                style={{
                  width: "100%",
                  backgroundColor: "transparent!important",
                }}
                defaultValue={1}
                options={expsSelect}
              />
            </Col>
          </FormItemVertical>

          <FormItemVertical label="Loại công việc:" name={"category_id"}>
            <Col span={8} className="custom">
              <Select
                style={{
                  width: "100%",
                  backgroundColor: "transparent!important",
                }}
                defaultValue={1}
                options={buildCategories(categories, false)}
              />
            </Col>
          </FormItemVertical>

          <RowVertical title="Mức lương:" paddingBottom={30}>
            <Col span={8}>
              <Row
                className="custom"
                style={{ justifyContent: "space-between", width: "100%" }}
              >
                <Col span={12}>
                  <FormItemHorizontal label={"Tối thiểu"} wrapCol={16}>
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
                  <FormItemHorizontal label={"Tối đa"} wrapCol={16}>
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
          <FormItemVertical label="Số lượng tuyển:" name={"amount"}>
            <Col span={8} className="custom">
              <InputNumber style={{ width: "100%" }} />
            </Col>
          </FormItemVertical>
          <FormItemVertical label="Thời gian làm việc:" name={"start"}>
            <Col span={8} className="custom">
              <DatePicker style={{ width: "100%" }} />
            </Col>
          </FormItemVertical>
          <FormItemVertical label="Địa điểm làm việc:" name={"address_id"}>
            <Col span={8} className="custom">
              <Select options={addressesSelect} />
            </Col>
          </FormItemVertical>
          <FormItemVertical
            label="Địa điểm làm việc chi tiết:"
            name={"detail_address"}
          >
            <Col span={8} className="custom">
              <Input />
            </Col>
          </FormItemVertical>
          <FormItemVertical label="Hình thức làm việc:" name={"method"}>
            <Col span={8} className="custom">
              <Input />
            </Col>
          </FormItemVertical>
          <FormItemVertical label="Mô tả công viêc:" name={"description"}>
            <Col span={24} className="text-area">
              <TextArea style={{ width: "100%" }} />
            </Col>
          </FormItemVertical>
          <FormItemVertical label="Yêu cầu:" name={"requiment"}>
            <Col span={24} className="text-area">
              <TextArea style={{ width: "100%" }} />
            </Col>
          </FormItemVertical>

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
