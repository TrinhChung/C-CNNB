import React from "react";
import { Col, Row } from "antd";
import Banner from "../../../component/home/Banner";
import banner from "../../../assets/banner-hr-home.jpeg";
import TitleViewAll from "../../../component/TitleViewAll";
import CardUser from "../../../component/Card/CardUser";
import CardIcon from "../../../component/Card/CardIcon";
import { FileOutlined } from "@ant-design/icons";
import { useState, useEffect, useContext } from "react";
import { getInfoHr } from "../../../service/User/index";
import { AuthContext } from "../../../provider/authProvider";
import { recommendTaskHR } from "../../../service/HR/index";
import CardWork from "../work/CardWork";
import CardAnimated from "../../../component/Animation/CardAnimated";
import { listHeaderTask } from "../../../const/columnTable";
import { useNavigate } from "react-router-dom";

import "./Home.scss";
const Home = () => {
  const { authUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [info, setInfo] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [candidates, setCandidates] = useState([]);

  const redirectTask = () => {
    navigate(`/work/`);
  };

  const redirectCandidate = () => {
    navigate(`/candidate/`);
  };

  const redirectCVUser = (id) => {
    navigate(`/candidate/cv/${id}`);
  };

  useEffect(() => {
    getInfoProfile(authUser.id);
    getTaskRecommendHR(authUser.id);
  }, []);

  const getInfoProfile = async (id) => {
    const res = await getInfoHr(id);
    if (res.success === 1 && res.data) {
      setInfo(res.data);
      if (res.data.newAppliers) {
        setCandidates(res.data.newAppliers);
      }
    }
  };

  const getTaskRecommendHR = async (id) => {
    const res = await recommendTaskHR(id);
    if (res.success === 1 && res.data) {
      setTasks(res.data);
    }
  };

  const title = {
    title1: {
      title: "Vị trí",
      value: "task",
    },
    title2: {
      title: "Lĩnh vực",
      value: "category",
    },
    title3: {
      title: "Kinh nghiệm",
      value: "exp_year",
    },
  };
  return (
    <Col style={{ backgroundColor: "white" }}>
      <Banner role={1} image={banner} />
      <Col
        style={{
          padding: "40px 200px 25px 200px",
          backgroundColor: "var(--color-smoke)",
        }}
      >
        <TitleViewAll
          title={"Ứng viên tân binh"}
          redirect={redirectCandidate}
        />
        <Row
          style={{
            padding: "0 0px 65px 0px",
            gap: 30,
          }}
        >
          {candidates &&
            candidates.length > 0 &&
            candidates.map((item, i) => {
              return (
                <CardUser title={title} data={item} redirect={redirectCVUser} />
              );
            })}
        </Row>
      </Col>
      <Col
        style={{
          padding: "40px 200px 25px 200px",
          backgroundColor: "var(--color-smoke)",
        }}
      >
        <TitleViewAll title={"Bài đăng mới"} redirect={redirectTask} />
        <Row
          style={{
            justifyContent: "space-around",
            padding: "0 0px 65px 0px",
          }}
        >
          {tasks &&
            tasks.length > 0 &&
            tasks.map((item, index) => {
              return (
                <CardAnimated index={index}>
                  <CardWork
                    contentBox={listHeaderTask(navigate)}
                    data={item}
                    key={index}
                  />
                </CardAnimated>
              );
            })}
        </Row>
      </Col>
      <Row>
        <Col span={24}>
          <Row
            style={{
              paddingTop: 56,
              paddingBottom: 24,
              justifyContent: "center",
            }}
            className="title-color-main"
          >
            Hiệu quả tuyển dụng
          </Row>
          <Row
            style={{
              justifyContent: "space-around",
              padding: "0 100px 65px 100px",
            }}
          >
            <Col className="card">
              <CardIcon
                row={false}
                icon={
                  <FileOutlined
                    style={{
                      fontSize: 80,
                      color: "var(--color-main)",
                      paddingBottom: 19,
                    }}
                  />
                }
                title={"Số tin đã ứng tuyển"}
              />
            </Col>
            <Col className="card">
              <CardIcon
                row={false}
                icon={
                  <FileOutlined
                    style={{
                      fontSize: 80,
                      color: "var(--color-main)",
                      paddingBottom: 19,
                    }}
                  />
                }
                title={"Số tin đã ứng tuyển"}
              />
            </Col>
            <Col className="card">
              <CardIcon
                row={false}
                icon={
                  <FileOutlined
                    style={{
                      fontSize: 80,
                      color: "var(--color-main)",
                      paddingBottom: 19,
                    }}
                  />
                }
                title={"Số tin đã ứng tuyển"}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default Home;
