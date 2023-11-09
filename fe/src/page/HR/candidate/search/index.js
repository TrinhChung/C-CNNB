import { useEffect, useState, useContext } from "react";
import { Col, Input, Select, Row, Image } from "antd";
import BoxSearch from "../../work/BoxSearch";
import TableResult from "../../work/TableResult";
import { LockOutlined, EditOutlined, CloseOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { getApplier as getApplierService } from "../../../../service/HR";
import { AuthContext } from "../../../../provider/authProvider";
import { buildCategories } from "../../../../const/buildData";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const { authUser, categories, exps } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
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
      title: "Công việc ứng tuyển",
      input: (
        <Select
          options={buildCategories(categories)}
          defaultValue={
            searchParams.get("category_id")
              ? +searchParams.get("category_id")
              : 0
          }
          style={{ width: "90%" }}
          onChange={(e) => {
            searchParams.set("category_id", e);
            navigate("/candidate/?" + searchParams.toString());
          }}
        />
      ),
      col: 5,
    },
    {
      title: "Số năm kinh nghiệm",
      input: (
        <Select
          options={buildCategories(exps)}
          defaultValue={
            searchParams.get("year_of_experience")
              ? +searchParams.get("year_of_experience")
              : 0
          }
          style={{ width: "90%" }}
          onChange={(e) => {
            searchParams.set("year_of_experience", e);
            navigate("/candidate/?" + searchParams.toString());
          }}
        />
      ),
      col: 5,
    },
  ];

  const listHead = [
    {
      title: "Thông tin ứng viên",
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
                    : "https://th.bing.com/th/id/OIP.qdSbn0McRHkJEzYu5_cAWgHaI9?pid=ImgDet&w=100&h=100&c=7"
                }
                preview={false}
              />
            </Col>
            <Col span={16}>
              <Row
                className="h2-color-main text-name-click"
                style={{ paddingBottom: 23 }}
                onClick={() => {
                  navigate(`cv/${data?.id}`);
                }}
              >
                {data.fullname}
              </Row>
              <Row
                className="color-main"
                style={{ paddingBottom: 9, fontSize: 16 }}
              >
                {data.email}
              </Row>
              <Row style={{ paddingBottom: 9, fontSize: 16 }}>
                Nơi sinh sống: {data?.profile.address?.name}
              </Row>
              <Row style={{ fontSize: 16 }}>
                Số năm kinh nghiệm: {data?.profile?.exp_year?.content}
              </Row>
            </Col>
          </Row>
        );
      },
    },
    {
      title: "Công việc ứng tuyển",
      col: 10,
      render: (data) => {
        return (
          <Row style={{ justifyContent: "center", alignItems: "center" }}>
            <Col
              span={18}
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "var(--background-box-search)",
                height: 142,
                display: "flex",
                borderRadius: 20,
                fontSize: 16,
              }}
            >
              {data.profile.category.content}
            </Col>
          </Row>
        );
      },
    },

    {
      title: "Thao tác",
      col: 2,
      borderRight: false,
      render: () => {
        return (
          <Row style={{ justifyContent: "center" }}>
            <Col span={8}>
              <LockOutlined />
            </Col>
            <Col span={8}>
              <EditOutlined />
            </Col>
            <Col span={8}>
              <CloseOutlined />
            </Col>
          </Row>
        );
      },
    },
  ];

  const getApplier = async (query) => {
    const res = await getApplierService(authUser.id, query);
    if (res.success === 1 && res.data) {
      setUsers(res.data.data);
      setTotal(res.data.total);
    }
  };

  const handlerSearch = () => {
    searchParams.set("searchInput", searchInput);
    navigate("/candidate/?" + searchParams.toString());
    const query = searchParams.toString();
    getApplier(query);
  };

  useEffect(() => {
    const query = searchParams.toString();
    getApplier(query);
  }, []);

  return (
    <Col className="layout-container box-shadow-bottom">
      <BoxSearch listInput={listInput} search={handlerSearch} />
      <TableResult
        dataSource={users}
        listHead={listHead}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total={total}
      />
    </Col>
  );
};

export default Search;
