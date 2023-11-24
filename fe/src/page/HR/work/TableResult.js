import React from "react";
import { Col, Row, Pagination, Empty } from "antd";
import CardWork from "./CardWork";
import RowHead from "./RowHead";
import CardAnimated from "../../../component/Animation/CardAnimated";
import { memo } from "react";

const TableResult = ({
  listHead = [],
  dataSource,
  currentPage,
  total,
  setCurrentPage,
  isPagination = true,
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
            paddingTop: 40,
          }}
          className="pdx40"
        >
          {dataSource && dataSource.length > 0 ? (
            dataSource.map((item, index) => {
              return (
                <CardAnimated index={index}>
                  <CardWork contentBox={listHead} data={item} key={index} />
                </CardAnimated>
              );
            })
          ) : (
            <Empty style={{ paddingTop: 20, paddingBottom: 20 }} />
          )}

          {isPagination && dataSource && dataSource.length > 0 && (
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

export default memo(TableResult);
