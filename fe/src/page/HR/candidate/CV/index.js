import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { acceptApplier, rejectApplier } from "../../../../service/HR/index";
import { toast } from "react-toastify";
import CVUser from "./CVUser";
const CV = () => {
  const { id } = useParams();
  const [change, setChange] = useState(false);

  const handleAccept = async (taskId) => {
    const data = {
      task_id: [taskId],
      applier_id: id,
    };
    const res = await acceptApplier(data);
    if (res.success === 1) {
      toast.success("Đã duyệt hồ sơ");
      setChange(!change);
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
      setChange(!change);
    } else {
      toast.error("Đã xảy ra lỗi");
    }
  };

  return (
    <CVUser
      id={id}
      handleAccept={handleAccept}
      handleReject={handleReject}
      change={change}
    />
  );
};

export default CV;
