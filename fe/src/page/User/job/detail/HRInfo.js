import { Row, Image, Col } from "antd";
import React from "react";
import { gender } from "../../../../const";
import avatarUser from "../../../../assets/avatar-user.png";
const HRInfo = ({ data, company = {} }) => {
  const RowHorizontal = ({ title, des }) => {
    return (
      <Row
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <Col style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Col>
        <Col style={{ fontSize: 20 }}>{des}</Col>
      </Row>
    );
  };
  return (
    <Col span={24}>
      <Row style={{ paddingBottom: 40 }}>
        <Col>
          <Image
            src={data && data.image ? data.image : avatarUser}
            style={{ height: 100, width: 100 }}
          />
        </Col>
        <Col style={{ paddingLeft: 13 }}>
          <Row style={{ fontSize: 24, fontWeight: "bold", paddingBottom: 10 }}>
            {data?.fullname}
          </Row>
          <Row>{company?.name ? company.name : "Tên công ty"}</Row>
        </Col>
      </Row>
      <RowHorizontal title={"Ngày tháng năm sinh: "} des={data?.birth_year} />
      <RowHorizontal
        title={"Giới tính: "}
        des={
          data?.gender ? gender[Number(data.gender) + 1].label : gender[0].label
        }
      />
      <RowHorizontal title={"Số điện thoại: "} des="0972409880" />
      <RowHorizontal title={"Email: "} des={data?.email} />
    </Col>
  );
};

export default HRInfo;
