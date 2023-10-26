import React from "react";
import Banner from "../../../component/Banner";
import { Row, Col, Image } from "antd";
import WrapBox from "../../../layout/HomeLayout/WrapBox";
import TopJob from "./topJob";
import logo from "../../../assets/blob.jpeg";
import banner2 from "../../../assets/banner-home-2.jpeg";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleSearch = (key) => {
    navigate(`/job/${key}`);
  };

  return (
    <Col>
      <Banner
        role={0}
        image="https://th.bing.com/th/id/R.1c441b4605dc3fe87a01740c9c8d6ae4?rik=DUQoPEyqXdm%2fvA&riu=http%3a%2f%2finap.gouvernement.lu%2fdam-assets%2fimages%2fjobs.png%2f_jcr_content%2frenditions%2fthumb-mdpi.png&ehk=%2fNHsz89eih6i4eP1M6pIN218mvC1%2f%2bgM9alMHzt5GoA%3d&risl=&pid=ImgRaw&r=0"
        search={handleSearch}
      />
      <Col style={{ padding: "40px 10% 40px 10%" }}>
        <WrapBox title={"Tin tuyển dụng, việc làm tốt nhất"} />
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
