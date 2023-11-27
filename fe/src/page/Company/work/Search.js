import React from "react";
import { Col, Input, Select } from "antd";
import "../../HR/work/Work.scss";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../provider/authProvider/index";
import { buildCategories, buildAddress } from "../../../const/buildData";
import { useLocation, useNavigate } from "react-router-dom";
import { listHeaderTask } from "../../../const/columnTable";
import BoxSearch from "../../HR/work/BoxSearch";
import TableResult from "../../HR/work/TableResult";
import { searchTaskCompany as searchTaskCompanyService } from "../../../service/Company/index";
const Search = () => {
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
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          showSearch
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
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          showSearch
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
    const res = await searchTaskCompanyService(currentPage, authUser.id, query);
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

  return (
    <Col className="box-shadow-bottom layout-container">
      <BoxSearch listInput={listInput} search={handlerSearch} />
      <TableResult
        listHead={listHeaderTask(navigate)}
        dataSource={tasks}
        total={total}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Col>
  );
};

export default Search;
