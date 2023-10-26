import React from "react";
import { Col, Row, Input, Button, Select, DatePicker } from "antd";
import RowVertical from "../../../component/RowVertical";
import "./Recruit.scss";
import TextArea from "antd/es/input/TextArea";
const Recruit = () => {
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
          <RowVertical title="Vị trí tuyển dụng:" paddingBottom={30}>
            <Col span={8} className="custom">
              <Input />
            </Col>
          </RowVertical>
          <RowVertical title="Số năm kinh nghiệm yêu cầu:" paddingBottom={30}>
            <Col span={8} className="custom">
              <Select
                style={{
                  width: "100%",
                  backgroundColor: "transparent!important",
                }}
              />
            </Col>
          </RowVertical>
          <RowVertical title="Mức lương:" paddingBottom={30}>
            <Col span={8}>
              <Row
                className="custom"
                style={{ justifyContent: "space-between", width: "100%" }}
              >
                <Row
                  style={{
                    width: "50%",
                    alignItems: "center",
                  }}
                >
                  <Col>Tối thiểu</Col>
                  <Col span={12}>
                    <Select style={{ width: "100%", paddingLeft: 20 }} />
                  </Col>
                </Row>
                <Row
                  style={{
                    width: "50%",
                    alignItems: "center",
                  }}
                >
                  <Col>Tối đa</Col>
                  <Col span={12}>
                    <Select style={{ width: "100%", paddingLeft: 20 }} />
                  </Col>
                </Row>
              </Row>
            </Col>
          </RowVertical>
          <RowVertical title="Thời gian làm việc" paddingBottom={30}>
            <Col span={8} className="custom">
              <DatePicker style={{ width: "100%" }} />
            </Col>
          </RowVertical>
          <RowVertical title="Địa điểm làm việc" paddingBottom={30}>
            <Col span={8} className="custom">
              <Input />
            </Col>
          </RowVertical>
          <RowVertical title="Hình thức làm việc" paddingBottom={30}>
            <Col span={8} className="custom">
              <Select style={{ width: "100%" }} />
            </Col>
          </RowVertical>
          <RowVertical title="Mô tả công viêc" paddingBottom={30}>
            <Col span={24} className="text-area">
              <TextArea style={{ width: "100%" }} />
            </Col>
          </RowVertical>
          <RowVertical title="Mô tả công viêc" paddingBottom={30}>
            <Col span={24} className="text-area">
              <TextArea style={{ width: "100%" }} />
            </Col>
          </RowVertical>
          <Row style={{ width: "40%", gap: 20 }}>
            <Col span={10}>
              <Button
                className="button-job"
                size="large"
                style={{
                  width: "100%",
                  height: 60,
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

export default Recruit;
