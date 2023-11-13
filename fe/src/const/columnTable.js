import {
  CloseCircleOutlined,
  DollarCircleOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Row, Col, Image, Button, Badge } from "antd";
import { statusApply } from ".";
import { buildSalary } from "./BuildSalaray";
export const columnTask = (handler, navigate, isStatus = false) => {
  if (isStatus) {
    return [
      {
        title: "Tên công việc",
        render: (text, record) => {
          return (
            <Row
              className="text-name-click bold fs-20"
              onClick={() => {
                navigate(`/job/detail/${record?.id}`);
              }}
            >
              {record.title}
            </Row>
          );
        },
        dataIndex: "title",
        key: "title",
        col: 12,
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
        title: "Trạng thái",
        dataIndex: "status",
        key: "status",
        render: (text, record) => {
          return <Row>{statusApply[Number(record?.fail) + 1].label}</Row>;
        },
      },
      {
        title: "Thao tác",
        align: "center",
        key: "action",
        width: 120,
        render: (text, record) => {
          return (
            <CloseCircleOutlined
              className="icon-cancel"
              onClick={() => {
                handler(record?.id);
              }}
            />
          );
        },
      },
    ];
  } else {
    return [
      {
        title: "Tên công việc",
        render: (text, record) => {
          return (
            <Row
              className="text-name-click bold fs-20"
              onClick={() => {
                navigate(`/job/detail/${record?.id}`);
              }}
            >
              {record.title}
            </Row>
          );
        },
        dataIndex: "title",
        key: "title",
        col: 12,
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
          return (
            <CloseCircleOutlined
              className="icon-cancel"
              onClick={() => {
                handler(record?.id);
              }}
            />
          );
        },
      },
    ];
  }
};

export const listHeaderTask = (navigate = () => {}) => {
  return [
    {
      title: "Tiêu đề, tên công việc",
      col: 9,
      render: (data) => {
        return (
          <Row style={{ paddingLeft: 30 }}>
            <Col span={24} style={{ justifyContent: "center" }}>
              <Row className="title-color-main">
                <Col
                  style={{ fontSize: 30, paddingRight: 22 }}
                  className="text-name-click"
                >
                  {data?.title}
                </Col>
                <Col style={{ display: "flex", alignItems: "center" }}>
                  <Badge
                    color="#f50"
                    text={
                      data?.status && data.status === "1"
                        ? "Đang tuyển"
                        : "Đã kết thúc"
                    }
                    style={{ color: "#f50" }}
                  />
                </Col>
              </Row>
              <Row style={{ paddingTop: 27 }} className="color-main">
                <Col>
                  <DollarCircleOutlined />
                </Col>
                <Col>
                  Lương: {buildSalary(data?.salary_min, data?.salary_max)}
                </Col>
              </Row>
              <Row style={{ paddingTop: 9 }}>
                <Col>
                  <EnvironmentOutlined />
                </Col>
                <Col>Nơi làm việc: {data?.address?.name}</Col>
              </Row>
            </Col>
          </Row>
        );
      },
    },
    {
      title: "Số người ứng tuyển",
      col: 4,
      render: (data) => {
        return (
          <Row>
            <Col span={24}>
              <Row style={{ justifyContent: "center" }} className="fs-16">
                {data.amount}
              </Row>
              <Row
                style={{ justifyContent: "center", fontWeight: "bold" }}
                className="fs-16"
              >
                Người ứng tuyển
              </Row>
            </Col>
          </Row>
        );
      },
    },
    {
      title: "Thời gian tuyển",
      col: 7,
      render: (data) => {
        return (
          <Row style={{ justifyContent: "center" }} className="fs-16">
            {"Từ ngày " + data?.start + " đến " + data?.end}
          </Row>
        );
      },
    },
    {
      title: "Thao tác",
      col: 4,
      borderRight: false,
      render: (data) => {
        return (
          <Row style={{ justifyContent: "center" }}>
            <Button
              className="button-job"
              style={{ width: "80%", height: 50 }}
              onClick={() => {
                navigate(`/work/task/edit/${data?.id}`);
              }}
            >
              Chi tiết
            </Button>
          </Row>
        );
      },
    },
  ];
};
