import React from "react";
import { Col, Input, Select, Row, Image } from "antd";
import BoxSearch from "../../work/BoxSearch";
import TableResult from "../../work/TableResult";
import { LockOutlined, EditOutlined, CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const listInput = [
    { title: "Từ khóa tìm kiếm", input: <Input style={{ width: "90%" }} /> },
    { title: "Tìm theo công việc", input: <Select style={{ width: "90%" }} /> },
    {
      title: "Địa chỉ nơi sống",
      input: <Select style={{ width: "90%" }} />,
    },
    {
      title: "Số năm kinh nghiệm",
      input: <Select style={{ width: "90%" }} />,
    },
  ];

  const data = [
    {
      image:
        "https://th.bing.com/th/id/OIP.GXbwyfVCv6S8vyx667VBwgHaFR?w=224&h=180&c=7&r=0&o=5&pid=1.7",
      name: "Doãn Đại Hiệp",
      costHope: "5.000.000 - 10.000.000",
      address: "Võ đang",
      exp: "4",
      positionApp: "Trưởng môn",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.GXbwyfVCv6S8vyx667VBwgHaFR?w=224&h=180&c=7&r=0&o=5&pid=1.7",
      name: "Doãn Đại Hiệp",
      costHope: "5.000.000 - 10.000.000",
      address: "Võ đang",
      exp: "4",
      positionApp: "Trưởng môn",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.GXbwyfVCv6S8vyx667VBwgHaFR?w=224&h=180&c=7&r=0&o=5&pid=1.7",
      name: "Doãn Đại Hiệp",
      costHope: "5.000.000 - 10.000.000",
      address: "Võ đang",
      exp: "4",
      positionApp: "Trưởng môn",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.GXbwyfVCv6S8vyx667VBwgHaFR?w=224&h=180&c=7&r=0&o=5&pid=1.7",
      name: "Doãn Đại Hiệp",
      costHope: "5.000.000 - 10.000.000",
      address: "Võ đang",
      exp: "4",
      positionApp: "Trưởng môn",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.GXbwyfVCv6S8vyx667VBwgHaFR?w=224&h=180&c=7&r=0&o=5&pid=1.7",
      name: "Doãn Đại Hiệp",
      costHope: "5.000.000 - 10.000.000",
      address: "Võ đang",
      exp: "4",
      positionApp: "Trưởng môn",
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
                src={data.image}
                preview={false}
              />
            </Col>
            <Col span={16}>
              <Row
                className="h2-color-main text-name-click"
                style={{ paddingBottom: 23 }}
                onClick={() => {
                  navigate(`cv/1`);
                }}
              >
                {data.name}
              </Row>
              <Row
                className="color-main"
                style={{ paddingBottom: 9, fontSize: 16 }}
              >
                Mức lương mong muốn: {data.costHope}
              </Row>
              <Row style={{ paddingBottom: 9, fontSize: 16 }}>
                Nơi sinh sống: {data.address}
              </Row>
              <Row style={{ fontSize: 16 }}>
                Số năm kinh nghiệm: {data.exp} năm
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
              {data.positionApp}
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

  const handlerSearch = () => {
    console.log("searching");
  };

  return (
    <Col className="layout-container box-shadow-bottom">
      <BoxSearch listInput={listInput} search={handlerSearch} />
      <TableResult dataSource={data} listHead={listHead} />
    </Col>
  );
};

export default Search;
