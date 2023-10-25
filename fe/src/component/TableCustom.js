import { Table } from "antd";

export default function CustomTable({
  dataSource,
  columns,
  paginationProps = { pageSizeOptions: [5, 10, 20] },
  rowSelection,
}) {
  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <Table
        className="custom-table"
        bordered
        dataSource={[...dataSource]}
        style={{ width: "100%", overflowX: "auto" }}
        columns={columns}
        pagination={paginationProps}
        rowSelection={rowSelection}
      />
    </div>
  );
}
