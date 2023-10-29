import React from "react";
import { Row, Col, Pagination } from "antd";
import Banner from "../../../../component/home/Banner";
import Card from "./Card";
const SearchCompany = () => {
  const data = [
    {
      name: "Trương Tam Phong",
      address: "Đại học quốc",
      link: "uet.vnu.edu.vn",
    },
    {
      name: "Trương Tam Phong",
      address: "Đại học quốc",
      link: "uet.vnu.edu.vn",
    },
    {
      name: "Trương Tam Phong",
      address: "Đại học quốc",
      link: "uet.vnu.edu.vn",
    },
    {
      name: "Trương Tam Phong",
      address: "Đại học quốc",
      link: "uet.vnu.edu.vn",
    },
  ];
  const handleSearch = (key) => {
    console.log("search company");
  };
  return (
    <Col span={24}>
      <Banner
        role={0}
        image="https://th.bing.com/th/id/R.1c441b4605dc3fe87a01740c9c8d6ae4?rik=DUQoPEyqXdm%2fvA&riu=http%3a%2f%2finap.gouvernement.lu%2fdam-assets%2fimages%2fjobs.png%2f_jcr_content%2frenditions%2fthumb-mdpi.png&ehk=%2fNHsz89eih6i4eP1M6pIN218mvC1%2f%2bgM9alMHzt5GoA%3d&risl=&pid=ImgRaw&r=0"
        placeholder="Hãy nhập tên công ty tại đây"
        search={handleSearch}
        title="Tra cứu thông tin công ty phù hợp nhất với bạn thôi nào!"
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
          {data &&
            data.length > 0 &&
            data.map((item, key) => {
              return (
                <Card
                  key={key}
                  name={item.name}
                  address={item.address}
                  link={item.link}
                  email={item.email}
                />
              );
            })}
          <Row style={{ paddingTop: 20, justifyContent: "center" }}>
            <Pagination defaultCurrent={1} total={50} size="large" />;
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default SearchCompany;
