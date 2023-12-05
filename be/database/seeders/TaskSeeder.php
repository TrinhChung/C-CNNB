<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\Task;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        //
        if (Task::count() !== 0) {
            return;
        }
        $data = [
            'Tổ chức Giáo dục quốc tế Langmaster' => [
                [
                    'title' => 'Giảng Viên Tiếng Anh Offline Part-Time',
                    'category_id' => 16,
                    'address_id' => 1,
                    'detail_address' => '- Hà Nội: 179 Trường Chinh, Thanh Xuân
                    - Hà Nội: 169 Xuân Thủy, Cầu Giấy',
                    'description' => '- Giảng dạy chuyên sâu về ngữ âm và giao tiếp cho đối tượng học sinh, sinh viên, người đi làm tại các trung tâm tiếng Anh.

                    - Giảng dạy theo giáo trình được biên soạn bởi Langmaster. Phối hợp cùng Trợ giảng chữa bài tập về nhà cho học viên.

                    - Tham gia và hỗ trợ các giảng viên part time khác nghiên cứu và phát triển chương trình giảng dạy, phương pháp giảng dạy,..

                    - Chăm sóc học viên trong suốt quá trình trước, trong và sau học tập.

                    - Tổ chức hoạt động ngoại khoá, kết nối lớp.

                    - Đánh giá sau quá trình giảng dạy. Báo cáo tình hình lớp học cho nhân viên Điều phối Giảng viên.',
                    'requiment' => '- Yêu cầu chứng chỉ TOEIC ≥ 900 hoặc IELTS ≥ 7.5

                    - Ưu tiên ƯV có các chứng chỉ về ngôn ngữ, có kinh nghiệm dạy giao tiếp

                    - Ứng viên cần có máy tính cá nhân, cần tham gia quá trình huấn luyện tối thiểu để đảm bảo chất lượng.

                    - Giao tiếp tốt, hoà đồng ',
                    'benefit' => '- Thu nhập: 10.000.000vnđ - 20.000.000vnđ/tháng.

                    - Thưởng theo quý:

                    Giảng viên xuất sắc nhất: 1,5 triệu
                    Giảng viên xuất sắc nhì: 1 triệu
                    Giảng viên xuất sắc ba: 500K
                    - Được tham gia đào tạo các phương pháp giảng dạy hiện đại theo quy chuẩn

                    - Được xuất hiện trên các kênh truyền thông của Langmaster, xây dựng hình ảnh cá nhân giảng viên

                    - Môi trường làm việc trẻ, năng động, học hỏi',
                    'amount' => 5,
                    'salary_max' => 10000000,
                    'year_of_experience' => 1,
                    'start' => Carbon::now()->toDateTimeString(),
                    'end' => Carbon::now()->addMonths(3)->toDateTimeString(),
                    'gender' => 1,
                    'types' => [2],
                ],
                [
                    'title' => 'Trợ Lý Chủ Tịch - Mảng Kinh Doanh',
                    'category_id' => 63,
                    'address_id' => 1,
                    'detail_address' => 'Hà Nội: Toà CTM, 139 Cầu Giấy, Cầu Giấy',
                    'description' => 'Về chuyên môn:

                    - Hỗ trợ Tổng giám đốc trong công tác vận hành phòng kinh doanh: giao tiếp, kết nối đội nhóm; thu thập và hỗ trợ xử lý các vấn đề phát sinh.

                    - Tham mưu, hỗ trợ Tổng giám đốc trong công tác lập và triển khai kế hoạch kinh doanh tháng, quý.

                    - Phối hợp với các phòng ban để giải quyết các vấn đề vận hành phòng kinh doanh.

                    - Theo dõi, checking báo cáo các chỉ số hàng tuần, tháng, quý.

                    Báo cáo định kỳ: Cập nhật, báo cáo công việc theo quy định & khi được yêu cầu.

                    Các công việc khác:

                    - Yêu cầu chuẩn chỉnh về hình ảnh, tác phong đáp ứng tiêu chí đại sứ thương hiệu của Tập đoàn.

                    - Tham gia đào tạo, huấn luyện trong toàn bộ quá trình làm việc.

                    - Thực hiện các công việc khác theo chỉ đạo của cấp trên.',
                    'requiment' => 'Độ tuổi: Trên 24 tuổi.

                    Kinh nghiệm: Có kinh nghiệm Sale thực chiến và quản lý nhân sự tối thiểu từ 1 năm trở lên.

                    Yêu cầu:

                    - Có kỹ năng tổng hợp, phân tích và giải quyết vấn đề.

                    - Có kỹ năng lập mục tiêu, kế hoạch, checking, follow công việc và giải quyết vấn đề cho đội nhóm.

                    - Làm việc chi tiết, tỉ mỉ.

                    - Chịu được áp lực cao trong công việc.

                    - Có trách nhiệm với công việc; Nhanh nhẹn, chủ động.

                    - Tư duy cầu tiến, học hỏi & đổi mới không ngừng',
                    'benefit' => 'Lương cứng: 12.000.000vnđ - 18.000.000vnđ

                    Phụ cấp: 42.000vnđ/ngày.

                    Các chính sách:

                    - Thời gian làm việc: Thứ 2 - sáng thứ 7 (Từ 8h30 – 17h30, nghỉ trưa: 12h00 – 13h30).

                    - Đề xuất tăng lương định kỳ từ 6 tháng/lần.

                    - Thưởng tháng lương thứ 13.

                    - Phụ cấp công tác.

                    - Đóng BHXH, BHYT.

                    - Du lịch, nghỉ mát, teambuilding, Year End Party…

                    - Nghỉ lễ theo lịch quốc gia & thưởng tiền (Tết dương lịch, 8/3, 30/4, 1/5, 1/6, trung thu…).

                    - Nghỉ phép năm 12 ngày/năm.

                    - Giảm giá nội bộ 70% đối với các khóa học tiếng Anh tại Langmaster & miễn phí 100% đối với các khóa học tại Trường doanh nhân HBR (Gói đào tạo với tổng trị giá 100.000.000vnđ).

                    ',
                    'amount' => 1,
                    'salary_min' => 12000000,
                    'salary_max' => 18000000,
                    'year_of_experience' => 3,
                    'start' => Carbon::now()->toDateTimeString(),
                    'end' => Carbon::now()->addMonths(3)->toDateTimeString(),
                    'types' => [1],
                ],
                [
                    'title' => 'Lập Trình Viên (Developer - Laravel, Vuejs ) (Thu Nhập 18.000.000 - 25.000.000) ',
                    'category_id' => 25,
                    'address_id' => 1,
                    'detail_address' => 'Hà Nội: Số 30 ngõ 76/2 Duy Tân, Cầu Giấy',
                    'description' => '-Tham gia vào toàn bộ chu kỳ phát triển sản phẩm phần mềm, thiết kế website
                    -Xử lý xuyên suốt quá trình phát triển sản phẩm, chẩn đoán và sửa chữa các vấn đề gặp phải
                    -Quản trị hiệu năng, load testing và review code; đóng góp cho sự cải thiện của hệ thống kỹ thuật
                    -Các công việc khác theo chỉ đạo của quản lý dự án
                    -Cập nhật, báo cáo công việc theo quy định và khi được yêu cầu.=> [
                        => [=> [
                            => [
                    -Tham gia đào tạo, huấn luyện trong toàn bộ quá trình làm việc.
                    -Yêu cầu chuẩn chỉnh về hình ảnh, tác phong đáp ứng tiêu chí đại sứ thương hiệu của Tập đoàn.
                    ',
                    'requiment' => '-Thành thạo Laravel, có hiểu biết về OOP, MVC, RESTful API
                    -Thành thạo Mysql, thiết kế CSDL, tối ưu truy vấn
                    -Ít nhất 2 năm làm việc với VueJs, ưu tiên đã làm việc với Composition API
                    -Tư duy giải quyết vấn đề tốt, chủ động trong công việc
                    -Tỷ mỉ, chau chuốt với sản phẩm
                    -Ưu tiên đã có kinh nghiệm phát triển ERP',
                    'benefit' => 'Lương cứng: 15.000.000vnđ - 25.000.000vnđ/tháng

                    Phụ cấp: 42.000vnđ/ngày.

                    Các chính sách:

                    - Thời gian làm việc: Thứ 2 - sáng thứ 7 (Từ 8h30 – 17h30, nghỉ trưa: 12h00 – 13h30).

                    - Cơ hội lên Leader dự án công nghệ, tham gia các khóa đào tạo nâng trình độ chuyên môn và được đào tạo, tiếp cận với những công nghệ và công cụ tiên tiến hàng đầu thế giới

                    - Đề xuất tăng lương định kỳ từ 6 tháng/lần.

                    - Đóng BHXH, BHYT.

                    - Du lịch, nghỉ mát, teambuilding, Year End Party…

                    - Nghỉ lễ theo lịch quốc gia & thưởng tiền (Tết dương lịch, 8/3, 30/4, 1/5, 1/6, trung thu…).

                    - Nghỉ phép năm 12 ngày/năm.

                    - Giảm giá nội bộ 70% đối với các khóa học tiếng Anh tại Langmaster & miễn phí 100% đối với các khóa học tại Trường doanh nhân HBR (Gói đào tạo với tổng trị giá 100.000.000vnđ).

                    - Gói chính sách đào tạo bên ngoài, miễn giảm học phí nâng cao năng lực.

                    - Gói coaching phát triển năng lực (Gói đào tạo với tổng trị giá 100.000.000vnđ).
                    ',
                    'amount' => 2,
                    'salary_min' => 15000000,
                    'salary_max' => 25000000,
                    'year_of_experience' => 4,
                    'start' => Carbon::now()->toDateTimeString(),
                    'end' => Carbon::now()->addMonths(3)->toDateTimeString(),
                    'gender' => 3,
                    'types' => [1],
                ],
                [
                    'title' => 'Giáo Viên Online',
                    'category_id' => 16,
                    'address_id' => 1,
                    'detail_address' => 'Hà Nội: Remote, Cầu Giấy',
                    'description' => '- Giảng dạy theo giáo trình có sẵn tiếng Anh giao tiếp trực tuyến 1 kèm 1

                    - Thời gian lớp học: 60p/ buổi, 3 buổi/ tuần. Dạy tối thiểu 6h/ tuần

                    - Tiêu đề email đặt theo mẫu "TCV_GVOL_Họ và tên"
                    ',
                    'requiment' => '- TOEIC ≥ 850.

                    - IELTS ≥ 7.0.

                    - TOEFL ≥ 94

                    - Bằng ĐH Ngôn ngữ Anh, Biên phiên dịch

                    - Ưu tiên ứng viên đã từng đi giảng dạy/có kinh nghiệm đào tạo.

                    Kỹ năng:

                    - Khả năng phát âm tốt.

                    - Khả năng giao tiếp tốt và khuyến khích học viên nói tiếng Anh.

                    Thái độ, tố chất:

                    - Trung thực, nhiệt tình, có trách nhiệm với công việc.

                    - Tâm huyết, có tinh thần học hỏi và phát triển bản thân, gắn bó và yêu thích sự đổi mới sáng tạo.

                    - Nhanh nhẹn, chủ động.',
                    'benefit' => '- Thu nhập 100k/giờ (lương cứng + thưởng)

                    - Thời gian làm việc linh hoạt: từ 9h00 – 11h00 sáng và 15h00 – 23h00 chiều tối.

                    - Được làm việc tại nhà, không cần đi lại, chủ động sắp xếp lịch làm việc.

                    - Được cung cấp giáo án và đào tạo về các kỹ năng giảng dạy.

                    - Được thưởng theo chính sách công ty.

                    - Có lợi thế trong việc trở thành giảng viên full-time offline.
                    ',
                    'amount' => 10,
                    'salary_max' => 8000000,
                    'year_of_experience' => 1,
                    'start' => Carbon::now()->toDateTimeString(),
                    'end' => Carbon::now()->addMonths(3)->toDateTimeString(),
                    'gender' => 1,
                    'types' => [2],
                ],
                [
                    'title' => 'Chuyên Viên Content Video Tiktok',
                    'category_id' => 28,
                    'address_id' => 1,
                    'detail_address' => 'Hà Nội: Số 30, Ngõ 76/2 Duy Tân, Cầu Giấy, Cầu Giấy',
                    'description' => 'Sáng tạo nội dung:

                    - Lập kế hoạch, đảm nhận lên ý tưởng, nội dung cho các video dạy Tiếng Anh.

                    - Theo dõi đo lường và đánh giá hiệu quả của các bài đăng.

                    - Tìm hiểu, nghiên cứu nhu cầu và xu hướng của khách hàng và cộng đồng mạng để phát triển chủ đề, nội dung mới phù hợp hơn.

                    Báo cáo: Cập nhật, báo cáo công việc theo quy định & khi được yêu cầu.

                    Các công việc khác:

                    - Yêu cầu chuẩn chỉnh về hình ảnh, tác phong đáp ứng tiêu chí đại sứ thương hiệu của Tập đoàn.

                    - Tham gia đào tạo, huấn luyện trong toàn bộ quá trình làm việc.

                    - Thực hiện các công việc khác theo chỉ đạo của cấp trên.
                    ',
                    'requiment' => 'Anh ngữ: Tối thiểu 6.0 IELTS trở lên

                    Kinh nghiệm: Đã từng có kinh nghiệm xây dựng, sản xuất content video từ 6 tháng

                    Yêu cầu:

                    - Cẩn thận, tỉ mỉ, sáng tạo, ham tìm tòi;

                    - Có định hướng phát triển sâu trong lĩnh vực Marketing.

                    Thái độ, tố chất:

                    - Kỉ luật, trung thực, nhiệt tình, có trách nhiệm với công việc.

                    - Tâm huyết, có tinh thần học hỏi và phát triển bản thân, gắn bó và yêu thích sự đổi mới sáng tạo.

                    - Nhanh nhẹn, chủ động, có tư duy tích cực.',
                    'benefit' => 'Lương cứng:  8.000.000vnđ – 12.000.000vnđ/tháng.

                    Phụ cấp: 42.000vnđ/ngày.

                    Các chính sách:

                    - Thời gian làm việc: Thứ 2 - sáng thứ 7 (Từ 8h30 – 17h30, nghỉ trưa: 12h00 – 13h30).

                    - Đặc biệt: Có cơ hội làm việc trên các nền tảng đa kênh như Facebook, Youtube, Google, Tik tok, Instagram.

                    - Được đào tạo về cách xây dựng đa dạng các loại hình content: content SEO, Content viral, content quảng cáo.

                    - Được đào tạo chuyên sâu về Digital Marketing.

                    - Đề xuất tăng lương định kỳ từ 6 tháng/lần.

                    - Phụ cấp công tác.

                    - Đóng BHXH, BHYT, Khám sức khỏe định kỳ.

                    - Du lịch, nghỉ mát, teambuilding, Year End Party…

                    - Nghỉ lễ theo lịch quốc gia & thưởng tiền (Tết dương lịch, 8/3, 30/4, 1/5, 1/6, trung thu…).

                    - Nghỉ phép năm 12 ngày/năm.

                    - Giảm giá nội bộ 70% đối với các khóa học tiếng Anh tại Langmaster & miễn phí 100% đối với các khóa học tại Trường doanh nhân HBR (Gói đào tạo với tổng trị giá 100.000.000vnđ).

                    - Gói chính sách đào tạo bên ngoài, miễn giảm học phí nâng cao năng lực.

                    - Gói coaching phát triển năng lực (Gói đào tạo với tổng trị giá 100.000.000vnđ).
                    ',
                    'amount' => 1,
                    'salary_min' => 8000000,
                    'salary_max' => 12000000,
                    'year_of_experience' => 2,
                    'start' => Carbon::now()->toDateTimeString(),
                    'end' => Carbon::now()->addMonths(3)->toDateTimeString(),
                    'gender' => 1,
                    'types' => [1],
                ],
                [
                    'title' => 'Trưởng Nhóm SEO (Kinh Nghiệm Quản Lý Size 2-4, Mức Lương 12M - 18M/Tháng)',
                    'category_id' => 28,
                    'address_id' => 1,
                    'detail_address' => 'Hà Nội: Tòa CTM, 139 Cầu Giấy, Hà Nội, Cầu Giấy',
                    'description' => 'Công việc chính:

                    - Lên chiến lược, kế hoạch SEO

                    - Lên kế hoạch phân bổ công việc tối ưu onpage/content/internal links,...

                    - Review, đảm bảo công việc đã phân bổ đạt các tiêu chuẩn về chất lượng - số lượng và tiến độ được đề ra.

                    - Phối hợp bộ phận IT để chỉnh sửa các phần liên quan tới technical website và hoàn thành các khâu UX UI; cấu trúc website.

                    - Quản lý team và báo cáo tiến độ định kỳ theo tuần, tháng, quý và năm
                    ',
                    'requiment' => 'Kinh nghiệm:

                    - ít nhất 1 năm làm việc ở vị trí Leader SEO Team quy mô 2-4 nhân sự

                    Kỹ năng:

                    - Am hiểu và có kinh nghiệm về SEO web...

                    - Có chuyên môn về HTML/CSS, UI-UX là lợi thế.

                    - Hiểu sâu các kiến thức về onpage - offpage

                    Thái độ, tố chất:

                    - Trung thực, nhiệt tình, có trách nhiệm với công việc.

                    - Tâm huyết, có tinh thần học hỏi và phát triển bản thân, gắn bó.

                    Yêu cầu khác: Có máy tính cá nhân',
                    'benefit' => 'Lương cứng: 12.000.000 - 18.000.000 VNĐ/tháng

                    Phụ cấp: 42.000vnđ/ngày. (Ăn trưa + gửi xe)

                    Các chính sách:

                    - Thời gian làm việc: Thứ 2 - sáng thứ 7 (Từ 8h30 – 17h30, nghỉ trưa: 12h00 – 13h30)

                    - Đề xuất tăng lương định kỳ từ 6 tháng/lần.

                    - Phụ cấp công tác.

                    - Đóng BHXH, BHYT.

                    - Du lịch, nghỉ mát, teambuilding, Year End Party…

                    - Nghỉ lễ theo lịch quốc gia & thưởng tiền (Tết dương lịch, 8/3, 30/4, 1/5, 1/6, trung thu…).

                    - Nghỉ phép năm 12 ngày/năm.

                    - Giảm giá nội bộ 70% đối với các khóa học tiếng Anh tại Langmaster & miễn phí 100% đối với các khóa học tại Trường doanh nhân HBR (Gói đào tạo với tổng trị giá 100.000.000vnđ).

                    - Gói chính sách đào tạo bên ngoài, miễn giảm học phí nâng cao năng lực.

                    - Gói coaching phát triển năng lực (Gói đào tạo với tổng trị giá 100.000.000vnđ).

                    Phía công ty xin phép chỉ liên lạc với những ứng viên đủ yêu cầu, cảm ơn bạn đã quan tâm đến những vị trí tuyển dụng tại công ty!
                    ',
                    'amount' => 1,
                    'salary_min' => 12000000,
                    'salary_max' => 18000000,
                    'year_of_experience' => 4,
                    'start' => Carbon::now()->toDateTimeString(),
                    'end' => Carbon::now()->addMonths(3)->toDateTimeString(),
                    'gender' => 1,
                    'types' => [1],
                ],
            ],
            'Công ty TNHH CJ CGV Việt Nam' => [
                [
                    'title' => 'Giám Sát Vận Hành Dịch Vụ Cgv Cinemas',
                    'category_id' => 13,
                    'address_id' => 1,
                    'detail_address' => '- Hà Nội: Cầu Giấy
                    - Hà Nội: Ba Đình
                    - Hà Nội: Từ Liêm',
                    'description' => '-Giám sát hoạt động vận hành hàng ngày của rạp chiếu phim. Thực hiện kiểm tra checklist và báo cáo về tiêu chuẩn dịch vụ tại rap
                    -Giải quyết các khiếu nại, thắc mắc của khách hàng về các dịch vụ/sản phẩm/quy định tại cụm rap. Phản hồi với khách hàng một cách kịp thời và hiệu quả nhằm giải quyết được các vấn đề phát sinh
                    -Theo dõi và kiểm soát hàng hóa trong kho, kiểm soát các chi phí vận hành, đảm bảo về vệ sinh chung theo đúng quy định VSATTP
                    -Tuyển dụng và đào tạo nhân sự để đảm bảo tiêu chuẩn về chất lượng dịch vụ, sắp xếp lịch làm việc của nhân viên để đảm bảo rạp luôn vận hành hoạt động hiệu quả, theo dõi và đối chiếu bảng công ca hàng tháng.
                    -Triển khai các chương trình marketing để thúc đẩy doanh số
                    -Hỗ trợ vận hành hệ thống máy chiếu, kiểm tra các trang thiết bị tại rạp và đảm bảo về an toàn PCCC
                    ',
                    'requiment' => '-Tốt nghiệp Cao đẳng/ Đại học (ưu tiên chuyên ngành về quản trị nhà hàng, khách sạn, du lịch…)
                    -Có khả năng làm ca 8h/ngày (2-3 buổi tối/tuần kết thúc khoảng 12h đêm) và làm việc vào những ngày cuối tuần, Lễ,Tết.
                    -Ưu tiên có kinh nghiệm giám sát vận hành về dịch vụ tại nhà hàng/khách sạn/ chuỗi cà phê, đồ ăn nhanh….
                    -Có kỹ năng xây dựng và quản lý nhân viên
                    -Chủ động, nhiệt tình và có trách nhiệm trong công việc.
                    -Có khả năng giao tiếp tiếng Anh và sử dụng máy tính văn phòng
                    ',
                    'benefit' => '-Trợ cấp ca đêm, ăn ca và trợ cấp điện thoại hàng tháng
                    -Đóng BHXH, BHYT, BHTN theo đúng mức lương và chế độ Luật lao động hiện hành
                    -Bảo hiểm sức khỏe toàn diện PVI
                    -Kiểm tra sức khỏe hàng năm
                    -Vé xem phim hàng tháng
                    -Môi trường làm việc chuyên nghiệp, năng động và thân thiện
                    -Cơ hội phát triển và đào tạo nội bộ
                    ',
                    'amount' => 5,
                    'year_of_experience' => 3,
                    'start' => Carbon::now()->toDateTimeString(),
                    'end' => Carbon::now()->addMonths(3)->toDateTimeString(),
                    'gender' => 1,
                    'types' => [1],
                ],
            ],
            'Công ty Cổ phần VNEXT SOFTWARE' => [
                [
                    'title' => 'Comtor Tiếng Nhật (N2)',
                    'category_id' => 2,
                    'address_id' => 69,
                    'detail_address' => '- Nước Ngoài',
                    'description' => 'Tham gia dịch viết hai chiều tiếng Việt – tiếng Nhật cho các dự án IT với khách hàng Nhật;
                    Tham gia cùng Comtor Lead để nghe và hỗ trợ PM/Team dự án trong các buổi họp với khách hàng;
                    Trao đổi, truyền đạt thông tin cho Team dự án và khách hàng qua chat, mail;
                    Thực hiện các công việc khác theo sự phân công của quản lý trực tiếp.
                    ',
                    'requiment' => 'Tiếng Nhật tương đương N1;
                    Có khả năng nghe nói, giao tiếp tốt bằng tiếng Nhật;
                    Có từ 1,5 năm kinh nghiệm trở lên làm biên phiên dịch;
                    Có kinh nghiệm dịch các tài liệu liên quan đến nghiệp vụ doanh nghiệp Nhật là 1 lợi thế;
                    Có niềm yêu thích IT, có kiến thức IT là một lợi thế;
                    Yêu thích văn hóa Nhật Bản, thích giao tiếp với người Nhật;
                    Có trình độ tiếng Anh đọc-viết cơ bản;
                    Yêu cầu khác

                    Có tinh thần trách nhiệm cao trong công việc ;
                    Có khả năng làm việc độc lập/khả năng teamwork tốt
                    ',
                    'benefit' => 'Thu nhập cạnh tranh hấp dẫn: 13 tháng lương/năm + thưởng dự án, thưởng Tết và các dịp lễ…;
                    Được nhận các khoản trợ cấp hàng tháng như sau:
                              + Trợ cấp đi lại upto: 20,000 JPY/tháng;

                              + Trợ cấp nhà ở upto: 30,000 JPY/tháng;

                    Xét tăng lương 1 lần/năm theo năng lực và hiệu quả công việc;
                    Chế độ tài trợ vé máy bay khứ hồi về Việt Nam thăm gia đình 1 năm/ 1 lần (Cố định 80,000 JPY và trả vào tháng 12 hàng năm áp dụng khi kể từ khi nhân viên làm việc tại công ty từ 12 tháng trở lên, kế hoạch nghỉ được xác nhận phù hợp với công việc);
                    Ngày nghỉ trên 120 ngày: Thứ 7, chủ nhật, ngày lễ theo quy định của pháp luật Nhật Bản (bao gồm những ngày nghỉ bù theo quy định của chính phủ Nhật), nghỉ obon, nghỉ tết Dương lịch, các ngày nghỉ khác theo lịch công ty ban hành;
                    Được tham gia bảo hiểm xã hội, bảo hiểm y tế, bảo hiểm thất nghiệp theo Quy định của Pháp luật hiện hành và quy định công ty;
                    Khám sức khỏe định kỳ 1 năm/1 lần;
                    Được tham gia các hoạt động tập thể sôi động của công ty: Nghỉ mát, Teambuilding hàng năm,…
                    Các chế độ phúc lợi khác như tiền mừng, hiếu hỷ, thăm viếng.
                    ',
                    'amount' => 2,
                    'year_of_experience' => 3,
                    'start' => Carbon::now()->toDateTimeString(),
                    'end' => Carbon::now()->addMonths(3)->toDateTimeString(),
                    'gender' => 1,
                    'types' => [1],
                ],
                [
                    'title' => 'Sale IT Intern',
                    'category_id' => 25,
                    'address_id' => 8,
                    'detail_address' => '- Đà Nẵng',
                    'description' => 'Được đào tạo các kỹ năng chuyên môn liên quan đến sales, kiến thức chung về ngành IT, quy trình quản trị dự án phần mềm, văn hóa kinh doanh Nhật Bản,…
                    Làm trợ lý hỗ trợ khối sản xuất dự án phần mềm của VNEXT;
                    Thực hiện các công việc khác theo sự phân công của Quản lý trực tiếp.
                    ',
                    'requiment' => 'Có Tiếng Nhật N1, giao tiếp tốt;
                    Tư duy nhanh nhạy và có khả năng trình bày tốt;
                    Có khả năng tổ chức, chịu được áp lực công việc.
                    Có thể tham gia khóa đào tạo full-time
                    Ưu tiên

                    Ưu tiên ứng viên nữ;
                    Ưu tiên ứng viên có trình độ tiếng Anh giao tiếp.
                    ',
                    'benefit' => 'Được đào tạo bài bản, chuyên nghiệp, lý thuyết đi liền với thực hành;
                    Cơ hội trở thành nhân viên chính thức và sang Nhật làm việc tại VNEXT JAPAN sau khóa đào tạo.
                    Quyền lợi sau khi ký hợp đồng chính thức:

                    Mức lương: 450$/tháng (chưa bao gồm thưởng dự án, thưởng lễ tết, và các khoản thưởng khác...);
                    Thu nhập: 13 tháng lương/năm + thưởng dự án, thưởng Tết và các dịp lễ…;
                    Xét tăng lương 2 lần/năm theo năng lực và hiệu quả công việc;
                    Nghỉ thứ 7, Chủ nhật + Nghỉ phép theo Quy định của Pháp luật hiện hành;
                    Được tham gia bảo hiểm xã hội, bảo hiểm y tế, bảo hiểm thất nghiệp theo Quy định của Pháp luật hiện hành và quy định công ty;
                    Khám sức khỏe định kỳ 1 năm/1 lần;
                    Bảo hiểm chăm sóc sức khỏe 24/24 ( PVI Care);
                    Trợ cấp tiếng Nhật và các chứng chỉ IT liên quan (hình thức: khen thưởng, tăng lương...);
                    Được tham gia các Câu lạc bộ của Công ty: CLB Bóng đá, các CLB Game…..
                    Được tham gia các hoạt động tập thể sôi động của công ty: Nghỉ mát hàng năm, Teambuilding hàng quý, Gala cuối năm….
                    Đặc biệt

                    Được hỗ trợ 100% chi phí tham gia các khóa học kỹ năng mềm và các khóa đào tạo chuyên môn, luyện thi các chứng chỉ uy tín trong và ngoài nước;
                    Làm việc trong môi trường chuyên nghiệp, được hỗ trợ phát huy khả năng, phát triển công việc tối đa.
                    ',
                    'amount' => 1,
                    'salary_max' => 10000000,
                    'year_of_experience' => 1,
                    'start' => Carbon::now()->toDateTimeString(),
                    'end' => Carbon::now()->addMonths(3)->toDateTimeString(),
                    'gender' => 1,
                    'types' => [3],
                ],
                [
                    'title' => 'Nodejs Developer',
                    'category_id' => 25,
                    'address_id' => 1,
                    'detail_address' => 'Hà Nội: Tầng 18-19-20, Tháp C, Toà nhà Central Point, 219 Trung Kính, phường Yên Hòa, Cầu Giấy',
                    'description' => 'Cùng đội ngũ senior & team leader phát triển các hệ thống với CCU (Concurrent Users) và chịu tải cao;
                    Tham gia các công đoạn phát triển phần mềm tìm hiểu yêu cầu, phân tích, thiết kế;
                    Được tham gia nghiên cứu & phát triển các sản phẩm Web sử dụng ngôn ngữ/công nghệ: NodeJS(NestJS), JavaScript/Vuejs (NuxtJS) / ReactJS (NextJS), Golang, MySQL, MongoDB, Memcached, Redis, Docker, Kubernetes, Socket.io, Elasticsearch,...
                    Làm việc, phối hợp công việc theo nhóm dưới sự phân công công việc của team leader.
                    ',
                    'requiment' => 'Từ 3 năm kinh nghiệm làm việc ở vị trí Back-end Developer, sử dụng NodeJS;
                    Sử dụng thành thạo ngôn ngữ NodeJS, TypeScript, có kinh nghiệm làm việc với NestJS framework;
                    Nắm vững git, git flow;
                    Sử dụng thành thạo ít nhất 1 trong các hệ quản trị cơ sở dữ liệu: MySQL, MongoDB, Redis;
                    Có kinh nghiệm viết API chuẩn RESTful, viết tài liệu API sử dụng Swagger;
                    Hiểu và nắm rõ 1 trong số design pattern: Singleton, Fluent Interface, Repository,...
                    Có kinh nghiệm về unit tests;
                    Đã từng sử dụng AWS là 1 lợi thế;
                    Có khả năng xây dựng hệ thống thời gian thực cao;
                    Ưu tiên ứng viên đã có kinh nghiệm lead team;
                    Có khả năng làm việc độc lập tốt, chịu được áp lực cao trong công việc.

                    Ưu tiên ứng viên:
                    Có kiến thức về AWS là một lợi thế;
                    Yêu thích việc phân tích thiết kế hệ thống là một lợi thế.

                    Yêu cầu khác
                    Có tinh thần trách nhiệm cao trong công việc;
                    Có khả năng làm việc độc lập/khả năng teamwork tốt.
                    ',
                    'benefit' => 'Mức lương khởi điểm hấp dẫn, cạnh tranh, tương xứng với năng lực và kinh nghiệm làm việc;
                    Thu nhập: 13 tháng lương/năm + thưởng dự án, thưởng Tết và các dịp lễ…;
                    Xét tăng lương 2 lần/năm theo năng lực và hiệu quả công việc;
                    Nghỉ thứ 7, Chủ nhật + Nghỉ phép theo Quy định của Pháp luật hiện hành;
                    Được tham gia bảo hiểm xã hội, bảo hiểm y tế, bảo hiểm thất nghiệp theo Quy định của Pháp luật hiện hành và quy định công ty;
                    Khám sức khỏe định kỳ 1 năm/1 lần;
                    Bảo hiểm chăm sóc sức khỏe 24/24 ( PVI Care);
                    Trợ cấp tiếng Nhật và các chứng chỉ IT liên quan (hình thức: khen thưởng, tăng lương...);
                    Được tham gia các Câu lạc bộ của Công ty: CLB Bóng đá, các CLB Game…..
                    Được tham gia các hoạt động tập thể sôi động của công ty: Nghỉ mát hàng năm, Teambuilding hàng quý, Gala cuối năm….

                    Đặc biệt:

                    Được hỗ trợ 100% chi phí tham gia các khóa học kỹ năng mềm và các khóa đào tạo chuyên môn, luyện thi các chứng chỉ uy tín trong và ngoài nước;
                    Cơ hội làm việc và đào tạo tại Nhật Bản với các ứng viên có tiếng Nhật;
                    Làm việc trong môi trường chuyên nghiệp, được hỗ trợ phát huy khả năng, phát triển công việc tối đa.
                    ',
                    'amount' => 1,
                    'salary_max' => 35000000,
                    'year_of_experience' => 4,
                    'start' => Carbon::now()->toDateTimeString(),
                    'end' => Carbon::now()->addMonths(3)->toDateTimeString(),
                    'gender' => 1,
                    'types' => [1],
                ],
                [
                    'title' => 'PHP Developer',
                    'category_id' => 25,
                    'address_id' => 1,
                    'detail_address' => '- Hà Nội: Tầng 18 - 19 - 20, tòa Central Point, 219 Trung Kính, Cầu Giấy',
                    'description' => 'Lập trình trong các dự án gia công phần mềm sử dụng ngôn ngữ PHP cho khách hàng Nhật Bản;
                    Cùng đội ngũ senior & team leader tạo ra các hệ thống có tính ổn định và mở rộng cao;
                    Tham gia các công đoạn phát triển phần mềm tìm hiểu yêu cầu, phân tích, thiết kế;
                    Tiến hành phân tích các yêu cầu về trang web và ứng dụng;
                    Được tham gia nghiên cứu & phát triển các sản phẩm Web sử dụng ngôn ngữ/công nghệ: NodeJS(NestJS), JavaScript/Vuejs, (NuxtJS)/ReactJS(NextJS), MySQL, MongoDB, Redis, Docker, Kubernetes,...
                    Phối hợp với các thành viên nhóm dự án khác dưới sự điều phối của Quản lý trực tiếp và tiếp xúc trực tiếp với khách hàng.
                    ',
                    'requiment' => 'Có ít nhất 2 năm kinh nghiệm phát triển web với PHP;
                    Có kiến thức nền tảng tốt về OOP, Web Development, DBMS, ORM, Design Pattern;
                    Sử dụng thành thạo OOP và có kinh nghiệm với Zend Framework;
                    Có kinh nghiệm với các framework khác như: Laravel, Yii, Codelgniter,... là một lợi thế;
                    Có kinh nghiệm viết API chuẩn RESTful;
                    Thao tác tốt với HTML, CSS, JavaScript (Jquery, AngularJS, ...), Bootstrap, JSON, XML,...
                    Có kinh nghiệm sử dụng thư viện: Bootstrapt, Jquery;
                    Sử dụng thành thạo ít nhất 1 trong các hệ quản trị cơ sở dữ liệu: MySQL, PostgreSQL, MongoDB, Redis;
                    Có kinh nghiệm về unit tests là 1 lợi thế;
                    Đã từng sử dụng AWS, có kinh nghiệm deploy, vận hành cloud là 1 lợi thế;
                    Có khả năng làm việc độc lập tốt, chủ động, chịu được áp lực cao trong công việc.

                    Ưu tiên:

                    Biết tiếng nhật hoặc đã từng làm trong các công ty outsourcing cho Nhật;
                    Tư duy logic tốt.

                    Yêu cầu khác:

                    Có tinh thần trách nhiệm cao trong công việc;
                    Có khả năng làm việc độc lập/khả năng teamwork tốt.
                    ',
                    'benefit' => 'Mức lương khởi điểm hấp dẫn, cạnh tranh, tương xứng với năng lực và kinh nghiệm làm việc;
                    Thu nhập: 13 tháng lương/năm + thưởng dự án, thưởng Tết và các dịp lễ…;
                    Xét tăng lương 2 lần/năm theo năng lực và hiệu quả công việc;
                    Nghỉ thứ 7, Chủ nhật + Nghỉ phép theo Quy định của Pháp luật hiện hành;
                    Được tham gia bảo hiểm xã hội, bảo hiểm y tế, bảo hiểm thất nghiệp theo Quy định của Pháp luật hiện hành và quy định công ty;
                    Khám sức khỏe định kỳ 1 năm/1 lần;
                    Bảo hiểm chăm sóc sức khỏe 24/24 ( PVI Care);
                    Trợ cấp tiếng Nhật và các chứng chỉ IT liên quan (hình thức: khen thưởng, tăng lương...);
                    Được tham gia các Câu lạc bộ của Công ty: CLB Bóng đá, các CLB Game…..
                    Được tham gia các hoạt động tập thể sôi động của công ty: Nghỉ mát hàng năm, Teambuilding hàng quý, Gala cuối năm….
                    Được hỗ trợ 100% chi phí tham gia các khóa học kỹ năng mềm và các khóa đào tạo chuyên môn, luyện thi các chứng chỉ uy tín trong và ngoài nước;
                    Cơ hội làm việc và đào tạo tại Nhật Bản với các ứng viên có tiếng Nhật;
                    Làm việc trong môi trường chuyên nghiệp, được hỗ trợ phát huy khả năng, phát triển công việc tối đa.
                    ',
                    'amount' => 1,
                    'salary_max' => 19000000,
                    'year_of_experience' => 3,
                    'start' => Carbon::now()->toDateTimeString(),
                    'end' => Carbon::now()->addMonths(3)->toDateTimeString(),
                    'gender' => 1,
                    'types' => [1],
                ],
            ],
            'FPT Software' => [
                [
                    'title' => 'Bridge Software Engineer (N2 Up)',
                    'category_id' => 25,
                    'address_id' => 2,
                    'detail_address' => '- Hồ Chí Minh: F-Town Building, Lot T2, D1 Street, Saigon Hi-Tech Park, Tan Phu Ward, District 9, Ho Chi Minh City., Quận 9',
                    'description' => '• Working location: Ha Noi, Ho Chi Minh, Da Nang, Hue
                    • Bridge between the subsidiary in Vietnam and the parent company in Japan.
                    • Become a member of the company’s web application development team.
                    • Responsible for product development and maintenance.
                    • Responsible for receiving requests from the parent company, analyzing and communicating requirements to developers in Vietnam.
                    • Support the Developer to develop the functions, check the functions which have worked properly with the requirements of customers or not.
                    • Contribute ideas and improve the quality of products
                    ',
                    'requiment' => 'Basic Qualification:
                        • Have Japanese communication N2 or above.
                        • Have 2 years of working experience in BA/BrSE position or equivalent position
                        • Skills: Teamwork, Analysis, Design, Communication and presentation by japanese.
                        • Proactivity, Self-study ability and Positive attitude at work.
                        • Proficient in UML, Design and Modeling tools.
                        • Experience with Java EE, Object Relational Mapping (ORM) Framework, Java Server Pages (JSP),
                        • Experience with Struts, Spring and / or Hibernate Frameworks, RESTful programming, Java Batch.
                        • Experience with JavaScript, TypeScript, HTML and CSS. process XML like XSD, XS..v.v.
                        • Experience with Service Oriented Architecture (SOA) .DB: Oracle, DB2, SQL Server, noSQL.


                        Nice to have:
                        • Experience with financial and card projects
                        • Have a solid foundation for object-oriented design / object-oriented programming (OOD / OOP)
                    ',
                    'benefit' => '• Be part of our hugely international environment; we are currently working for Japanese/Global projects, where you can have many opportunities to working overseas;
                    • Competitive salary package based on skills and experience.;
                    • We create great teams and take very good care of them;
                    • Great opportunity to grow with the company;
                    • Frequent staff activities and company parties;
                    • Awesome social events and parties for employees;
                    • 20% discount on school fee if your sons/ daughters join FPT School;
                    • Udemy/ ELSA PRO accounts for every employee & Udacity accounts for Managers.
                    Special offer for senior level
                    • Loan support: 4% interest rate (1 – 2 Billion VND package).
                    ',
                    'amount' => 5,
                    'year_of_experience' => 4,
                    'start' => Carbon::now()->toDateTimeString(),
                    'end' => Carbon::now()->addMonths(3)->toDateTimeString(),
                    'gender' => 1,
                    'types' => [1],
                ],
                [
                    'title' => 'Business Analysis (N2 Up)',
                    'category_id' => 25,
                    'address_id' => 2,
                    'detail_address' => '- Hồ Chí Minh: F-Town Building, Lot T2, D1 Street, Saigon Hi-Tech Park, Tan Phu Ward, District 9, Ho Chi Minh City., Quận 9',
                    'description' => '• Working location: Ha Noi, Ho Chi Minh, Da Nang, Hue
                    • Support to organize workshops, perform CRP with End-users to consult and complete the requirement / UI / UX documents.
                    • Make basic design documents: Basic design, Architecture design document.
                    • Plan to evaluate the system after implementation, UAT and train users to use the system developed by FPT.
                    ',
                    'requiment' => 'Basic Qualification:
                        • Be fluent in Japanese ( N2 up )
                        • Have at least 2 years of IT experience with projects working with End-users customers
                        • Have good problem analysis and presentation skills
                        • At least 3 years of experience in building and developing high level design documents such as RD-BD
                        • Have the ability to consult and experience with SCM or production-related fields for at least 2 years.
                        • Have management skills and understanding of Agile, Warterfall software development management methods
                        • Ability to propose and persuade
                        • Have 3 years of experience in testing or ensuring product quality after implement
                        • Having a technical base of 5 years or more is an advantage.
                        • Having the ability to consult and experience with SCM or production-related fields for at least 5 years.
                        • 3+ years of experience in accounting, finance or television
                        • 3+ years of experience in building operations and management.
                        • 3+ years of experience in production domain and logistics


                        Nice to have:
                        • Experience with ERP projects, Dynamic 365
                        • Proficient in UML, Design and Modeling tools.
                    ',
                    'benefit' => '
                    • Be part of our hugely international environment; we are currently working for Japanese/Global projects, where you can have many opportunities to working overseas;
                    • Competitive salary package based on skills and experience.;
                    • We create great teams and take very good care of them;
                    • Great opportunity to grow with the company;
                    • Frequent staff activities and company parties;
                    • Awesome social events and parties for employees;
                    • 20% discount on school fee if your sons/ daughters join FPT School;
                    • Udemy/ ELSA PRO accounts for every employee & Udacity accounts for Managers.
                    Special offer for senior level
                    • Loan support: 4% interest rate (1 – 2 Billion VND package).
                    ',
                    'amount' => 5,
                    'year_of_experience' => 4,
                    'start' => Carbon::now()->toDateTimeString(),
                    'end' => Carbon::now()->addMonths(3)->toDateTimeString(),
                    'gender' => 1,
                    'types' => [1],
                ],
                [
                    'title' => 'Biên Phiên Dịch Tiếng Nhật (N1 IT Communicator)',
                    'category_id' => 2,
                    'address_id' => 2,
                    'detail_address' => '- Hồ Chí Minh: F-Town Building, Lot T2, D1 Street, Saigon Hi-Tech Park, Tan Phu Ward, District 9, Ho Chi Minh City., Quận 9',
                    'description' => '• Là Cầu nối ngôn ngữ giữa đội dự án với khách hàng Nhật
                    • Phiên dịch (Nhật- Việt, Việt-Nhật) cho các buổi họp cuộc họp nội bộ và các buổi meeting với Khách hàng Nhật của đội dự án
                    • Dịch các loại tài liệu đã tiếp nhận theo yêu cầu đảm bảo đúng các nguyên tắc, quy trình dịch thuật của Công ty.
                    • Trao đổi thông tin với khách hàng Nhật qua email, điện thoại.
                    • Tiếp nhận và quản lý tài liệu, yêu cầu từ Khách hàng Nhật (tiếng Nhật), từ đội dự án (tiếng Việt hoặc tiếng Anh)
                    • Dịch các email trao đổi giữa đội dự án và Khách hàng Nhật (Nhật-Việt, Việt/Anh-Nhật)
                    ',
                    'requiment' => '•Tiếng Nhật tương đương N2, N1. Thành thạo cả 4 kỹ năng nghe, nói, đọc, viết
                    • Tốt nghiệp chuyên ngành tiếng Nhật
                    • Ưu tiên ứng viên có kinh nghiệm trong lĩnh vực IT hoặc có am hiểu cơ bản về lĩnh vực
                    • Thích học tiếng Nhật và yêu thích văn hóa Nhật Bản, thích giao tiếp với người Nhật
                    • Có khả năng xử lý thông tin và nhận biết vấn đề nhanh, đưa ra ý kiến để cải thiện chất lượng công việc cùng với managers
                    • Kỹ năng quản lý tốt
                    • Năng động, hoạt bát, có tinh thần trách nhiệm cao trong công việc
                    • Sẵn sàng làm việc tại Hòa Lạc
                    ',
                    'benefit' => '
                    • Thu nhập CẠNH TRANH. Nhân viên chính thức có 13 tháng lương.
                    • Thưởng lương mềm theo dự án. Xét tăng lương 2 lần hàng năm.
                    • Đóng BHXH đầy đủ và tặng thêm gói BHXH sức khỏe FPT care cho nhân viên
                    • Lộ trình thăng tiến rõ ràng, rất nhiều vị trí và cơ hội thăng tiến cho nhân viên.
                    • Làm việc từ thứ 2 đến thứ 6.
                    • Được làm việc trực tiếp cùng khách hàng là các tập đoàn lớn của Nhật Bản, Mỹ, US, Singapore, Hàn Quốc…
                    • Được đào tạo về ngôn ngữ, kỹ năng mềm
                    • Có cơ hội đi Onsite tại Nhật, Hàn, …
                    • Tham gia các hoạt động nghỉ mát, du lịch, Teambuilding do công ty tổ chức hàng năm.
                    • Tham gia các hoạt động event sôi động, câu lạc bộ thể thao, văn nghệ…
                    ',
                    'amount' => 12,
                    'year_of_experience' => 1,
                    'start' => Carbon::now()->toDateTimeString(),
                    'end' => Carbon::now()->addMonths(3)->toDateTimeString(),
                    'gender' => 1,
                    'types' => [1],
                ],
                [
                    'title' => 'Database Designer',
                    'category_id' => 25,
                    'address_id' => 1,
                    'detail_address' => 'Hà Nội: FPT Building, 17 Duy Tan Street, Cau Giay District, Hanoi., Cầu Giấy',
                    'description' => '• Design database for large accounting and ERP systems
                    • Analyze business related to accounting to optimize database for performance and scalability
                    • Participate in the development of Database Architecture and Roadmaps in support of business strategies.
                    • Determine how the enterprise’s data will be stored and utilized to best provide actionable data to the end user.
                    • Analyze existing data design and suggest improvements that promote performance, stability and interoperability.
                    • Work with product management and business subject matter experts to translate business requirements into good database design.
                    ',
                    'requiment' => 'Profile:
                    • Strong proficiency in relational database management systems (MS SQL Server) and NoSQL databases.
                    • 3+ years of experience working on solutions that collect, process, store and analyze large volumes of business-critical data.
                    • Master data management system.
                    • Data modelling and data architecture design.
                    • ETL, data integration and data migration design.
                    • Analysis and Solution Architecture Design.
                    • Can communicate English
                    Prefferred Qualifications:
                    • Master’s degree in Computer Science, Information Technology, or a related field.
                    ',
                    'benefit' => '
                    • “FPT care” health insurance provided by AON and is exclusive for FPT employees.
                    • Annual Summer Vacation: follows company’s policy and starts from May every year
                    • Salary review time/year or on excellent performance
                    • International, dynamic, friendly working environment
                    • Onsite in Japan short-term opportunities
                    • Annual leave, working conditions follow Vietnam labor laws.
                    • Other allowances: lunch allowance, working on-site allowance, etc.
                    ',
                    'amount' => 5,
                    'year_of_experience' => 5,
                    'start' => Carbon::now()->toDateTimeString(),
                    'end' => Carbon::now()->addMonths(3)->toDateTimeString(),
                    'gender' => 1,
                    'types' => [1],
                ],
                [
                    'title' => 'Devops Engineer',
                    'category_id' => 25,
                    'address_id' => 2,
                    'detail_address' => 'Hồ Chí Minh: F-Town Building, Lot T2, D1 Street, Saigon Hi-Tech Park, Tan Phu Ward, District 9, Ho Chi Minh City, Quận 9',
                    'description' => '• Working location: Hanoi, Ho Chi Minh
                    • Implement source code and CI pipelines migration.
                    • Support customers verify and Rollout.
                    • Develop global templates/ IaaC to quickly setup CI pipeline in Bamboo.
                    • Develop low maintenance / reusable scripts for versioning, process dependencies, signing, etc for CI migration.
                    • Modify ANT framework to integrate with Bamboo without impacting PROD.
                    • Update custom CI tools / plugins / apps as required to generate / deliver binaries.
                    • Bamboo plans to modify/ patch/ extend doc ker images and deliver to Artifactory.
                    • OEM Signing with latest tools version.
                    • Develop Ansible playbooks to patch applications on build nodes.
                    • Integrate CI pipelines with tools like Black duck Hub, Sonar Qube, Coverity, Twistlock, Unit Testing Frameworks.
                    ',
                    'requiment' => '• 2+ years experienced in DevOps
                    • Familiar with deployment application on-premise and Clouds ensure Loading Balancing/Performance/Scale System.
                    • Experience with version control systems like Gerrit, Bitbucket, Git…
                    • Experience with tool like Blackduck Hub, SonarQube, Coverity, Twistlock, Unit Testing Frameworks.
                    • Experience with Jenkins and Bamboo
                    • Experience with K8s architect and operating on that.
                    • Experience with Docker, Docker file, Helm chart, Azure CLI.
                    • Have strong knowledge about operation system Linux/Windows.
                    • Experience with agile development, continuous integration and automated testing
                    • Good teamwork and reliability.
                    • English: Can communicate directly with customer.
                    ',
                    'benefit' => '
                    Successful candidates will be part of a friendly, motivated and committed talent teams with various benefits and attractive offers:
                    ● Attractive salary. Performance based award up to $2500. Signing bonus.
                    ● Opportunity to work directly with customers.
                    ● Opportunity to learn and work with high standard of quality software development
                    ● Have chance to build long term relationships with colleagues via multiple projects.
                    ● Attractive offer, plus annual compensation and performance bonus.
                    ● “FPT care” health insurance provided by PTI and is exclusive for FPT employees.
                    ● Support for learning and certificate examination.
                    ● Company shuttle buses provide convenient way of transportation for all employees.
                    ● Salary review 1 time/year or on excellent performance
                    ● Annual Summer Vacation: follows company’s policy and starts from May every year
                    ● International, dynamic, friendly working environment
                    ● Annual leave, working conditions follow Vietnam labor laws.
                    ● Other allowances: transportation allowance, lunch allowance, working on-site allowance, etc.
                    ',
                    'amount' => 5,
                    'year_of_experience' => 4,
                    'start' => Carbon::now()->toDateTimeString(),
                    'end' => Carbon::now()->addMonths(3)->toDateTimeString(),
                    'gender' => 1,
                    'types' => [1],
                ],
            ],
            'Sun* Inc. (Sun Asterisk Inc.)' => [
                [
                    'title' => 'Ruby Engineer',
                    'category_id' => 25,
                    'address_id' => 1,
                    'detail_address' => 'Hà Nội: Tầng 13, tòa Keangnam Landmark 72, đường Phạm Hùng, quận Nam Từ Liêm, Tp. Hà Nội, Nam Từ Liêm',
                    'description' => 'Tham gia phân tích requirement, thiết kế hệ thống
                    Tham gia vào phát triển các sản phẩm công ty hoặc các dự án outsource với thị trường Nhật Bản
                    Ở phía server: triển khai các business logic, vận hành, bảo trì và đảm bảo hiệu năng của các hệ thống web
                    Kết hợp với bộ phận frontend trong việc xây dựng giao diện trang web
                    Nghiên cứu và áp dụng các công nghệ mới để nâng cao chất lượng các dự án hiện có
                    Tham gia vào các diễn đàn/ tech show về công nghệ của công ty
                    ',
                    'requiment' => '
                    Junior (Hà Nội):
                    Có ít nhất 1 năm kinh nghiệm làm việc với Ruby
                    Có kiến thức về lập trình OOP Ruby on Rails, Web Development, DBMS, ORM (làm nhiều những nội dung liên quan đến database performance, RESTful, SPA là một lợi thế)
                    Nắm vững và có kinh nghiệm làm việc với một số Gem cơ bản: Devise, Pundit, Kaminari v.v..
                    Có khả năng Unit Test, có tư duy DRY – Thao tác tốt với HTML, CSS, JavaScript (Jquery, AngularJS, Ajax, …), Bootstrap, JSON, XML,
                    Làm việc thành thạo với các tool quản lý version và management (Git, SVN, Redmine, Jira)
                    Có hiểu biết về Docker, AWS, CI/CD, deployment

                    Middle/Senior (Hà Nội + Đà Nẵng):
                    Có ít nhất 3 năm kinh nghiệm làm các dự án Ruby
                    Nắm vững Ruby on Rails, có kinh nghiệm làm việc và xử lý các hệ thống lớn
                    Có kinh nghiệm với OOP, MVC Framework, ORM, RESTful API, Design Patterns
                    Hiểu biết về TDD, Testing và có thể implements các requirement theo TDD, có tư duy DRY
                    Thao tác tốt với một trong các Database: MySQL, PostgreSQL, Oracle, …, có kinh nghiệm làm việc với Big Data là một lợi thế
                    Có kinh nghiệm làm việc với Cloud, Microservices
                    Thành thạo AWS, Docker Có kiến thức về Infrastructure, Deployment, CI/CD
                    Thành thạo các công cụ quản lý mã nguồn: GIT, SVN, và dự án Redmine, Jira.
                    Thao tác tốt với HTML, CSS, JavaScript (Jquery, AngularJS, Ajax, …), Bootstrap, JSON, XML, …

                    Yêu cầu khác:
                    + Có kinh nghiệm làm việc trong các dự án theo mô hình Agile
                    + Có khả năng làm việc teamwork cũng như làm việc độc lập
                    + Có thể làm việc dưới áp lực cao về deadline cũng như chất lượng sản phẩm
                    + Khả năng tư duy tốt, chủ động trong công việc, có tinh thần trách nhiệm cao để hoàn thành công việc được giao
                    ',
                    'benefit' => '
                    Môi trường chuyên nghiệp, cởi mở, đề cao sự sáng tạo:
                    Làm việc cùng những đồng nghiệp có lý tưởng thay đổi xã hội.
                    Coi trọng những góc nhìn khác biệt trong tập thể
                    Văn hóa học tập mạnh mẽ và thúc đẩy phát triển
                    Văn hoá chấp nhận rủi ro để trải nghiệm và phát triển

                    Tập trung hỗ trợ sự phát triển cá nhân:
                    Được tư vấn, đồng hành và hỗ trợ phát triển sự nghiệp cùng với hệ thống career path (phát triển theo hướng chuyên gia hoặc hướng quản lý) đã được nghiên cứu, thử nghiệm trong nhiều năm
                    Được định hướng mục tiêu cá nhân, nhóm và tổ chức
                    Trao quyền làm chủ
                    Hỗ trợ xác định mục tiêu 3 tháng-6 tháng (Goal Define Support)
                    Được truy cập thư viện tài liệu online Learning Hub với nhiều khóa học đa dạng được cung cấp bởi Udemy, Linkedln,…
                    Quan tâm đặc biệt tới nhân viên:

                    Lương: up to 20.000.000VND (Junior), up to $2200 gross (Middle/Senior) cùng các khoản trợ cấp, phụ cấp khác (ăn trưa, đi lại, phái đẹp, tiếng Nhật, chứng chỉ IT,..v.v...)
                    Lương tháng 13
                    Performance review: 2 lần/năm
                    Bảo hiểm sức khoẻ toàn diện Sun Care
                    Chế độ thâm niên
                    Chế độ chăm sóc phụ nữ: Nghỉ sinh lý phụ nữ: 2,5h/ tháng; nghỉ sau sinh cho nhân viên nữ có con dưới 1 tuổi: 1h/ngày
                    Chính sách hỗ trợ các hoạt động học tập, trao đổi, chia sẻ kiến thức, giao lưu văn hoá (Seminar công nghệ - Tech Expert, CLB: đọc sách, tiếng Nhật, CLB âm nhạc,...)
                    Du lịch thường niên, hoạt động team building hàng quý.
                    ',
                    'amount' => 5,
                    'salary_max' => 20000000,
                    'year_of_experience' => 3,
                    'start' => Carbon::now()->toDateTimeString(),
                    'end' => Carbon::now()->addMonths(4)->toDateTimeString(),
                    'gender' => 1,
                    'types' => [1],
                ],
                [
                    'title' => '2Dcg Designer',
                    'category_id' => 38,
                    'address_id' => 1,
                    'detail_address' => 'Hà Nội: Tầng 13, tòa Keangnam Landmark 72, đường Phạm Hùng, quận Nam Từ Liêm, Tp. Hà Nội, Nam Từ Liêm',
                    'description' => 'Lập kế hoạch và thực hiện các thiết kế nhân vật theo game
                    Thiết kế các nhân vật hay bối cảnh theo minh hoạ
                    Sản xuất các video manga trên các nền tảng như youtube…
                    Sản xuất thiết kế đồ hoạ trong game (iterm, tài liệu UI…)
                    Trao đổi, phối hợp chặt chẽ cùng Art Leader để tạo ra sản phẩm chất lượng cao
                    ',
                    'requiment' => '
                    Có kinh nghiệm làm trong ngành game và công ty sản xuất minh hoạ từ 1 năm trở lên
                    Có năng lực vẽ và phác thảo
                    Có kinh nghiệm vẽ minh họa nhân vật theo hình mẫu, nhân vật bao gồm cả bối cảnh
                    Có kinh nghiệm sản xuất WEB Manga, bản vẽ gốc hoạt hình là một lợi thế
                    Thành thạo sử dụng các công cụ Photoshop, Clipstudio, illustrator, AI…
                    Đính kèm CV & Portfolio các sản phẩm, dự án đã hoàn thành hoặc link behance, deviantart…
                    ',
                    'benefit' => '
                    Môi trường chuyên nghiệp, cởi mở, đề cao sự sáng tạo:
                    Làm việc cùng những đồng nghiệp có lý tưởng thay đổi xã hội.
                    Coi trọng những góc nhìn khác biệt trong tập thể
                    Văn hóa học tập mạnh mẽ và thúc đẩy phát triển
                    Văn hoá chấp nhận rủi ro để trải nghiệm và phát triển

                    Tập trung hỗ trợ sự phát triển cá nhân:
                    Được tư vấn, đồng hành và hỗ trợ phát triển sự nghiệp cùng với hệ thống career path (phát triển theo hướng chuyên gia hoặc hướng quản lý) đã được nghiên cứu, thử nghiệm trong nhiều năm
                    Được định hướng mục tiêu cá nhân, nhóm và tổ chức
                    Trao quyền làm chủ
                    Hỗ trợ xác định mục tiêu 3 tháng-6 tháng (Goal Define Support)
                    Được truy cập thư viện tài liệu online Learning Hub với nhiều khóa học đa dạng được cung cấp bởi Udemy, Linkedln,…
                    Quan tâm đặc biệt tới nhân viên:

                    Lương: up to 20.000.000VND (Junior), up to $2200 gross (Middle/Senior) cùng các khoản trợ cấp, phụ cấp khác (ăn trưa, đi lại, phái đẹp, tiếng Nhật, chứng chỉ IT,..v.v...)
                    Lương tháng 13
                    Performance review: 2 lần/năm
                    Bảo hiểm sức khoẻ toàn diện Sun Care
                    Chế độ thâm niên
                    Chế độ chăm sóc phụ nữ: Nghỉ sinh lý phụ nữ: 2,5h/ tháng; nghỉ sau sinh cho nhân viên nữ có con dưới 1 tuổi: 1h/ngày
                    Chính sách hỗ trợ các hoạt động học tập, trao đổi, chia sẻ kiến thức, giao lưu văn hoá (Seminar công nghệ - Tech Expert, CLB: đọc sách, tiếng Nhật, CLB âm nhạc,...)
                    Du lịch thường niên, hoạt động team building hàng quý.
                    ',
                    'amount' => 1,
                    'year_of_experience' => 3,
                    'start' => Carbon::now()->toDateTimeString(),
                    'end' => Carbon::now()->addMonths(4)->toDateTimeString(),
                    'gender' => 1,
                    'types' => [1],
                ],
                [
                    'title' => 'HR Business Partner Leader ',
                    'category_id' => 33,
                    'address_id' => 8,
                    'detail_address' => '- Đà Nẵng: Tầng 4, tòa FHome Building, số 16 Lý Thường Kiệt, Hải Châu',
                    'description' => 'Xây dựng các chiến lược, kế hoạch nhân sự cho toàn chi nhánh Sun Asterisk Đà Nẵng
                    Quản lý định biên, ngân sách các bộ phận trong chi nhánh
                    Tư vấn đội ngũ quản lý trực tiếp các vấn đề liên quan đến chiến lược nhân sự, quản lý hiệu suất và career path cho nhân viên và triển khai các chính sách phát triển nhân tài
                    Triển khai các chính sách, quy trình nhân sự liên quan đến công tác bố trí, sắp xếp và quản lý nhân sự
                    Nắm bắt, quản lý và giải quyết các vấn đề liên quan tới nhân sự nội bộ
                    Phối hợp chặt chẽ với quản lý bộ phận và nhân viên để cải thiện mối quan hệ công việc, xây dựng tinh thần, tăng năng suất và động lực cho nhân sự nội bộ
                    ',
                    'requiment' => '
                    Ít nhất 5-8 năm kinh nghiệm làm việc trong ngành nhân sự (Ưu tiên có kinh nghiệm quản lý size đơn vị từ 300 trở lên)
                    Có kiến thức, khả năng và kinh nghiệm xử lý các vấn đề nhân sự phức tạp, bao gồm các vấn đề liên quan đến phúc lợi, phân tích cấu trúc tổ chức, quan hệ lao động, quản lý hiệu suất và động lực, Luật Lao động…
                    Critical thinking và logical thinking tốt
                    Có khả năng lắng nghe và linh hoạt trong giải quyết vấn đề
                    Kỹ năng giao tiếp và thuyết trình tốtKhả năng làm việc độc lập và làm việc theo nhóm, khả năng làm việc ở cường độ cao và chịu áp lực tốt
                    Có khả năng quản lý đội nhóm là 1 lợi thế
                    Có định hướng phát triển theo mô hình HRBP
                    Kỹ năng tiếng Anh tốt
                    Ưu tiên các ứng viên có kinh nghiệm làm việc trong môi trường IT và hiểu biết về quy trình phát triển phần mềm
                    ',
                    'benefit' => '
                    Môi trường chuyên nghiệp, cởi mở, đề cao sự sáng tạo:
                    Làm việc cùng những đồng nghiệp có lý tưởng thay đổi xã hội.
                    Coi trọng những góc nhìn khác biệt trong tập thể
                    Văn hóa học tập mạnh mẽ và thúc đẩy phát triển
                    Văn hoá chấp nhận rủi ro để trải nghiệm và phát triển

                    Tập trung hỗ trợ sự phát triển cá nhân:
                    Được tư vấn, đồng hành và hỗ trợ phát triển sự nghiệp cùng với hệ thống career path (phát triển theo hướng chuyên gia hoặc hướng quản lý) đã được nghiên cứu, thử nghiệm trong nhiều năm
                    Được định hướng mục tiêu cá nhân, nhóm và tổ chức
                    Trao quyền làm chủ
                    Hỗ trợ xác định mục tiêu 3 tháng-6 tháng (Goal Define Support)
                    Được truy cập thư viện tài liệu online Learning Hub với nhiều khóa học đa dạng được cung cấp bởi Udemy, Linkedln,…
                    Quan tâm đặc biệt tới nhân viên:

                    Lương: up to 20.000.000VND (Junior), up to $2200 gross (Middle/Senior) cùng các khoản trợ cấp, phụ cấp khác (ăn trưa, đi lại, phái đẹp, tiếng Nhật, chứng chỉ IT,..v.v...)
                    Lương tháng 13
                    Performance review: 2 lần/năm
                    Bảo hiểm sức khoẻ toàn diện Sun Care
                    Chế độ thâm niên
                    Chế độ chăm sóc phụ nữ: Nghỉ sinh lý phụ nữ: 2,5h/ tháng; nghỉ sau sinh cho nhân viên nữ có con dưới 1 tuổi: 1h/ngày
                    Chính sách hỗ trợ các hoạt động học tập, trao đổi, chia sẻ kiến thức, giao lưu văn hoá (Seminar công nghệ - Tech Expert, CLB: đọc sách, tiếng Nhật, CLB âm nhạc,...)
                    Du lịch thường niên, hoạt động team building hàng quý.
                    ',
                    'amount' => 1,
                    'year_of_experience' => 8,
                    'start' => Carbon::now()->toDateTimeString(),
                    'end' => Carbon::now()->addMonths(6)->toDateTimeString(),
                    'gender' => 1,
                    'types' => [1],
                ],
                [
                    'title' => 'System Engineer Fresher',
                    'category_id' => 24,
                    'address_id' => 8,
                    'detail_address' => 'Đà Nẵng: Tầng 4, tòa FHome Building, số 16 Lý Thường Kiệt',
                    'description' => 'Với mục tiêu tuyển dụng đội ngũ kỹ sư giỏi tham gia vào các dự án phát triển phần mềm với những khách hàng hàng đầu Nhật Bản, Sun Asterisk Inc. mong muốn tuyển dụng các bạn sinh viên năm cuối hoặc mới tốt nghiệp để đào tạo trở thành những kỹ sư chính thức của công ty.

                    Với quy trình đào tạo chuẩn Nhật Bản, với những chuyên gia, trainer giỏi, chúng tôi đã tạo ra nhiều lứa kỹ sư xuất sắc, không chỉ về chuyên môn kỹ thuật mà còn giỏi về quy trình, hệ thống và các kỹ năng khác.

                    Đến với Sun Asterisk Inc., bạn sẽ được hòa mình vào không khí vui tươi, trẻ trung nhưng cũng không kém phần chuyên nghiệp của phòng đào tạo trước khi chính thức bắt tay vào các dự án đầy cam go và thử thách. Chúng tôi đến công ty không chỉ để làm việc, mà hơn thế, chúng tôi có những người bạn, những người đồng nghiệp gắn bó cùng chia sẻ giúp đỡ và cùng nhau vươn lên.

                    WHAT WE DO:

                    Tham gia training on Job ở vị trí System Engineer
                    Quản trị hệ thống server nội bộ công ty
                    Hỗ trợ vận hành hệ thống Global Customer
                    Hỗ trợ các công việc cho bộ phận IT support khi có yêu cầu:
                    Hỗ trợ nhân viên & xử lý các lỗi liên quan đến máy tính, mạng máy tính, phần mềm
                    Cài đặt phần mềm và hệ điều hành, cấp phát máy tính cho nhân viên
                    Vận hành, quản trị toàn bộ hệ thống network, mail nội bộ, camera, điện thoại
                    ',
                    'requiment' => '
                    Tốt nghiệp chuyên nghành CNTT hoặc điện tử viễn thông
                    Có kiến thức về Linux OS (Centos, Ubuntu,…):
                    Biết sử dụng các runlevels trên Linux
                    Biết cài đặt và chia các phân vùng ổ cứng
                    Biết sử dụng các công cụ cài đặt/xóa các packages trên Linux
                    Biết sử dụng các lệnh để tìm kiếm và xử lý file text
                    Hiểu biết về quyền của thư mục và file, biết cách phân quyền cho người dùng
                    Biết kiểm tra các tiến trình, kill tiến trình
                    Biết mount và unmount các file system
                    Biết viết shell script, hiểu về $PATH và thêm đường dẫn vào $PATH là lợi thế
                    Có kiến thức về ảo hóa
                    Có kiến thức về container là lợi thế
                    ',
                    'benefit' => '
                    Môi trường chuyên nghiệp, cởi mở, đề cao sự sáng tạo:
                    Làm việc cùng những đồng nghiệp có lý tưởng thay đổi xã hội.
                    Coi trọng những góc nhìn khác biệt trong tập thể
                    Văn hóa học tập mạnh mẽ và thúc đẩy phát triển
                    Văn hoá chấp nhận rủi ro để trải nghiệm và phát triển
                    Tập trung hỗ trợ sự phát triển cá nhân:

                    Được tư vấn, đồng hành và hỗ trợ phát triển sự nghiệp cùng với hệ thống career path (phát triển theo hướng chuyên gia hoặc hướng quản lý) đã được nghiên cứu, thử nghiệm trong nhiều năm
                    Được định hướng mục tiêu cá nhân, nhóm và tổ chức
                    Trao quyền làm chủ
                    Hỗ trợ xác định mục tiêu 3 tháng-6 tháng (Goal Define Support)
                    Được truy cập thư viện tài liệu online Learning Hub với nhiều khóa học đa dạng được cung cấp bởi Udemy, Linkedln,…
                    Quan tâm đặc biệt tới nhân viên:

                    Lương: upto 12.000.000 VND (Gross)
                    Lương tháng 13 & thưởng performance
                    Performance review: 2 lần/năm
                    Bảo hiểm sức khoẻ toàn diện Sun Care

                    Chế độ thâm niên
                    Chế độ chăm sóc phụ nữ: Nghỉ sinh lý phụ nữ: 2,5h/ tháng; nghỉ sau sinh cho nhân viên nữ có con dưới 1 tuổi: 1h/ngày\
                    Chính sách hỗ trợ các hoạt động học tập, trao đổi, chia sẻ kiến thức, giao lưu văn hoá (Seminar công nghệ – Tech Expert, CLB: đọc sách, tiếng Nhật, CLB âm nhạc,…)
                    Du lich thường niên, hoạt động team building hàng quý.
                    ',
                    'amount' => 2,
                    'year_of_experience' => 1,
                    'start' => Carbon::now()->toDateTimeString(),
                    'end' => Carbon::now()->addMonths(6)->toDateTimeString(),
                    'gender' => 1,
                    'types' => [1],
                ],
            ],
            'Công ty Cổ phần Thẻ Du Lịch CRYSTAL BAY' => [
                [
                    'title' => 'Chuyên Viên Tư Vấn Du Lịch Nghỉ Dưỡng Cao Cấp (Lương Cứng + Hoa Hồng: 30-40 Triệu/ Tháng) ',
                    'category_id' => 41,
                    'address_id' => 1,
                    'detail_address' => '- Hà Nội: Toà nhà Capital Place - 29 Liễu Giai, Ba Đình',
                    'description' => '- Tư vấn khách hàng, giới thiệu sản phẩm, dịch vụ du lịch tới khách hàng (khách hàng đến trực tiếp văn phòng làm việc, không đi thị trường);

                    - Chăm sóc, tư vấn khách hàng dựa trên danh mục Công ty cung cấp;

                    - Phát triển đa dạng nguồn khách hàng ngoài danh mục khách hàng công ty cung cấp;

                    - Tìm hiểu, thu thập thông tin, nhu cầu của khách hàng/ thị trường, thăm dò ý kiến khách hàng về hệ thống sản phẩm (chất lượng, dịch vụ, giá cả…);

                    - Phối hợp với các phòng ban liên quan thực hiện ký kết hợp đồng, hướng dẫn sử dụng sản phẩm cho khách hàng và các dịch vụ sau bán hàng;

                    - Thực hiện các công việc khác theo chỉ đạo của cấp quản lý và Ban Lãnh Đạo Công ty.

                    - Làm việc từ T3-CN (Nghỉ ngày Thứ 2)

                    - Chi tiết : trao đổi cụ thể trong quá trình tham gia phỏng vấn.
                    ',
                    'requiment' => '
                    - Nam – Nữ từ 20-30 tuổi.

                    - Ưu tiên có kinh nghiệm chăm sóc khách hàng, bán hàng

                    - Nhanh nhẹn, chăm chỉ, chịu khó

                    - Có kỹ năng giao tiếp tốt là một lợi thế.

                    - Ưu tiên ngoại hình ưa nhìn.
                    ',
                    'benefit' => '
                    - Lương cố định (6,500,000 – không phụ thuộc doanh số) + % Hoa hồng + Thưởng nóng. Tổng thu nhập lên tới 30,000,000 - 40,000,000 đồng.

                    - Được làm việc trong môi trường chuyên nghiệp, văn phòng hạng A sang chảnh ngay trung tâm Hà Nội, đồng nghiêp trẻ trung, năng động, thích hợp GenZ.

                    - UV chưa có kinh nghiệm: Được tặng khoá đào tạo Quản lý kinh doanh trị giá 16.000.000 đồng, được hỗ trợ thu nhập ngay trong thời gian đào tạo 6.000.000 đồng.

                    - Được cung cấp đầy đủ trang thiết bị cần thiết để phục vụ cho Công việc

                    - Đóng BHXH ngay khi tiếp nhận chính thức, Du lịch nghỉ dưỡng Resort 5 sao của Tập đoàn hàng năm (Không phân biệt chính thức, thử việc).

                    - Hưởng các chính sách phúc lợi theo Luật Lao động và chính sách của Công ty.
                    ',
                    'amount' => 20,
                    'salary_min' => 30000000,
                    'salary_max' => 40000000,
                    'year_of_experience' => 2,
                    'start' => Carbon::now()->toDateTimeString(),
                    'end' => Carbon::now()->addMonths(6)->toDateTimeString(),
                    'gender' => 1,
                    'types' => [1],
                ],
                [
                    'title' => 'Chuyên Viên Content - Thu Nhập Từ 15 Triệu',
                    'category_id' => 28,
                    'address_id' => 1,
                    'detail_address' => '- Hà Nội: Toà nhà Capital Place - 29 Liễu Giai, Ba Đình',
                    'description' => '- Sáng tạo nội dung cho các kênh Website, Facebook, Brochure, Tờ rơi, Video… và các ấn phẩm truyền thông khác theo định hướng của Công ty
                    - Lên ý tưởng thông điệp quảng cáo cho các chiến dịch Marketing của Công ty
                    - Tham gia xây dựng chiến lược, kế hoạch Marketing ngắn hạn và dài hạn theo Tháng/Quý/Năm và trực tiếp phối hợp, thực hiện, đảm bảo kết quả do Ban lãnh đạo công ty đưa ra
                    - Tham gia kiểm soát các hạng mục truyền thông theo từng giai đoạn
                    - Tiếp nhận thông tin khách hàng, liên hệ, lấy brief về để team cùng xây dựng, phân tích và thiết kế proposal (đề xuất gửi khách hàng)
                    - Lập hợp đồng và các cam kết trong quá trình triển khai dự án với khách hàng.
                    - Các công việc phát sinh khác theo yêu cầu củɑ quản lý trực tiếp và Ban Giám Đốc
                    ',
                    'requiment' => '
                    - Nam/Nữ tốt nghiệp Đại học trở lên chuyên ngành truyền thông, marketing, báo chí, Kinh tế…
                    - Có trên 02-03 năm kinh nghiệm trong việc sáng tạo Nội dung ưu tiên trong lĩnh vực du lịch và bất động sản.
                    - Nhanh nhẹn, ham học hỏi.
                    ',
                    'benefit' => '
                    - Mức lương thoả thuận dựa trên năng lực (15-25tr), có chế độ khen thưởng dành cho nhân viên xuất sắc
                    - Hưởng đầy đủ chế độ phúc lợi của Công ty (BHXH, BHYT, BHTN, Nghỉ mát, Đào tạo,…)
                    - Được tham gia các hoạt động ngoại khóa: teambuilding, văn nghệ, thể thao, du lịch cùng Công ty.
                    - Môi trường làm việc năng động, trẻ trung, thân thiện.
                    - Làm viêc từ thứ 2 đến thứ 6 (Từ 8h30-17h30) Thứ 7 làm cách tuần
                    ',
                    'amount' => 1,
                    'salary_min' => 15000000,
                    'year_of_experience' => 1,
                    'start' => Carbon::now()->toDateTimeString(),
                    'end' => Carbon::now()->addMonths(6)->toDateTimeString(),
                    'gender' => 1,
                    'types' => [1],
                ],
            ],
            'Công ty TNHH AEON Việt Nam' => [
                [
                    'title' => 'Thực Tập Sinh Pháp Lý (Legal Intern)',
                    'category_id' => 35,
                    'address_id' => 2,
                    'detail_address' => 'Hồ Chí Minh: Aeon Celadon Tân Phú - 30 Tân Thắng, P.Sơn Kỳ, Q.Tân Phú, TP.HCM, Tân Phú, Tân Phú',
                    'description' => '1. Hoạt động pháp lý hàng ngày

                    Hỗ trợ thực hiện các nghiên cứu pháp lý, cập nhật và cảnh báo về những thay đổi pháp lý trong các quy định pháp luật có liên quan.
                    Soạn thảo, đệ trình và theo dõi các hợp đồng, tài liệu pháp lý và hồ sơ đăng ký cho các Cơ quan có thẩm quyền liên quan để xin các giấy phép cần thiết.
                    2. Rủi ro pháp lý và tuân thủ quy định

                    Soạn thảo và xem xét các hợp đồng đơn giản, thỏa thuận, hòa giải, các văn bản pháp lý phát sinh từ hoạt động của Công ty.
                    Xem xét, tư vấn và đề xuất sửa đổi hợp đồng mua bán và các tài liệu liên quan.
                    3. Nội quy và quy định

                    Tuân thủ tất cả các quy trình làm việc, các chính sách, nội quy và quy định của công ty.
                    4. Các nhiệm vụ khác hoặc trách nhiệm khác theo sự phân công của người hướng dẫn.
                    ',
                    'requiment' => '
                    Sinh viên năm 3, năm 4 thuộc các trường Đại học/Cao đẳngCó kinh nghiệm về soạn content, tổ chức EventKỹ năng tìm kiếm và tổng hợp thông tinKỹ năng tin học văn phòng cơ bản - Yêu thích các hoạt động phát triển bền vững, môi trường, cộng đồng, …
                    Đáp ứng thời gian thực tập ít nhất 3 tháng
                    Làm ít nhất 5 buổi/tuần (Có thể linh hoạt dựa trên lịch học của ứng viên)
                    ',
                    'benefit' => '
                    Hỗ trợ bữa ăn canteen
                    Hỗ trợ laptop trong quá trình làm việc
                    Hướng dẫn công việc chi tiết
                    Xác nhận thực tập theo mẫu của công ty
                    Hỗ trợ sắp xếp lịch làm việc phù hợp thời gian học
                    Hỗ trợ xe đưa đón cho các bạn ở xa ( Q.7, Q.Bình Thạnh, TP.Thủ Đức)
                    ',
                    'amount' => 1,
                    'year_of_experience' => 1,
                    'start' => Carbon::now()->toDateTimeString(),
                    'end' => Carbon::now()->addMonths(3)->toDateTimeString(),
                    'gender' => 1,
                    'types' => [3],
                ],
            ],
        ];
        foreach ($data as $key => $info) {
            $company = Company::where('name', $key)->first();
            $hr = User::where('company_id', $company->id)->first();
            foreach ($info as $item) {
                $tempt = Arr::except($item, 'types');
                $tempt['hr_id'] = $hr->id;
                $tempt['company_id'] = $company->id;
                $task = Task::create($tempt);
                $task->types()->attach($item['types']);
            }
        }
    }
}
