import React from "react";
import { Button, Col, Row } from "antd";
import Banner from "./Banner";
import Detail from "./Detail";
import { getProfileUser as getProfileService } from "../../../../service/User";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { acceptApplier, rejectApplier } from "../../../../service/HR/index";
import { toast } from "react-toastify";
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
    <Col
      style={{
        backgroundColor: "white",
        padding: "30px 60px 40px 60px",
      }}
    >
      <Row>
        <Col
          span={24}
          style={{
            border: "1px solid var(--color-gray-card-user)",
            borderRadius: 10,
          }}
          className="box-shadow-bottom"
        >
          <Banner data={user} />
          <Detail data={user} />
        </Col>
      </Row>
      <Row
        style={{ marginTop: 70, justifyContent: "center", marginBottom: 70 }}
      >
        <Col span={24}>
          <Row className="fs-24 bold ">Các Job ứng viên ứng tuyển</Row>
          {user?.appliedTasks?.length > 0 &&
            user.appliedTasks.map((task, index) => {
              return task.fail === "-1" ? (
                <Row
                  style={{ alignItems: "center", gap: 10, paddingLeft: 40 }}
                  key={index}
                >
                  <Col className="fs-24 text-name-click" span={12}>
                    {task.title}
                  </Col>
                  <Col span={3}>
                    <Button
                      className="button-color-inner"
                      style={{ width: "100%" }}
                      onClick={() => {
                        handleAccept(task?.id);
                      }}
                    >
                      Chấp nhận
                    </Button>
                  </Col>
                  <Col span={3}>
                    <Button
                      className="button-job"
                      style={{ width: "100%" }}
                      onClick={() => {
                        handleReject(task?.id);
                      }}
                    >
                      Loại
                    </Button>
                  </Col>
                </Row>
              ) : (
                <></>
              );
            })}
        </Col>
      </Row>
    </Col>
  );
};

export default CV;
