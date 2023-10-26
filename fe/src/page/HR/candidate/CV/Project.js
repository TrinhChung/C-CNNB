import React from "react";
import { Row, Col } from "antd";

const Project = () => {
  const data = [
    {
      companyName: "ABC",
      members: 3,
      timeStart: "03/03/2023",
      timeEnd: "03/03/2023",
      tech: "NodeJs",
      des: `Dự án là một tập hợp các hoạt động có liên quan đến nhau được thực hiện trong một khoảng thời gian có hạn, với những nguồn lực đã được giới hạn; nhất là nguồn tài chính có giới hạn để đạt được những mục tiêu cụ thể, rõ ràng, làm thỏa mãn nhu cầu của đối tượng mà dự án hướng đến. Thực chất, Dự án là tổng thể những chính sách, hoạt động và chi phí liên quan với nhau được thiết kế nhằm đạt được những mục tiêu nhất định trong một thời gian nhất định.
Dự án bao gồm dự án đầu tư và dự án hỗ trợ kỹ thuật sản phẩm phải được đánh giá cao và chất lượng.`,
    },
    {
      companyName: "ABC",
      members: 3,
      timeStart: "03/03/2023",
      timeEnd: "03/03/2023",
      tech: "NodeJs",
      des: `Dự án là một tập hợp các hoạt động có liên quan đến nhau được thực hiện trong một khoảng thời gian có hạn, với những nguồn lực đã được giới hạn; nhất là nguồn tài chính có giới hạn để đạt được những mục tiêu cụ thể, rõ ràng, làm thỏa mãn nhu cầu của đối tượng mà dự án hướng đến. Thực chất, Dự án là tổng thể những chính sách, hoạt động và chi phí liên quan với nhau được thiết kế nhằm đạt được những mục tiêu nhất định trong một thời gian nhất định.
Dự án bao gồm dự án đầu tư và dự án hỗ trợ kỹ thuật sản phẩm phải được đánh giá cao và chất lượng.`,
    },
  ];
  return (
    <Col span={18}>
      <Row
        className="title-color-main"
        style={{ borderBottom: "1px solid var(--color-main)" }}
      >
        Các dự án đã tham gia
      </Row>
      <Row style={{ minHeight: 100 }}>
        <Col span={24}>
          {data &&
            data.length > 0 &&
            data.map((item, index) => {
              return (
                <Row key={index} style={{ paddingBottom: 5, paddingTop: 15 }}>
                  <Col span={2} className="h2-color-main">
                    {index + 1}
                  </Col>
                  <Col span={22} className="fs-20">
                    <Row>
                      <Col className="fs-20 bold" style={{ paddingRight: 6 }}>
                        Công ty:{" "}
                      </Col>
                      <Col className="fs-20">{item.companyName}</Col>
                    </Row>
                    <Row>
                      <Col className="fs-20 bold" style={{ paddingRight: 6 }}>
                        Số lượng thành viên:{" "}
                      </Col>
                      <Col className="fs-20">{item.members}</Col>
                    </Row>
                    <Row>
                      <Col className="fs-20 bold" style={{ paddingRight: 6 }}>
                        Thời gian bắt đầu:{" "}
                      </Col>
                      <Col className="fs-20">{item.timeStart}</Col>
                    </Row>
                    <Row>
                      <Col className="fs-20 bold" style={{ paddingRight: 6 }}>
                        Thời gian kết thúc:{" "}
                      </Col>
                      <Col className="fs-20">{item.timeEnd}</Col>
                    </Row>
                    <Row style={{ paddingBottom: 23 }}>
                      <Col className="fs-20 bold" style={{ paddingRight: 6 }}>
                        Công nghệ sử dụng:{" "}
                      </Col>
                      <Col className="fs-20">{item.tech}</Col>
                    </Row>
                    <Row>
                      <Col className="fs-20 bold" style={{ paddingRight: 6 }}>
                        Mô tả chi tiết: :{" "}
                      </Col>
                      <Col className="fs-20">{item.des}</Col>
                    </Row>
                  </Col>
                </Row>
              );
            })}
        </Col>
      </Row>
    </Col>
  );
};

export default Project;
