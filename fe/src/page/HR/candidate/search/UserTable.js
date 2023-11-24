import React, { memo } from "react";
import TableResult from "../../work/TableResult";
import { useNavigate } from "react-router-dom";
import { Row, Col, Image, Button } from "antd";
const UserTable = ({ currentPage, setCurrentPage, total, users }) => {
  const navigate = useNavigate();

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
                src={
                  data?.image
                    ? data.image
                    : "https://th.bing.com/th/id/OIP.qdSbn0McRHkJEzYu5_cAWgHaI9?pid=ImgDet&w=100&h=100&c=7"
                }
                preview={false}
              />
            </Col>
            <Col span={16}>
              <Row
                className="h2-color-main text-name-click"
                style={{ paddingBottom: 23 }}
                onClick={() => {
                  navigate(`/candidate/cv/${data?.id}`);
                }}
              >
                {data.fullname}
              </Row>
              <Row
                className="color-main"
                style={{ paddingBottom: 9, fontSize: 16 }}
              >
                {data.email}
              </Row>
              <Row style={{ paddingBottom: 9, fontSize: 16 }}>
                Nơi sinh sống: {data?.profile.address?.name}
              </Row>
              <Row style={{ fontSize: 16 }}>
                Số năm kinh nghiệm: {data?.profile?.exp_year?.content}
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
              {data.profile.category.content}
            </Col>
          </Row>
        );
      },
    },

    {
      title: "Thao tác",
      col: 2,
      borderRight: false,
      render: (data) => {
        return (
          <Row style={{ justifyContent: "center" }}>
            <Button
              className="button-job"
              onClick={() => {
                navigate(`/candidate/cv/${data.id}`);
              }}
            >
              Xem ngay
            </Button>
          </Row>
        );
      },
    },
  ];

  return (
    <TableResult
      dataSource={users}
      listHead={listHead}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      total={total}
    />
  );
};

export default memo(UserTable);
