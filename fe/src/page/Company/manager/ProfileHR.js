import { Col, Row, Image, Button } from "antd";
import React from "react";
import TextHorizontal from "../../HR/candidate/CV/TextHorizontal";
import { MailOutlined } from "@ant-design/icons";
import TitleViewAll from "../../../component/TitleViewAll";
import { listHeaderTask } from "../../../const/columnTable";
import { useNavigate } from "react-router-dom";
import TableResult from "../../HR/work/TableResult";
import { useState, useEffect } from "react";
import { searchTaskHr as searchTaskHrService } from "../../../service/HR";
import { getInfoHr as getInfoHrService } from "../../../service/User/index";

const ProfileHR = ({ acceptHr = () => {}, id }) => {
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [tasks, setTasks] = useState([]);
  const [total, setTotal] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const redirectTask = () => {
    navigate(`/work/`);
  };

  const getTaskRecommendHR = async (id) => {
    const res = await searchTaskHrService(id, "", currentPage);
    if (res.success === 1 && res.data) {
      setTotal(res.data.total);
      if (res.data.data) {
        setTasks(res.data.data);
      }
    }
  };

  const getInfoHr = async (id) => {
    const res = await getInfoHrService(id);
    if (res.success === 1 && res.data) {
      setData(res.data);
    }
  };

  useEffect(() => {
    getTaskRecommendHR(id);
    getInfoHr(id);
  }, [id]);

  return (
    <Col>
      <Row
        className="box-shadow-bottom background-color-main"
        style={{ borderRadius: "10px 10px 0 0" }}
      >
        <Col span={24}>
          <Row style={{ alignItems: "center" }}>
            <Col span={16} style={{ padding: "30px 0 30px 0" }}>
              <Row
                style={{
                  alignItems: "center",
                  color: "white",
                  borderRight: "1px solid white",
                }}
              >
                <Col
                  style={{
                    padding: "0 75px 0px 75px",
                    borderRadius: "50%",
                  }}
                >
                  <Image
                    src={
                      data?.image
                        ? data.image
                        : "https://th.bing.com/th/id/OIP.qdSbn0McRHkJEzYu5_cAWgHaI9?pid=ImgDet&w=100&h=100&c=7"
                    }
                    style={{ height: 216, width: 216, borderRadius: "50%" }}
                    preview={false}
                  />
                </Col>
                <Col>
                  <Row
                    style={{
                      fontSize: 40,
                      fontWeight: "bold",
                      paddingBottom: 24,
                    }}
                  >
                    {data?.fullname}
                  </Row>

                  <Row className="fs-20" style={{ paddingBottom: 8 }}>
                    Năm sinh: {data?.birth_year?.content}
                  </Row>
                  <Row className="fs-20" style={{ paddingBottom: 8 }}>
                    Giới tính:{" "}
                    {data?.gender
                      ? data.gender === "1"
                        ? "Nam"
                        : "Nữ"
                      : "Không xác định"}
                  </Row>
                  <Row style={{ paddingBottom: 16 }}>
                    <TextHorizontal
                      title={
                        <Row style={{ fontSize: 20 }}>
                          <Col style={{ paddingRight: 6 }}>
                            <MailOutlined className="fs-20" />
                          </Col>
                          <Col className="fs-20">Email: </Col>
                        </Row>
                      }
                      value={data?.email}
                    />
                  </Row>
                </Col>
              </Row>
            </Col>
            {data?.hraccepted !== "1" && (
              <Col span={8}>
                <Row style={{ justifyContent: "center" }}>
                  <Col span={10}>
                    <Row>
                      <Button
                        className="button-color-inner fs-20"
                        style={{ width: "100%", height: 50, marginBottom: 20 }}
                        onClick={() => {
                          acceptHr({ action: "accept" });
                        }}
                      >
                        Duyệt
                      </Button>
                    </Row>
                    <Row>
                      <Button
                        className="button-error fs-20"
                        style={{ width: "100%", height: 50, marginBottom: 20 }}
                        onClick={() => {
                          acceptHr({ action: "reject" });
                        }}
                      >
                        Loại bỏ
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
      {data?.hraccepted === "1" && (
        <Col
          style={{
            padding: "40px 200px 25px 200px",
            backgroundColor: "var(--color-smoke)",
          }}
        >
          <TitleViewAll
            title={"Bài đăng của HR"}
            redirect={redirectTask}
            isShowAll={false}
          />
          <TableResult
            listHead={listHeaderTask(navigate)}
            dataSource={tasks}
            total={total}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Col>
      )}
    </Col>
  );
};

export default ProfileHR;
