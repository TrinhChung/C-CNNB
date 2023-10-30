import React, { useEffect, useState } from "react";
import Banner from "../../../component/home/Banner";
import { Row, Col, Image } from "antd";
import WrapBox from "../../../layout/HomeLayout/WrapBox";
import TopJob from "./topJob";
import logo from "../../../assets/blob.jpeg";
import banner2 from "../../../assets/banner-home-2.jpeg";
import { useNavigate } from "react-router-dom";
import { taskRecommend } from "../../../service/User";

const Home = () => {
  const navigate = useNavigate();
  const [task, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getRecommend = async () => {
    const res = await taskRecommend();
    if (res.success === 1 && res.data) {
      setTasks(res.data);
    }
  };

  useEffect(() => {
    getRecommend();
  }, [currentPage]);

  const handleSearch = (key) => {
    if (!key) {
      navigate(`/job/`);
    } else {
      navigate(`/job/?text=${key}`);
    }
  };

  return (
    <Col>
      <Banner
        role={0}
        image="https://th.bing.com/th/id/R.1c441b4605dc3fe87a01740c9c8d6ae4?rik=DUQoPEyqXdm%2fvA&riu=http%3a%2f%2finap.gouvernement.lu%2fdam-assets%2fimages%2fjobs.png%2f_jcr_content%2frenditions%2fthumb-mdpi.png&ehk=%2fNHsz89eih6i4eP1M6pIN218mvC1%2f%2bgM9alMHzt5GoA%3d&risl=&pid=ImgRaw&r=0"
        search={handleSearch}
      />
      <Col style={{ padding: "40px 10% 40px 10%" }}>
        <WrapBox
          currentPage={currentPage}
          data={task}
          title={"Tin tuyển dụng, việc làm tốt nhất"}
        />
      </Col>
      <Row style={{ height: 200, justifyContent: "center" }}>
        <Image src={banner2} preview={false} style={{ height: 130 }} />
      </Row>
      <TopJob />
      <Banner role={2} image={logo} />
    </Col>
  );
};

export default Home;
