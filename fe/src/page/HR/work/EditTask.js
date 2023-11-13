import { Col, Row, Form } from "antd";
import React, { useState, useEffect } from "react";
import FormRecruit from "../recruit/FormRecruit";
import { getInfoTask } from "../../../service/User/index";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { buildCategories } from "../../../const/buildData";
import { editTask as editTaskService } from "../../../service/HR/index";
import { toast } from "react-toastify";
import UserTable from "../candidate/search/UserTable";
import { getAppliersOfTask as getAppliersOfTaskService } from "../../../service/HR";
const EditTask = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [change, setChange] = useState(false);
  const [info, setInfo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [users, setUsers] = useState([]);

  const getDetail = async (id) => {
    const res = await getInfoTask(id);
    if (res.success && res.data) {
      setInfo(res.data);
      const { start, end, types, ...data } = res.data;
      const buildData = {
        ...data,
        start: dayjs(new Date(start)),
        end: dayjs(new Date(end)),
        types: buildCategories(types, false),
      };
      form.setFieldsValue(buildData);
    }
  };

  const editTask = async () => {
    const res = await editTaskService(id, form.getFieldsValue());
    if (res.success === 1) {
      toast.success("Update thành công");
    } else {
      toast.error("Đã xảy ra lỗi");
    }
  };

  useEffect(() => {
    getDetail(id);
    form.resetFields();
  }, [change]);

  useEffect(() => {
    if (info) {
      getAppliersOfTask();
    }
  }, [info]);

  const getAppliersOfTask = async () => {
    const res = await getAppliersOfTaskService(info?.id);
    if (res.success === 1 && res.data) {
      if (res.data.data) {
        setUsers(res.data.data);
      }
      setTotal(res.data?.total);
    }
  };

  return (
    <Col>
      <Row>
        <Col span={24}>
          <Form form={form}>
            <FormRecruit
              isEdit={true}
              onCancel={() => {
                setChange(!change);
              }}
              onSubmit={editTask}
            />
          </Form>
        </Col>
      </Row>
      <Col className="layout-container box-shadow-bottom" span={24}>
        <UserTable
          users={users}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          total={total}
        />
      </Col>
    </Col>
  );
};

export default EditTask;
