import React, { useEffect, useState } from "react";
import ProfileHR from "./ProfileHR";
import { getInfoHr as getInfoHrService } from "../../../service/User/index";
import { Col } from "antd";
import { useParams } from "react-router-dom";
import { acceptHr as acceptHrService } from "../../../service/Company";
import { toast } from "react-toastify";

const AcceptHr = () => {
  const { id } = useParams();
  const [hrInfo, setHrInfo] = useState({});
  const [change, setChange] = useState(false);

  const acceptHr = async (data) => {
    const res = await acceptHrService(id, data);
    if (res.success === 1) {
      toast.success("Đã duyệt");
      setChange(!change);
    } else {
      toast.error("Đã xảy ra lỗi");
    }
  };

  return (
    <Col span={24}>
      <ProfileHR acceptHr={acceptHr} id={id} />
    </Col>
  );
};

export default AcceptHr;
