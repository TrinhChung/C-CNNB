import React from "react";
import { Col, Row, Input, Select, DatePicker, Badge, Button } from "antd";
import BoxSearch from "../../HR/work/BoxSearch";
import TableResult from "../../HR/work/TableResult";
import { DollarCircleOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const listInput = [
    { title: "Từ khóa tìm kiếm", input: <Input style={{ width: "90%" }} /> },
    { title: "Số người ứng tuyển", input: <Select style={{ width: "90%" }} /> },
    { title: "Ngày đăng", input: <DatePicker style={{ width: "90%" }} /> },
    {
      title: "Ngày làm việc",
      input: <DatePicker style={{ width: "90%" }} />,
    },
  ];
  const navigate = useNavigate();
  const handlerSearch = () => {
    console.log("searching");
  };

  const data = [
    {
      position: "Vị trí việc làm",
      status: "Trạng thái",
      cost: "5.000.000 - 10.000.000",
      address: "Hà nội",
      numberRecruit: "10",
      dateRecruit: "dd/mm/yy",
      dateWork: "dd/mm/yy",
      id: 1,
    },
    {
      position: "Vị trí việc làm",
      status: "Trạng thái",
      cost: "5.000.000 - 10.000.000",
      address: "Hà nội",
      numberRecruit: "10",
      dateRecruit: "dd/mm/yy",
      dateWork: "dd/mm/yy",
      id: 2,
    },
    {
      position: "Vị trí việc làm",
      status: "Trạng thái",
      cost: "5.000.000 - 10.000.000",
      address: "Hà nội",
      numberRecruit: "10",
      dateRecruit: "dd/mm/yy",
      dateWork: "dd/mm/yy",
      id: 3,
    },
    {
      position: "Vị trí việc làm",
      status: "Trạng thái",
      cost: "5.000.000 - 10.000.000",
      address: "Hà nội",
      numberRecruit: "10",
      dateRecruit: "dd/mm/yy",
      dateWork: "dd/mm/yy",
      id: 4,
    },
  ];

  const listHead = [
    {
      title: "Tiêu đề, tên công việc",
      col: 9,
      render: (data) => {
        return (
          <Row style={{ paddingLeft: 30 }}>
            <Col span={24} style={{ justifyContent: "center" }}>
              <Row className="title-color-main">
                <Col style={{ fontSize: 30, paddingRight: 22 }}>
                  {data.position}
                </Col>
                <Col style={{ display: "flex", alignItems: "center" }}>
                  <Badge
                    color="#f50"
                    text={data.status}
                    style={{ color: "#f50" }}
                  />
                </Col>
              </Row>
              <Row style={{ paddingTop: 27 }} className="color-main">
                <Col>
                  <DollarCircleOutlined />
                </Col>
                <Col>Lương: {data.cost}</Col>
              </Row>
              <Row style={{ paddingTop: 9 }}>
                <Col>
                  <EnvironmentOutlined />
                </Col>
                <Col>Nơi làm việc: {data.address}</Col>
              </Row>
            </Col>
          </Row>
        );
      },
    },
    {
      title: "Số người ứng tuyển",
      col: 4,
      render: (data) => {
        return (
          <Row>
            <Col span={24}>
              <Row style={{ justifyContent: "center" }} className="fs-16">
                {data.numberRecruit}
              </Row>
              <Row
                style={{ justifyContent: "center", fontWeight: "bold" }}
                className="fs-16"
              >
                Người ứng tuyển
              </Row>
            </Col>
          </Row>
        );
      },
    },
    {
      title: "Ngày đăng tin",
      col: 4,
      render: (data) => {
        return (
          <Row style={{ justifyContent: "center" }} className="fs-16">
            {data.dateRecruit}
          </Row>
        );
      },
    },
    {
      title: "Cập nhật lần cuối",
      col: 4,
      render: (data) => {
        return (
          <Row style={{ justifyContent: "center" }} className="fs-16">
            {data.dateWork}
          </Row>
        );
      },
    },
    {
      title: "Thao tác",
      col: 3,
      borderRight: false,
      render: (data) => {
        return (
          <Row style={{ justifyContent: "center" }}>
            <Button
              className="button-job"
              onClick={() => {
                navigate(`detail/${data.id}`);
              }}
            >
              Xem ngay
            </Button>
          </Row>
        );
      },
    },
  ];
  return (
    <Col className="box-shadow-bottom layout-container">
      <BoxSearch listInput={listInput} search={handlerSearch} />
      <TableResult listHead={listHead} dataSource={data} />
    </Col>
  );
};

export default Search;
