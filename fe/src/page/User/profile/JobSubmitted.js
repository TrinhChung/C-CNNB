import React, { useState, useEffect } from "react";
import WrapSearch from "../../../component/WrapSearch";
import BoxCV from "../../../component/BoxCV";
import CustomTable from "../../../component/TableCustom";
import { Row } from "antd";
import {
  getAppliedTasks as getAppliedTasksService,
  applyTask as applyTaskService,
} from "../../../service/User";
import { columnTask } from "../../../const/columnTable";
import { buildTasks } from "../../../const/buildData";
import { useNavigate } from "react-router-dom";

const JobSubmitted = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const getAppliedTasks = async () => {
    const res = await getAppliedTasksService();
    if (res.success === 1 && res.data) {
      setTasks(buildTasks(res.data));
    }
  };

  const applyTask = async (id) => {
    const res = await applyTaskService(id);
    if (res.success === 1) {
      getAppliedTasks();
    }
  };

  useEffect(() => {
    getAppliedTasks();
  }, []);

  return (
    <WrapSearch>
      <BoxCV title={"Việc làm đã nộp"} isEdit={false}>
        <Row style={{ borderTop: "2px solid black", paddingTop: 30 }}>
          <CustomTable
            columns={[...columnTask(applyTask, navigate, true)]}
            dataSource={tasks}
          />
        </Row>
      </BoxCV>
    </WrapSearch>
  );
};

export default JobSubmitted;
