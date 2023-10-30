import React from "react";
import { Col, Row, Pagination } from "antd";
import BoxJob from "../../component/BoxJob";
import TitleViewAll from "../../component/TitleViewAll";

const WrapBox = ({
  data = [],
  title,
  isShowAll = true,
  isPagination = false,
  total = 1,
  currentPage = 1,
  image = "",
  setCurrentPage = () => {},
}) => {
  return (
    <>
      <TitleViewAll title={title} isShowAll={isShowAll} />
      <Row>
        <Col span={24}>
          {data &&
            data?.length > 0 &&
            data.map((item, index) => {
              return (
                <BoxJob data={item} image={image} size={140} key={index} />
              );
            })}
        </Col>
      </Row>
      {isPagination && (
        <Row style={{ justifyContent: "center" }}>
          <Pagination
            defaultCurrent={currentPage}
            total={total}
            onChange={(page) => {
              setCurrentPage(page);
            }}
          />
        </Row>
      )}
    </>
  );
};

export default WrapBox;
