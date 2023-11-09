import React from "react";
import { Col, Row, Pagination, Empty } from "antd";
import CardWork from "./CardWork";
import RowHead from "./RowHead";

const TableResult = ({
  listHead = [],
  dataSource,
  currentPage,
  total,
  setCurrentPage,
}) => {
  return (
    <Row>
      <Col span={24}>
        <RowHead listHead={listHead} />
        <Row
          style={{
            border: "1px solid var(--color-main)",
            marginBottom: 40,
            width: "100%",
            justifyContent: "center",
          }}
          className="pdx40"
        >
          {dataSource && dataSource.length > 0 ? (
            dataSource.map((item, index) => {
              return <CardWork contentBox={listHead} data={item} key={index} />;
            })
          ) : (
            <Empty style={{ paddingTop: 20, paddingBottom: 20 }} />
          )}

          {dataSource && dataSource.length > 0 && (
            <Row
              style={{
                justifyContent: "center",
                paddingBottom: 60,
                width: "100%",
              }}
            >
              <Pagination
                defaultCurrent={currentPage}
                total={total}
                size="large"
                style={{ paddingTop: 20 }}
                onChange={(e) => {
                  setCurrentPage(e);
                }}
              />
            </Row>
          )}
        </Row>
      </Col>
    </Row>
  );
};

export default TableResult;
