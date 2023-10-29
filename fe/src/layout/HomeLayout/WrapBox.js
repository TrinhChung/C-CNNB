import React, { useEffect, useState } from "react";
import { Col, Row, Pagination } from "antd";
import BoxJob from "../../component/BoxJob";
import TitleViewAll from "../../component/TitleViewAll";
import { getTask, taskRecommend } from "../../service/User";

const WrapBox = ({ title, isShowAll = true, isPagination = false }) => {
  const [task, setTasks] = useState([]);
  const [total, setTotal] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const getAllTask = async () => {
    const res = await getTask();
    if (res.success === 1 && res.data) {
      setTasks(res.data.data);
      setTotal(res.data.total);
    }
  };

  const getRecommend = async () => {
    const res = await taskRecommend();
    if (res.success === 1 && res.data) {
      setTasks(res.data.data);
    }
  };

  useEffect(() => {
    if (isShowAll === true) {
      getRecommend();
    } else {
      getAllTask();
    }
  }, [currentPage]);

  console.log(task);

  return (
    <>
      <TitleViewAll title={title} isShowAll={isShowAll} />
      <Row>
        <Col span={24}>
          {task &&
            task.length > 0 &&
            task.map((item, index) => {
              return <BoxJob data={item} size={140} key={index} />;
            })}
        </Col>
      </Row>
      {isPagination && (
        <Row style={{ justifyContent: "center" }}>
          <Pagination defaultCurrent={currentPage} total={total} />
        </Row>
      )}
    </>
  );
};

export default WrapBox;
