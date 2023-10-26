import React from "react";
import { Col, Row, Pagination } from "antd";
import CardWork from "./CardWork";
import RowHead from "./RowHead";

const TableResult = ({ listHead = [], dataSource }) => {
  return (
    <Row>
      <Col span={24}>
        <RowHead listHead={listHead} />
        <Row
          style={{
            border: "1px solid var(--color-main)",
            marginBottom: 40,
            width: "100%",
          }}
          className="pdx40"
        >
          {dataSource &&
            dataSource.length > 0 &&
            dataSource.map((item, index) => {
              return <CardWork contentBox={listHead} data={item} key={index} />;
            })}

          <Row
            style={{
              justifyContent: "center",
              paddingBottom: 60,
              width: "100%",
            }}
          >
            <Pagination
              defaultCurrent={1}
              total={50}
              size="large"
              style={{ paddingTop: 20 }}
            />
          </Row>
        </Row>
      </Col>
    </Row>
  );
};

export default TableResult;
