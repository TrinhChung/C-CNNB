import React, { useContext, useEffect, useState } from "react";
import ProfileHR from "./ProfileHR";
import { getInfoHr as getInfoHrService } from "../../../service/User/index";
import { Col } from "antd";
import { useParams } from "react-router-dom";
import { searchTaskHr as searchTaskHrService } from "../../../service/HR";
import { acceptHr as acceptHrService } from "../../../service/Company";
import { toast } from "react-toastify";
import { AuthContext } from "../../../provider/authProvider";

const AcceptHr = () => {
  const { authUser } = useContext(AuthContext);
  const { id } = useParams();
  const [hrInfo, setHrInfo] = useState({});
  const [tasks, setTasks] = useState([]);
  const [total, setTotal] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const getInfoHr = async (id) => {
    const res = await getInfoHrService(id);
    if (res.success === 1 && res.data) {
      setHrInfo(res.data);
    }
  };

  const acceptHr = async (data) => {
    const res = await acceptHrService(authUser?.id, data);
    if (res.success === 1) {
      toast.success("Đã duyệt");
    } else {
      toast.error("Đã xảy ra lỗi");
    }
  };

  const getTaskRecommendHR = async (id) => {
    const res = await searchTaskHrService(id, "", currentPage);
    if (res.success === 1 && res.data) {
      setTotal(res.data.total);
      if (res.data.data) {
        setTasks(res.data.data);
      }
    }
  };

  useEffect(() => {
    getInfoHr(id);
    getTaskRecommendHR(id);
  }, [id]);

  return (
    <Col span={24}>
      <ProfileHR
        data={hrInfo}
        tasks={tasks}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total={total}
        acceptHr={acceptHr}
      />
    </Col>
  );
};

export default AcceptHr;
