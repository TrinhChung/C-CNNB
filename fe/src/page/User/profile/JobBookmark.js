import React from "react";
import WrapSearch from "../../../component/WrapSearch";
import BoxCV from "../../../component/BoxCV";
import CustomTable from "../../../component/TableCustom";
import { Row } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import "./Profile.scss";
const JobBookmark = () => {
  const columns = [
    {
      title: "Tên công việc",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tên công ty",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Địa điểm",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Thao tác",
      align: "center",
      key: "action",
      width: 120,
      render: (text, record) => {
        return <CloseCircleOutlined className="icon-cancel" />;
      },
    },
  ];

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];
  return (
    <WrapSearch>
      <BoxCV title={"Việc làm đã lưu"} isEdit={false}>
        <Row style={{ borderTop: "2px solid black", paddingTop: 30 }}>
          <CustomTable columns={columns} dataSource={dataSource} />
        </Row>
      </BoxCV>
    </WrapSearch>
  );
};

export default JobBookmark;
