import { useEffect, useState, useContext } from "react";
import BoxSearch from "../../../../component/BoxSearch";
import { Col, Row, Select, InputNumber } from "antd";
import "./Search.scss";
import WrapBox from "../../../../layout/HomeLayout/WrapBox";
import { AuthContext } from "../../../../provider/authProvider/index";
import { buildCategories, buildAddress } from "../../../../const/buildData";
import { getTask } from "../../../../service/User";
import { useLocation, useNavigate } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const { categories, addresses, companies } = useContext(AuthContext);
  const [task, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [querySearch, setQuerySearch] = useState(searchParams.toString());

  const getAllTask = async (currentPage, query) => {
    const res = await getTask(currentPage, query);
    if (res.success === 1 && res.data) {
      setTasks(res.data.data);
      setTotal(res.data.total);
    }
  };
  const setCurrentPageHandler = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getAllTask(currentPage, querySearch);
  }, [currentPage, querySearch]);

  useEffect(() => {
    setQuerySearch(searchParams.toString());
  }, [searchParams.toString()]);

  const WrapBoxSearch = () => {
    return (
      <Row
        style={{ backgroundColor: "#D9D9D9", padding: "20px 200px" }}
        className="wrap-search"
      >
        <Row
          style={{
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Col span={12}>
            <BoxSearch handleSearch={() => {}} />
          </Col>
        </Row>
        <Row style={{ width: "100%", justifyContent: "center", paddingTop: 2 }}>
          <Col span={3}>
            <Select
              placeholder="Ngành nghề"
              style={{ width: "100%", borderRadius: 0 }}
              options={buildCategories(categories)}
              onChange={(e) => {
                searchParams.set("category_id", e);
                navigate("/job/?" + searchParams.toString());
              }}
              defaultValue={
                searchParams.get("category_id")
                  ? +searchParams.get("category_id")
                  : 0
              }
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              showSearch
            />
          </Col>
          <Col span={3}>
            <Select
              placeholder="Công ty"
              style={{ width: "100%" }}
              options={buildAddress(companies)}
              onChange={(e) => {
                searchParams.set("company_id", e);
                navigate("/job/?" + searchParams.toString());
              }}
              defaultValue={
                searchParams.get("company_id")
                  ? searchParams.get("company_id")
                  : 0
              }
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              showSearch
            />
          </Col>
          <Col span={3}>
            <Select
              placeholder="Địa điểm làm việc"
              style={{ width: "100%" }}
              options={buildAddress(addresses)}
              onChange={(e) => {
                searchParams.set("address_id", e);
                navigate("/job/?" + searchParams.toString());
              }}
              defaultValue={+searchParams.get("address_id")}
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              showSearch
            />
          </Col>
          <Col span={3}>
            <InputNumber
              defaultValue={
                searchParams.get("_salary") ? +searchParams.get("_salary") : 0
              }
              placeholder="Mức lương"
              formatter={(value) =>
                `${value} VNĐ`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              onChange={(e) => {
                searchParams.set("_salary", e);
                navigate("/job/?" + searchParams.toString());
              }}
              style={{ width: "100%" }}
              step={1000000}
              min={0}
            />
          </Col>
        </Row>
      </Row>
    );
  };
  return (
    <Col span={24}>
      <WrapBoxSearch />
      <Col style={{ padding: "40px 10% 40px 10%" }}>
        <WrapBox
          title={"Công việc đang có"}
          setCurrentPage={setCurrentPageHandler}
          isShowAll={false}
          isPagination={true}
          total={total}
          data={task}
        />
      </Col>
    </Col>
  );
};

export default Search;
