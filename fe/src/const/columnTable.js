import { CloseCircleOutlined } from "@ant-design/icons";
import { Row } from "antd";
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
