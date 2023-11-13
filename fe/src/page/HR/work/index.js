import React from "react";
import { Col, Row, Input, Select, Button, Badge } from "antd";
import "./Work.scss";
import BoxSearch from "./BoxSearch";
import TableResult from "./TableResult";
import { DollarCircleOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../provider/authProvider/index";
import { buildCategories, buildAddress } from "../../../const/buildData";
import { useLocation, useNavigate } from "react-router-dom";
import { searchTaskHr as searchTaskHrService } from "../../../service/HR";
import { buildSalary } from "../../../const/BuildSalaray";
const Work = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const { categories, addresses, authUser } = useContext(AuthContext);
  const [searchInput, setSearchInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(1);

  const listInput = [
    {
      title: "Từ khóa tìm kiếm",
      input: (
        <Input
          style={{ width: "90%" }}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      ),
      col: 10,
    },
    {
      title: "Nghề nghiệp",
      input: (
        <Select
          style={{ width: "90%" }}
          options={buildCategories(categories)}
          onChange={(e) => {
            searchParams.set("category_id", e);
            navigate("/work/?" + searchParams.toString());
          }}
          defaultValue={
            searchParams.get("category_id")
              ? +searchParams.get("category_id")
              : 0
          }
        />
      ),
      col: 5,
    },
    {
      title: "Địa điểm",
      input: (
        <Select
          style={{ width: "90%" }}
          options={buildAddress(addresses)}
          onChange={(e) => {
            searchParams.set("address_id", e);
            navigate("/work/?" + searchParams.toString());
          }}
          defaultValue={+searchParams.get("address_id")}
        />
      ),
      col: 5,
    },
  ];

  const handlerSearch = () => {
    searchParams.set("searchInput", searchInput);
    navigate("/work/?" + searchParams.toString());
    const query = searchParams.toString();
    getTaskHr(query);
  };

  const getTaskHr = async (query) => {
    const res = await searchTaskHrService(authUser.id, query);
    if (res.success === 1 && res.data) {
      if (res.data.data) {
        setTasks(res.data.data);
      }
      setTotal(res.data.total);
    }
  };

  useEffect(() => {
    const query = searchParams.toString();
    getTaskHr(query);
  }, []);

  const listHead = [
    {
      title: "Tiêu đề, tên công việc",
      col: 9,
      render: (data) => {
        return (
          <Row style={{ paddingLeft: 30 }}>
            <Col span={24} style={{ justifyContent: "center" }}>
              <Row className="title-color-main">
                <Col
                  style={{ fontSize: 30, paddingRight: 22 }}
                  className="text-name-click"
                >
                  {data?.title}
                </Col>
                <Col style={{ display: "flex", alignItems: "center" }}>
                  <Badge
                    color="#f50"
                    text={
                      data?.status && data.status === "1"
                        ? "Đang tuyển"
                        : "Đã kết thúc"
                    }
                    style={{ color: "#f50" }}
                  />
                </Col>
              </Row>
              <Row style={{ paddingTop: 27 }} className="color-main">
                <Col>
                  <DollarCircleOutlined />
                </Col>
                <Col>
                  Lương: {buildSalary(data?.salary_min, data?.salary_max)}
                </Col>
              </Row>
              <Row style={{ paddingTop: 9 }}>
                <Col>
                  <EnvironmentOutlined />
                </Col>
                <Col>Nơi làm việc: {data?.address?.name}</Col>
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
                {data.amount}
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
      title: "Thời gian tuyển",
      col: 7,
      render: (data) => {
        return (
          <Row style={{ justifyContent: "center" }} className="fs-16">
            {"Từ ngày " + data?.start + " đến " + data?.end}
          </Row>
        );
      },
    },
    {
      title: "Thao tác",
      col: 4,
      borderRight: false,
      render: (data) => {
        return (
          <Row style={{ justifyContent: "center" }}>
            <Button
              className="button-job"
              style={{ width: "80%", height: 50 }}
              onClick={() => {
                navigate(`task/edit/${data?.id}`);
              }}
            >
              Chi tiết
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
        dataSource={tasks}
        total={total}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Col>
  );
};

export default Work;
