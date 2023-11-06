import React from "react";
import WrapSearch from "../../../component/WrapSearch";
import BoxCV from "../../../component/BoxCV";
import CustomTable from "../../../component/TableCustom";
import { Row } from "antd";
import { useEffect, useState } from "react";
import {
  getSavedTasks as getSavedTasksService,
  saveTask as saveTaskService,
} from "../../../service/User";
import "./Profile.scss";
import { columnTask } from "../../../const/columnTable";
import { buildTasks } from "../../../const/buildData";
import { useNavigate } from "react-router-dom";

const JobBookmark = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const getSavedTasks = async () => {
    const res = await getSavedTasksService();
    if (res.success === 1 && res.data) {
      setTasks(buildTasks(res.data));
    }
  };

  const saveTask = async (id) => {
    const res = await saveTaskService(id);
    if (res.success === 1) {
      getSavedTasks();
    }
  };

  useEffect(() => {
    getSavedTasks();
  }, []);

  return (
    <WrapSearch>
      <BoxCV title={"Việc làm đã lưu"} isEdit={false}>
        <Row style={{ borderTop: "2px solid black", paddingTop: 30 }}>
          <CustomTable
            columns={columnTask(saveTask, navigate)}
            dataSource={tasks}
          />
        </Row>
      </BoxCV>
    </WrapSearch>
  );
};

export default JobBookmark;
