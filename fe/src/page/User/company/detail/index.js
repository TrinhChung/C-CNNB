import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import Card from "../search/Card";
import DescriptionBox from "../../../../component/DescriptionBox";
import WrapBox from "../../../../layout/HomeLayout/WrapBox";
import { useParams } from "react-router-dom";
import { detailCompany } from "../../../../service/Company/index";
const CompanyDetail = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  const getInfoCompany = async (id) => {
    const res = await detailCompany(id);
    if (res.success === 1 && res.data) {
      setData(res.data);
    }
  };

  useEffect(() => {
    getInfoCompany(id);
  }, [id]);

  return (
    <>
      <Card
        name={data?.name}
        link={data?.link}
        address={data?.detail_address}
        total={data?.tasks_count}
        banner={true}
        email={data?.email}
        image={
          data?.image
            ? data?.image
            : "https://th.bing.com/th/id/OIP.wbmSfjRC-sAo0uGpIRYn9gHaFi?w=226&h=180&c=7&r=0&o=5&pid=1.7"
        }
      />

      <Row>
        <DescriptionBox
          name={"Giới thiệu công ty"}
          des={data?.description ? data.description : "Chua co thong tin"}
          paddingLeft={120}
        />
      </Row>

      <Col style={{ padding: "40px 10% 40px 10%" }}>
        <WrapBox
          title={"Các vị trí công ty đang đăng tuyển"}
          data={data?.tasks}
          company={data?.name}
          isShowAll={true}
          image={
            data?.image
              ? data?.image
              : "https://th.bing.com/th/id/OIP.wbmSfjRC-sAo0uGpIRYn9gHaFi?w=226&h=180&c=7&r=0&o=5&pid=1.7"
          }
          isPagination={false}
          query={{ companyId: id }}
        />
      </Col>
    </>
  );
};

export default CompanyDetail;
