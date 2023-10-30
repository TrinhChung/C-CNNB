import { useEffect, useState, useContext } from "react";
import BoxSearch from "../../../../component/BoxSearch";
import { Col, Row, Select, InputNumber } from "antd";
import "./Search.scss";
import WrapBox from "../../../../layout/HomeLayout/WrapBox";
import { AuthContext } from "../../../../provider/authProvider/index";
import { buildCategories, buildAddress } from "../../../../const/buildData";
import { getTask } from "../../../../service/User";

const Search = () => {
  const { categories, addresses, companies } = useContext(AuthContext);
  const [categoryId, setCategoryId] = useState(null);
  const [addressId, setAddressId] = useState(null);
  const [searchText, setSearchText] = useState(null);
  const [salary, setSalary] = useState(null);
  const [task, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(1);

  const getAllTask = async () => {
    const res = await getTask(currentPage);
    if (res.success === 1 && res.data) {
      setTasks(res.data.data);
      setTotal(res.data.total);
    }
  };
  const setCurrentPageHandler = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getAllTask();
  }, [currentPage]);

  const handleSearch = (key) => {
    setSearchText(key);
  };

  const onChange = (value) => {
    console.log("changed", value);
  };

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
            <BoxSearch handleSearch={handleSearch} />
          </Col>
        </Row>
        <Row style={{ width: "100%", justifyContent: "center", paddingTop: 2 }}>
          <Col span={3}>
            <Select
              placeholder="Ngành nghề"
              style={{ width: "100%", borderRadius: 0 }}
              options={buildCategories(categories)}
            />
          </Col>
          <Col span={3}>
            <Select
              placeholder="Công ty"
              style={{ width: "100%" }}
              options={companies}
            />
          </Col>
          <Col span={3}>
            <Select
              placeholder="Địa điểm làm việc"
              style={{ width: "100%" }}
              options={buildAddress(addresses)}
            />
          </Col>
          <Col span={3}>
            <InputNumber
              defaultValue={5000000}
              placeholder="Mức lương"
              formatter={(value) =>
                `${value} VNĐ`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              onChange={onChange}
              style={{ width: "100%" }}
              step={1000000}
              min={1000000}
            />
          </Col>
        </Row>
      </Row>
    );
  };
  return (
    <Col span={24}>
      <WrapBoxSearch
        data={{
          categoryId: categoryId,
          searchText: searchText,
          addressId: addressId,
        }}
      />
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
