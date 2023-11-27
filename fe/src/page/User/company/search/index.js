import { useEffect, useState } from "react";
import { Row, Col, Pagination, Empty } from "antd";
import Banner from "../../../../component/home/Banner";
import Card from "./Card";
import { getCompaniesService } from "../../../../service/Company";
import CardAnimated from "../../../../component/Animation/CardAnimated";
import { useLocation } from "react-router-dom";

const SearchCompany = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [companies, setCompanies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [querySearch, setQuerySearch] = useState(searchParams.toString());

  const handleSearch = () => {
    getCompanies(currentPage, querySearch);
  };

  const getCompanies = async (currentPage, query) => {
    const res = await getCompaniesService(currentPage, query);
    if (res.success && res.data) {
      setCompanies(res.data.data);
      setTotal(res.data.total);
    }
  };

  useEffect(() => {
    getCompanies(currentPage, querySearch);
  }, [currentPage, querySearch]);

  useEffect(() => {
    setQuerySearch(searchParams.toString());
  }, [searchParams.toString()]);

  return (
    <Col span={24}>
      <Banner
        role={0}
        image="https://th.bing.com/th/id/R.1c441b4605dc3fe87a01740c9c8d6ae4?rik=DUQoPEyqXdm%2fvA&riu=http%3a%2f%2finap.gouvernement.lu%2fdam-assets%2fimages%2fjobs.png%2f_jcr_content%2frenditions%2fthumb-mdpi.png&ehk=%2fNHsz89eih6i4eP1M6pIN218mvC1%2f%2bgM9alMHzt5GoA%3d&risl=&pid=ImgRaw&r=0"
        placeholder="Hãy nhập tên công ty tại đây"
        search={handleSearch}
        title="Tra cứu thông tin công ty phù hợp nhất với bạn thôi nào!"
        layout={"company"}
      />
      <Row
        style={{
          padding: "40px 100px",
        }}
      >
        <Col span={24}>
          <Row className="font-text-28" style={{ paddingBottom: 53 }}>
            Tổng số công ty sử dụng web
          </Row>
          {companies && companies.length > 0 ? (
            companies.map((item, index) => {
              return (
                <CardAnimated key={index}>
                  <Card
                    name={item?.name}
                    address={item?.address?.name}
                    link={item?.link}
                    email={item?.email}
                    image={item?.image}
                    id={item?.id}
                    total={item?.tasks_count}
                  />
                </CardAnimated>
              );
            })
          ) : (
            <Empty />
          )}
          {companies && companies.length > 0 && (
            <Row style={{ paddingTop: 20, justifyContent: "center" }}>
              <Pagination
                defaultCurrent={1}
                total={total}
                size="large"
                onChange={(page) => setCurrentPage(page)}
              />
            </Row>
          )}
        </Col>
      </Row>
    </Col>
  );
};

export default SearchCompany;
