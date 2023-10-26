import React from "react";
import { Col, Row } from "antd";
import BannerJob from "./BannerJob";
import "./Job.scss";
import BoxJobSider from "./BoxJobSider";
import { CalendarOutlined } from "@ant-design/icons";
import Card from "./Card";
import HRInfo from "./HRInfo";
import ButtonSub from "./ButtonSub";
import DescriptionBox from "../../../../component/DescriptionBox";
const JobDetail = () => {
  const data = [
    {
      name: "Mô tả công việc",
      des: `-Tiếp nhận và phát triển nguồn khách hàng tìm năng thông qua các dữ liệu Marketing online
-Trả lời và giải đáp các thắc mắc của khách hàng về thông tin sản phẩm
-Giao tiếp và chủ động đặt câu hỏi để tìm hiểu nhu cầu của khách hàng
-Tư vấn những khoá học phù hợp với nhu cầu của khách hàng.
-Ghi chú những thông tin về tất cả các cuộc gọi để sử dụng trong tương lai
-Duy trì giọng điệu thân thiện, chuyên nghiệp mọi lúc
-Xử lý đơn hàng nhanh chóng và chính xác
-Đàm phán và giải quyết nhu cầu của khách hàng tiềm năng và chốt đơn hàng`,
    },
    {
      name: "Phương thức tuyển chọn",
      des: `- Ưu tiên 6 tháng kinh nghiệm Telesale/Tư vấn tuyển sinh (trong lĩnh vực như: Giáo dục, ngân hàng, bảo hiểm, sale dược, spa, tư vấn tài chính, chứng khoán, xuất nhập khẩu, Logistics ......) trong năm 2021-2022
-Tốt nghiệp Cao Đẳng Đại học, ưu tiên ứng viên tốt nghiệp Khối ngành Kinh tế
-Đam mê với công việc sale, kinh doanh.
-Kỹ năng giao tiếp và thuyết phục khách hàng tốt.
-Có tinh thần cầu tiến, siêng năng và trung thực khi tiếp xúc với khách hàng
-Sử dụng thành tạo tin học văn phòng`,
    },
    {
      name: `Giới thiệu công ty`,
      des: `Sau 3 năm thành lập, FutureLang là một trong các startup giáo dục công nghệ phát triển nhanh nhất Việt Nam (Định giá công ty hiện đạt >400 tỷ), với trên 400.000 người dùng, Công tý tiếp tục mở rộng quy mô với 2 dự án giáo dục công nghệ mới launching cùng với 4 dự án đang trong giai đoạn phát triển.
Sứ mệnh: Vì 50 triệu người Giao tiếp thành thạo tiếng AnhXây dựng 500 trường học, cây cầu và học máy trính cho trẻ em nghèo tại Việt NamTầm nhìn 2030 : TOP 10 Startup Unicorn Công ty giáo dục công nghệ có sản phẩm vươn tầm Châu Á
Giải thưởng: TOP 10 Thương hiệu tin cậy, sản phẩm chất lượng, dịch vụ tận tâm năm 2020. Top 10 Thương hiệu tiêu biểu Châu Á Thái Bình Dương 2021
Khởi đầu với những cá nhân trẻ đầy nhiệt huyết, trải qua nhiều thăng trầm, Futurelang tự hào khẳng định vị thế của mình với quy mô hơn 100+ nhân sự, và hàng nghìn CTV trên cả nước.
Chúng tôi đang tìm kiếm những bạn trẻ tiềm năng và nhiệt huyết trong lĩnh vực công nghệ. Futuelang cam kết sẽ đem đến cho nhân viên một trải nghiệm tuyệt vời, một môi trường làm việc Nhiệt Tình - Minh Bạch - Tử Tế-Hòa Đồng , nơi để các bạn trẻ thể hiện tài năng và phát triển hơn nữa trong tương lai.
Địa chỉ công tyTrụ sở 1 tại 290 Nguyễn Trãi, Nam Từ Liêm, Hà NộiTrụ sở 2 : Số 10, Liền kề 12, Khu Đô Thị Văn Khê, Hà Đông`,
    },
    {
      name: "Chế độ đãi ngộ",
      des: `Được tặng bộ sản phẩm học Tiếng Anh online trọn đời ngay tại FutureLang.
- Đánh giá điều chỉnh tăng lương 3 tháng/ lần.
- Thưởng tháng 13, thưởng Lễ/ Tết
- BHXH đầy đủ theo luật lao động, nghỉ phép 12 ngày/năm và các ngày lễ
- Môi trường làm việc trẻ trung, năng động, văn phòng đẹp, tiện nghi, hiện đại, đề cao giá trị tập thể và tôn trọng sự phát triển của mỗi cá nhân.
- Du lịch hàng năm với địa điểm hấp dẫn, thường xuyên tổ chức các hoạt động team building gắn kết cộng đồng, các hoạt động vui chơi giải trí cho nhân viên.
- Chế độ đãi ngộ tốt, có nhiều cơ hội nâng cao năng lực bản thân và tăng thêm thu nhập.`,
    },
  ];

  return (
    <Col span={24}>
      <BannerJob />
      <Row>
        <Col span={16} style={{ paddingLeft: 80 }}>
          {data &&
            data.length > 0 &&
            data.map((item, index) => {
              return (
                <Row key={index}>
                  <DescriptionBox name={item.name} des={item.des} />
                </Row>
              );
            })}
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
                  des={"dd/mm/yy"}
                />
                <Card
                  icon={<CalendarOutlined />}
                  title="Địa chỉ "
                  des={"Hà Nội "}
                />
                <Card
                  icon={<CalendarOutlined />}
                  title="Mức lương"
                  des={"dd/mm/yy"}
                />
                <Card
                  icon={<CalendarOutlined />}
                  title="Kinh nghiệm "
                  des={"Không yêu cầu kinh nghiệm"}
                />
                <Card
                  icon={<CalendarOutlined />}
                  title="Loại hình làm việc "
                  des={"Thực tập"}
                />
                <Card
                  icon={<CalendarOutlined />}
                  title="Thời gian bắt đầu"
                  des={"dd/mm/yy"}
                />
                <Card
                  icon={<CalendarOutlined />}
                  title="Thời gian kết thúc"
                  des={"dd/mm/yy"}
                />
              </Col>
            </BoxJobSider>
          </Row>
          <Row>
            <BoxJobSider title={"Thông tin quản lý nhân sự"}>
              <HRInfo />
            </BoxJobSider>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default JobDetail;
