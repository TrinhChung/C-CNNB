import React from "react";
import { Button, Col, Row } from "antd";
import Banner from "./Banner";
import Detail from "./Detail";
import { getProfileUser as getProfileService } from "../../../../service/User";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { acceptApplier, rejectApplier } from "../../../../service/HR/index";
import { toast } from "react-toastify";
import CVUser from "./CVUser";
const CV = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  const getInfoProfile = async (id) => {
    const res = await getProfileService(id);
    if (res.success === 1 && res.data) {
      setUser(res.data);
    }
  };

  useEffect(() => {
    getInfoProfile(id);
  }, []);

  const handleAccept = async (taskId) => {
    const data = {
      task_id: [taskId],
      applier_id: id,
    };
    const res = await acceptApplier(data);
    if (res.success === 1) {
      toast.success("Đã duyệt hồ sơ");
      getInfoProfile(id);
    } else {
      toast.error("Đã xảy ra lỗi");
    }
  };

  const handleReject = async (taskId) => {
    const data = {
      task_id: [taskId],
      applier_id: id,
    };
    const res = await rejectApplier(data);
    if (res.success === 1) {
      toast.success("Đã loại hồ sơ");
      getInfoProfile(id);
    } else {
      toast.error("Đã xảy ra lỗi");
    }
  };

  return (
    <CVUser id={id} handleAccept={handleAccept} handleReject={handleReject} />
  );
};

export default CV;
