import React from "react";
import { Col, Row, Pagination, Empty } from "antd";
import BoxJob from "../../component/BoxJob";
import TitleViewAll from "../../component/TitleViewAll";
import { AnimatePresence } from "framer-motion";
import CardAnimated from "../../component/Animation/CardAnimated";
const WrapBox = ({
  data = [],
  title,
  isShowAll = true,
  isPagination = false,
  total = 1,
  currentPage = 1,
  image = "",
  query = {},
  setCurrentPage = () => {},
}) => {
  return (
    <>
      <TitleViewAll title={title} isShowAll={isShowAll} query={query} />
      <Row>
        <Col span={24}>
          <AnimatePresence initial={false}>
            {data && data?.length > 0 ? (
              data.map((item, index) => {
                return (
                  <CardAnimated index={index}>
                    <BoxJob data={item} image={image} size={140} key={index} />
                  </CardAnimated>
                );
              })
            ) : (
              <Empty />
            )}
          </AnimatePresence>
        </Col>
      </Row>
      {isPagination && data && data?.length > 0 && (
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
