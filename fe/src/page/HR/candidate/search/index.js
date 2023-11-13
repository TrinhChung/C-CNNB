import { useEffect, useState, useContext } from "react";
import { Col, Input, Select, Row, Image, Button } from "antd";
import BoxSearch from "../../work/BoxSearch";
import TableResult from "../../work/TableResult";
import { useNavigate, useLocation } from "react-router-dom";
import { getApplier as getApplierService } from "../../../../service/HR";
import { AuthContext } from "../../../../provider/authProvider";
import { buildCategories } from "../../../../const/buildData";
import UserTable from "./UserTable";

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
      <UserTable
        users={users}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total={total}
      />
    </Col>
  );
};

export default Search;
