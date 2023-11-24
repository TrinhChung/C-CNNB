import React, { useEffect, useState } from "react";
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
import { searchHRCompany as searchHRCompanyService } from "../../../service/Company/index";
const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [hrs, setHrs] = useState([]);
  const [total, setTotal] = useState(1);
  const listInput = [
    {
      title: "Từ khóa tìm kiếm",
      input: (
        <Input
          style={{ width: "90%" }}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder={"Nhập tên hoặc email"}
        />
      ),
      col: 16,
    },
    {
      title: "Trạng thái",
      input: (
        <Select
          options={statusHRaccept}
          defaultValue={
            searchParams.get("accepted") ? +searchParams.get("accepted") : null
          }
          style={{ width: "90%" }}
          onChange={(e) => {
            searchParams.set("accepted", e);
            navigate("/manager/?" + searchParams.toString());
          }}
        />
      ),
      col: 4,
    },
  ];

  const handlerSearch = () => {
    searchParams.set("searchInput", searchInput);

    navigate("/manager/?" + searchParams.toString());
    searchHRCompany();
  };

  const searchHRCompany = async () => {
    const query = searchParams.toString();
    const res = await searchHRCompanyService(currentPage, query);
    if (res.success === 1 && res.data) {
      setTotal(res.total);
      if (res.data.data) {
        setHrs(res.data.data);
      }
    }
  };

  useEffect(() => {
    searchHRCompany();
  }, [currentPage]);

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
                src={
                  data?.image
                    ? data.image
                    : "https://th.bing.com/th/id/OIP.dImyW_c6krukWPP-b_3URAHaG8?w=170&h=183&c=7&r=0&o=5&pid=1.7"
                }
                preview={false}
              />
            </Col>
            <Col span={16}>
              <Row
                className="h2-color-main text-name-click"
                style={{ paddingBottom: 6 }}
                onClick={() => {
                  navigate(`/manager/detail/${data.id}`);
                }}
              >
                {data.fullname}
              </Row>
              <Row
                className="color-main"
                style={{ paddingBottom: 6, fontSize: 16 }}
              >
                Trạng thái: {data?.hraccepted === "1" ? "HR" : "Đợi duyệt"}
              </Row>
              <Row style={{ paddingBottom: 9, fontSize: 16 }}>
                <CalendarOutlined style={{ paddingRight: 6, fontSize: 16 }} />
                Giới tính: {data?.gender === 0 ? "Nam" : "Nữ"}
              </Row>
              <Row style={{ fontSize: 16 }}>
                <MailOutlined style={{ paddingRight: 6, fontSize: 16 }} />
                Email: {data?.email}
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
                {data.managed_tasks_count}
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
        dataSource={hrs}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total={total}
      />
    </Col>
  );
};

export default Search;
