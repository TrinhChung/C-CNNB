import React, { useEffect } from "react";
import { Col, Row } from "antd";
import BannerJob from "./BannerJob";
import "./Job.scss";
import BoxJobSider from "./BoxJobSider";
import { CalendarOutlined } from "@ant-design/icons";
import Card from "./Card";
import HRInfo from "./HRInfo";
import ButtonSub from "./ButtonSub";
import DescriptionBox from "../../../../component/DescriptionBox";
import { useParams } from "react-router-dom";
import { getInfoTask } from "../../../../service/User/index";
import { useState } from "react";
import moment from "moment";
import { buildSalary } from "../../../../const/BuildSalaray";
import { arrayToString } from "../../../../const/arrayToString";

const JobDetail = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({});

  const getDetail = async (id) => {
    const res = await getInfoTask(id);
    if (res.success && res.data) {
      setInfo(res.data);
    }
  };

  useEffect(() => {
    getDetail(id);
  }, []);

  return (
    <Col span={24}>
      <BannerJob data={info} />
      <Row>
        <Col span={16} style={{ paddingLeft: 80 }}>
          <Row>
            <DescriptionBox name={"Mô tả công việc"} des={info?.description} />
          </Row>
          <Row>
            <DescriptionBox name={"Yêu cầu"} des={info?.requiment} />
          </Row>
          <Row>
            <DescriptionBox name={"Đãi nghộ"} des={info?.benefit} />
          </Row>
          <Row>
            <DescriptionBox
              name={"Giới thiệu công ty"}
              des={info?.company?.description}
            />
          </Row>
          <Row style={{ gap: 16, paddingLeft: 20 }}>
            <ButtonSub isCol={false} />
          </Row>
        </Col>
        <Col span={8} style={{ paddingLeft: 40 }}>
          <Row>
            <BoxJobSider title={"Tổng quan công việc"}>
              <Col span={24}>
                <Card
                  icon={<CalendarOutlined />}
                  title="Ngày đăng "
                  des={moment(info?.updated_at).calendar()}
                />
                <Card
                  icon={<CalendarOutlined />}
                  title="Địa chỉ "
                  des={info?.address?.name}
                />
                <Card
                  icon={<CalendarOutlined />}
                  title="Mức lương"
                  des={buildSalary(info.salary_min, info.salary_max)}
                />
                <Card
                  icon={<CalendarOutlined />}
                  title="Kinh nghiệm "
                  des={
                    info && info.exp_year && info.exp_year.content
                      ? info.exp_year.content
                      : "Không yêu cầu kinh nghiệm"
                  }
                />
                <Card
                  icon={<CalendarOutlined />}
                  title="Loại hình làm việc "
                  des={
                    info.types ? arrayToString(info.types) : "Chưa có dữ liệu"
                  }
                />
                <Card
                  icon={<CalendarOutlined />}
                  title="Thời gian bắt đầu"
                  des={info.start}
                />
                <Card
                  icon={<CalendarOutlined />}
                  title="Thời gian kết thúc"
                  des={info.end}
                />
              </Col>
            </BoxJobSider>
          </Row>
          <Row>
            <BoxJobSider title={"Thông tin quản lý nhân sự"}>
              <HRInfo data={info.hr ? info.hr : null} />
            </BoxJobSider>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default JobDetail;
