import React, { useState } from "react";
import { Col, Row, Pagination } from "antd";
import BoxJob from "../../component/BoxJob";
import TitleViewAll from "../../component/TitleViewAll";
import { motion, Reorder, AnimatePresence } from "framer-motion";

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
            {data &&
              data?.length > 0 &&
              data.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ type: "spring", duration: 1 }}
                  >
                    <BoxJob data={item} image={image} size={140} key={index} />
                  </motion.div>
                );
              })}
          </AnimatePresence>
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
