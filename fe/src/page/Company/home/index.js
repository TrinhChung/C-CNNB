import React from "react";
import { Col, Row, Image } from "antd";
import Banner from "../../../component/home/Banner";
import imageBanner from "../../../assets/banner-company.jpeg";
import imageBanner2 from "../../../assets/banner-company-2.jpeg";

import TitleViewAll from "../../../component/TitleViewAll";
import CardUser from "../../../component/Card/CardUser";
import WrapBox from "../../../layout/HomeLayout/WrapBox";
import { getInfoCompany } from "../../../service/Company/index";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../provider/authProvider";
import { useNavigate } from "react-router-dom";
import CardWork from "../../HR/work/CardWork";
import CardAnimated from "../../../component/Animation/CardAnimated";
import { listHeaderTask } from "../../../const/columnTable";
const Home = () => {
  const { authUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [info, setInfo] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [hrs, setHrs] = useState([]);

  const title = {
    title1: {
      title: "",
      value: "task",
    },
    title2: {
      title: "Số task đã đăng",
      value: "managed_tasks_count",
    },
    title3: {
      title: "Email",
      value: "email",
    },
  };

  const getInfoProfile = async (id) => {
    const res = await getInfoCompany(id);
    if (res.success === 1 && res.data) {
      setInfo(res.data);
      if (res.data.managed_hrs) {
        setHrs(res.data.managed_hrs);
      }
      if (res.data.tasks) {
        setTasks(res.data.tasks);
      }
    }
  };

  useEffect(() => {
    getInfoProfile(authUser.id);
  }, []);

  const redirectTask = () => {
    navigate(`/work/`);
  };

  const redirectHr = () => {
    navigate(`/manager/`);
  };

  return (
    <Col style={{ backgroundColor: "white" }}>
      <Banner role={2} image={imageBanner} />
      <Col
        style={{
          padding: "40px 200px 25px 200px",
          backgroundColor: "white",
        }}
      >
        <TitleViewAll title={"Quản lý HR"} redirect={redirectHr} />
        <Row
          style={{
            justifyContent: "flex-start",
            gap: 20,
            padding: "0 0px 65px 0px",
          }}
        >
          {hrs &&
            hrs.length > 0 &&
            hrs.map((item, i) => {
              console.log(item);
              return (
                <CardUser
                  title={title}
                  data={item}
                  redirect={() => {
                    navigate(`/manager/detail/${item.id}`);
                  }}
                />
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
      <Image src={imageBanner2} preview={false} width={"100%"} />
    </Col>
  );
};

export default Home;
