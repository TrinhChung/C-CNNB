import React, { useState } from "react";
import { Col, Row, Input, Select, Button, Image } from "antd";
import BoxSearch from "../../HR/work/BoxSearch";
import TableResult from "../../HR/work/TableResult";
import {
  PhoneOutlined,
  CalendarOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { statusHRaccept } from "../../../const/index";
const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const [searchInput, setSearchInput] = useState("");
  const [email, setEmail] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(1);
  const listInput = [
    {
      title: "Từ khóa tìm kiếm",
      input: (
        <Input
          style={{ width: "90%" }}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      ),
      col: 10,
    },
    {
      title: "Gmail",
      input: (
        <Input
          style={{ width: "90%" }}
          onChange={(e) => setEmail(e.target.value)}
        />
      ),
      col: 6,
    },
    {
      title: "Trạng thái",
      input: (
        <Select
          options={statusHRaccept}
          defaultValue={
            searchParams.get("status") ? +searchParams.get("status") : 0
          }
          style={{ width: "90%" }}
          onChange={(e) => {
            searchParams.set("status", e);
            navigate("/manager/?" + searchParams.toString());
          }}
        />
      ),
      col: 4,
    },
  ];

  const handlerSearch = () => {
    searchParams.set("searchInput", searchInput);
    searchParams.set("email", email);

    navigate("/manager/?" + searchParams.toString());
    const query = searchParams.toString();
    console.log("searching");
  };

  const data = [
    {
      id: 1,
      image:
        "https://th.bing.com/th/id/OIP.GXbwyfVCv6S8vyx667VBwgHaFR?w=224&h=180&c=7&r=0&o=5&pid=1.7",
      name: "Darrell Steward",
      position: "Chức vụ ",
      birthday: "dd/mm/yy",
      email: "nguyenvana@gmail.com",
      phone: "0123456789",
      jobCharge: 5,
    },
    {
      id: 2,
      image:
        "https://th.bing.com/th/id/OIP.GXbwyfVCv6S8vyx667VBwgHaFR?w=224&h=180&c=7&r=0&o=5&pid=1.7",
      name: "Darrell Steward",
      position: "Chức vụ ",
      birthday: "dd/mm/yy",
      email: "nguyenvana@gmail.com",
      phone: "0123456789",
      jobCharge: 5,
    },
    {
      id: 3,
      image:
        "https://th.bing.com/th/id/OIP.GXbwyfVCv6S8vyx667VBwgHaFR?w=224&h=180&c=7&r=0&o=5&pid=1.7",
      name: "Darrell Steward",
      position: "Chức vụ ",
      birthday: "dd/mm/yy",
      email: "nguyenvana@gmail.com",
      phone: "0123456789",
      jobCharge: 5,
    },
  ];

  const listHead = [
    {
      title: "Thông tin quản lý",
      col: 11,
      render: (data) => {
        return (
          <Row style={{ paddingLeft: 40, alignItems: "center" }}>
            <Col span={8} style={{ paddingRight: 35 }}>
              <Image
                style={{ height: 168, width: 168, borderRadius: "50%" }}
                src={data.image}
                preview={false}
              />
            </Col>
            <Col span={16}>
              <Row
                className="h2-color-main text-name-click"
                style={{ paddingBottom: 6 }}
                onClick={() => {
                  navigate(`cv/1`);
                }}
              >
                {data.name}
              </Row>
              <Row
                className="color-main"
                style={{ paddingBottom: 6, fontSize: 16 }}
              >
                Chức vụ: {data.position}
              </Row>
              <Row style={{ paddingBottom: 9, fontSize: 16 }}>
                <CalendarOutlined style={{ paddingRight: 6, fontSize: 16 }} />
                Ngày sinh: {data.birthday}
              </Row>
              <Row style={{ fontSize: 16 }}>
                <MailOutlined style={{ paddingRight: 6, fontSize: 16 }} />
                Email: {data.email}
              </Row>
              <Row style={{ fontSize: 16 }}>
                <PhoneOutlined style={{ paddingRight: 6, fontSize: 16 }} />
                Phone: {data.phone}
              </Row>
            </Col>
          </Row>
        );
      },
    },
    {
      title: "Số công việc đang phụ trách",
      col: 10,
      render: (data) => {
        return (
          <Row>
            <Col span={24}>
              <Row style={{ justifyContent: "center" }} className="fs-16">
                {data.jobCharge}
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
      <TableResult
        listHead={listHead}
        dataSource={data}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total={total}
      />
    </Col>
  );
};

export default Search;
