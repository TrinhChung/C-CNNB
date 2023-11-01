<?php

namespace Database\Seeders;

use App\Models\Activation;
use App\Models\Company;
use App\Models\User;
use Faker\Generator as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        //
        $fake = new Faker();
        $data = [
            [
                'name' => 'CÔNG TY CỔ PHẦN THẺ DU LỊCH CRYSTAL BAY',
                'link' => 'https://crystalbay.com/',
                'email' => Str::random(5).'@gmail.com',
                'image' => 'https://www.hoteljob.vn/uploads/images/2022/03/02-16/1a79b92b9224667a3f35-18.jpg',
                'description' => 'Crystal Bay Travel Card Jsc,. là công ty con của tập đoàn Crystal Bay Group - tập đoàn đa ngành nghề xuất thân từ lữ hành du lịch (Crystalbay.com). CBC hướng tới mục tiêu xây dựng trải nghiệm & dịch vụ khách hàng cao cấp trong lĩnh vực nghỉ dưỡng hạng sang trong nước và quốc tế, khởi đầu bằng một tấm thẻ nghỉ dưỡng kết nối 9 điểm đến tiêu chuẩn 5* trải dài từ Bắc vào Nam.',
                'address_id' => 1,
                'detail_address' => 'Tầng 12, tòa nhà Capital Place, 29 Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam',
                'renumeration_policy' => '',
                'tax_code' => '0109664087',
                'password' => '123123123',
            ],
            [
                'name' => 'Sun* Inc. (Sun Asterisk Inc.)',
                'link' => 'https://sun-asterisk.vn',
                'email' => Str::random(5).'@gmail.com',
                'image' => 'https://en.sun-asterisk.com/wp-content/uploads/2020/06/sun-ogp.png',
                'description' => 'Sun* Inc. (Sun Asterisk Inc.) – Là một Digital Creative Studio, Sun* luôn đề cao tinh thần làm chủ sản phẩm, tư duy sáng tạo trong mỗi dự án để mang đến những trải nghiệm ""Awesome"" nhất cho end-user.



            Với tầm nhìn "Tạo ra thế giới bình đẳng nơi mỗi người đều có cơ hội mang lại những giá trị “Awesome”" và Có sứ mệnh "Cùng những con người đam mê thử thách, chúng tôi tạo ra thay đổi tích cực cho xã hội thông qua các sản phẩm và lĩnh vực kinh doanh". Với hai dòng dịch vụ là ""Creative & Engineering"" và ""Talent Platform"", Sun* đã và đang từng bước cùng công nghệ tạo ra những giá trị tốt đẹp cho xã hội.



            Thế giới mà Sun* đang hướng tới là nơi tất cả mọi người đều được tự do tạo ra những giá trị tuyệt vời, mang lại sự thay đổi tích cực cho toàn xã hội. Thời kỳ kỹ sư chỉ biết kỹ thuật đã qua, đây là kỷ nguyên của những Creator thực thụ, có tầm ảnh hưởng ở mọi nơi.



            Tại Sun*, chúng tôi luôn tìm kiếm những con người đam mê thử thách để thực hiện hóa những khát vọng trên. Nếu bạn là một người như vậy, hãy gia nhập đội ngũ Sun* để cùng nhau chúng ta sẽ chinh phục những điều phi thường thay đổi thế giới.',
                'address_id' => 1,
                'detail_address' => '13F Keangnam Hanoi Landmark Tower, khu E6 khu ĐTM Cầu Giấy, Phường Mễ Trì, Quận Nam Từ Liêm, Thành phố Hà Nội, Việt Nam',
                'renumeration_policy' => '',
                'tax_code' => '0106045931',
                'password' => '123123123',
            ],
            [
                'name' => 'Công ty Cổ phần MISA',
                'link' => 'https://www.misa.vn/',
                'email' => Str::random(5).'@gmail.com',
                'image' => 'https://www.invert.vn/media/ar/logo-misa.jpg',
                'description' => 'Trải qua 28 năm hình thành và phát triển, đến nay MISA đã xây dựng được đội ngũ hơn 3000 nhân sự, khẳng định được vị thế của mình trong lĩnh vực phát triển phần mềm: Top 5 công ty CNTT và Top 1 công ty làm sản phẩm tại Việt Nam với quy trình làm việc chuyên nghiệp, lộ trình phát triển sự nghiệp rõ ràng. Với khát khao vươn cao bay xa hơn nữa chúng tôi hy vọng bạn sẽ trở thành một mảnh ghép để đưa MISA vươn ra biển lớn, cùng bạn kiến tạo nên những thành tựu tuyệt vời

                1. Tầm nhìn

                Bằng nỗ lực sáng tạo trong khoa học, công nghệ và đổi mới trong quản trị, MISA mong muốn trở thành công ty có nền tảng, phần mềm và dịch vụ được sử dụng phổ biến nhất trong nước và quốc tế.

                2. Sứ mệnh

                Sứ mệnh của MISA là phát triển các nền tảng, phần mềm và dịch vụ công nghệ thông tin để thay đổi ngành kinh tế và giúp khách hàng thực hiện công việc theo phương thức mới, năng suất và hiệu quả hơn nhằm thúc đẩy sự phát triển của đất nước và các quốc gia trên thế giới.

                3. Giá trị cốt lõi

                Tin cậy: Các nền tảng, sản phẩm và dịch vụ MISA mang lại cho khách hàng đều có độ tin cậy cao, con người MISA với tri thức và văn hóa cao luôn mang lại cho khách hàng cảm giác tin cậy trong giao dịch và chuyển giao tri thức, công nghệ.

                Tiện ích: Các nền tảng, sản phẩm và dịch vụ MISA luôn thỏa mãn mọi yêu cầu nghiệp vụ của khách hàng. Khách hàng có thể dễ dàng tiếp cận và sử dụng nền tảng, sản phẩm, dịch vụ của MISA bất cứ khi nào, bất cứ nơi nào. Đội ngũ tư vấn, hỗ trợ khách hàng của MISA luôn sẵn sàng phục vụ 365 ngày/năm và 24 giờ/ngày.

                Tận tình: Con người MISA từ những người phát triển nền tảng, sản phẩm đến những người kinh doanh tư vấn và các bộ phận khác luôn luôn tận tâm, tận lực phục vụ vì lợi ích của khách hàng, làm cho khách hàng tin cậy và yêu mến như một người bạn, một người đồng hành trong sự nghiệp.',
                'address_id' => 1,
                'detail_address' => 'Tầng 9 tòa nhà Technosoft ngõ 15 Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội',
                'renumeration_policy' => '',
                'tax_code' => '0101243150',
                'password' => '123123123',
            ],
            [
                'name' => 'GOT IT',
                'link' => 'https://www.gotit.vn/',
                'email' => Str::random(5).'@gmail.com',
                'image' => 'https://vuihoctienganh.vn/wp-content/uploads/2021/11/cach-dung-got-it.png',
                'description' => "Dayone is the parent company of Got It (2015) and Scan It (2022) with an exciting new product launching in 2023.
                Established in 2015, Got It is the original and by far the largest digital voucher, loyalty and gifting solutions platform in Vietnam.
                Got It distributes well over one million vouchers on behalf of its thousands of clients on a monthly basis.  That makes us really is the gift of choice.
                Scan It brings OCR and EKYC technology to the forefront of branding and marketing, enabling brands to promote and grow their customer base, manage their loyalty platforms and ultimately drive sales.

                Got It and Scan It will soon be joined by another product, just as exciting and potentially bigger than both. You'll be hearing much more on this topic in the months to come.

                Our team is over two hundred strong and we are just getting going.  That's why we're hiring!
                We seek honest, positive, energized, team oriented and results driven people to come join us.
                Our environment is safe and comfortable, we offer equality, we listen and we're friendly, and we work hard too.
                If you match the criteria and you make it into our team, you'll love working with us, so if you think you've got what it takes. Please apply!!!",
                'address_id' => 2,
                'detail_address' => '9-11 Nguyễn Văn Thủ, P. Đa Kao, Quận 1, TP. Hồ Chí Minh',
                'renumeration_policy' => '',
                'tax_code' => '3702672960',
                'password' => '123123123',
            ],
            [
                'name' => 'Tổ chức Giáo dục và Đào tạo Apollo Việt Nam',
                'link' => 'http://apollo.edu.vn/',
                'email' => Str::random(5).'@gmail.com',
                'image' => 'https://alex.apollo.edu.vn/angular/assets/img/Apollo-Logo.png',
                'description' => 'Chúng tôi thành lập trung tâm Anh ngữ Apollo năm 1995 với sứ mệnh đào tạo thế hệ trẻ Việt Nam thành công dân toàn cầu để thúc đẩy sự thịnh vượng, và giúp họ thay đổi thế giới theo hướng tích cực hơn. Với chúng tôi, phần thưởng lớn nhất là được nhìn thấy cuộc sống của mọi người tốt đẹp hơn nhờ sự nỗ lực và nhiệt huyết của đội ngũ giáo viên tài năng tại Apollo.

                Chúng tôi hi vọng có thể giúp nhiều học viên hơn nữa và sẽ luôn là “Nơi những giá trị tốt nhất trở nên tốt hơn”.



                - Arabella Peters & Khalid Muhmood - Đồng sáng lập Apollo English

                Tầm nhìn:

                Đào tạo thế hệ trẻ Việt Nam trở thành công dân toàn cầu và thúc đẩy sự thịnh vượng của cá nhân và đất nước Việt Nam qua các khoá học Tiếng Anh với chất lượng giảng dạy xuất sắc. Trong một thế giới biến động không ngừng, việc phát triển những kĩ năng cần thiết sẽ mang lại lợi thế to lớn để thành công vượt trội, cả ở môi trường trong nước và quốc tế.

                Sứ mệnh:

                Chúng tôi luôn chú trọng vào chất lượng giảng dạy của các chương trình học Tiếng Anh để học viên thành công hơn. Với hơn 20 năm kinh nghiệm giảng dạy, đội ngũ giáo viên 100% nước ngoài có trình độ chuyên môn cao, và phương pháp LETS độc quyền chúng tôi không chỉ giúp học viên sử dụng Tiếng Anh thành thạo và tự tin mà còn phát triển những kỹ năng cuộc sống cần thiết để đạt thành tích cao trong học tập và vững bước tương lai. Thành công của học viên cũng chính là thành công của chúng tôi.',
                'address_id' => 1,
                'detail_address' => 'Số 181 Phố Huế, Hai Bà Trưng, Hà Nội',
                'renumeration_policy' => '',
                'tax_code' => '0100774857',
                'password' => '123123123',
            ],
            [
                'name' => 'Công ty TNHH AEON Việt Nam',
                'link' => 'https://www.aeon.com.vn/tuyen-dung/',
                'email' => Str::random(5).'@gmail.com',
                'image' => 'https://static.ybox.vn/2018/11/4/1542257069814-700X400%20(1).png',
                'description' => 'Công ty TNHH AEON Việt Nam hiện đang đầu tư và kinh doanh nhiều lĩnh vực bán lẻ đa dạng như: Trung tâm Mua sắm, Trung tâm Bách hóa tổng hợp và Siêu thị, Cửa hàng Chuyên doanh, Thương mại điện tử. Khởi đầu bằng trung tâm mua sắm AEON Tân Phú Celadon vào đầu năm 2014, đến đầu năm 2021 AEON Việt Nam đang vận hành và kinh doanh 3 Trung tâm mua sắm, 3 Trung tâm Bách hóa Tổng hợp & Siêu Thị, 24 cửa hàng chuyên doanh, trang thương mại điện tử AEON Eshop.',
                'address_id' => 2,
                'detail_address' => '30 Bờ Bao Tân Thắng, phường Sơn Kỳ, quận Tân Phú, Tp. HCM',
                'renumeration_policy' => '',
                'tax_code' => '0311241512',
                'password' => '123123123',
            ],
            [
                'name' => 'OpenCommerce Group',
                'link' => 'https://medium.com/open-commerce-group',
                'email' => Str::random(5).'@gmail.com',
                'image' => 'https://static.ybox.vn/2021/7/5/1627019429301-Thi%E1%BA%BFt%20k%E1%BA%BF%20kh%C3%B4ng%20t%C3%AAn%20(1).png',
                'description' => 'OpenCommerce Group hướng tới mục tiêu tạo ra hệ sinh thái các sản phẩm công nghệ giúp thúc đẩy, nâng cao chất lượng của thương mại điện tử nói chung và thương mại xuyên biên giới nói riêng

                ‍Sau hơn một thập kỷ hoạt động trong lĩnh vực này, với:

                • Quy mô nhân sự: 400+

                • Đặt dấu ấn tại 170+ quốc gia và vùng lãnh thổ

                • Phục vụ hơn 80,000 doanh nghiệp toàn cầu

                OpenCommerce Group tự tin khẳng định vai trò bệ phóng quan trọng của mình trong việc hỗ trợ các doanh nhân, doanh nghiệp kinh doanh trực tuyến phát triển, có thể tự tin cạnh tranh sòng phẳng cùng "các ông lớn" trên thế giới.',
                'address_id' => 1,
                'detail_address' => '	130 Đường Trung Phụng, Phường Trung Phụng, Quận Đống Đa, Thành phố Hà Nội, Việt Nam',
                'renumeration_policy' => '',
                'tax_code' => '0109903994',
                'password' => '123123123',
            ],
            [
                'name' => 'CÔNG TY TÀI CHÍNH TRÁCH NHIỆM HỮU HẠN MỘT THÀNH VIÊN LOTTE VIỆT NAM',
                'link' => 'https://www.lottefinance.vn/web/company/lotteVietnam?csrt=4849464169283053656',
                'email' => Str::random(5).'@gmail.com',
                'image' => 'https://lh4.googleusercontent.com/c3vHerROYAp5jwbQ438nR-XFwq_LgMubfy7-gTi5yA10yQ8R5cyoEmcK3tjaVws47CFIUWNZozCSUyOIohcHoxCxsLT6YSu6ksRM774p5S6hWAVTNGG4BG9AGQD_cBgvpf-kCUJ1VaYFFuy-dcBhlDA',
                'description' => 'CÔNG TY TÀI CHÍNH TRÁCH NHIỆM HỮU HẠN MỘT THÀNH VIÊN LOTTE VIỆT NAM

                Tầng 12A tòa Tháp Tây, tòa nhà Lotte Center, số 54 Liễu Giai, Phường Cống Vị, Quận Ba Đình, Thành phố Hà Nội, Việt Nam

                Dịch vụ tài chính linh hoạt của LotteFinance tại Việt Nam được phát triển dựa trên sự thấu hiểu phong cách và lối sống của người Việt, kết hợp nền tảng công nghệ tiên tiến như Fintech, Big Data.

                Được thành lập năm 1948, LOTTE là một trong những tập đoàn toàn cầu lớn nhất tại Hàn Quốc, tham gia vào nhiều lĩnh vực kinh doanh bao gồm phân phối, khách sạn, du lịch, F&B, xây dựng, hóa học và tài chính.

                LotteCard hoạt động trên toàn bộ mạng lưới và cơ sở hạ tầng của Tập đoàn LOTTE, từ các cửa hàng bách hóa, siêu thị, mua sắm trực tuyến đến rạp chiếu phim và cửa hàng cà phê. LotteCard là một trong những nhà cung cấp sản phẩm tài chính tín dụng hàng đầu của Hàn Quốc, ứng dụng công nghệ FinTech vào dịch vụ. Ngoài ra, thấu hiểu sự đa dạng trong phong cách sống của khách hàng, LotteCard luôn tận tâm để phát triển các dịch vụ cạnh tranh chỉ có thể tìm thấy tại LotteCard.

                Năm 2017, LotteCard ký kết Thỏa thuận mua lại 100% cổ phần của công ty tài chính thuộc một trong những ngân hàng lớn nhất Việt Nam, đánh dấu sự mở rộng đầu tư và thâm nhập vào lĩnh vực Tài chính của tập đoàn LOTTE tại đây. Giấy phép kinh doanh của Công ty Tài chính Lotte (Lotte Finance) được Ngân hàng Nhà nước Việt Nam phê duyệt vào tháng 9 năm 2018, đưa LotteCard trở thành công ty thẻ tín dụng đầu tiên của Hàn Quốc được phép hoạt động tại Việt Nam.

                Các dịch vụ tài chính của LotteFinance tại Việt Nam được phát triển dựa trên sự thấu hiểu khách hàng, kết hợp nền tảng công nghệ hiện đại và tiên tiên tiến như Fintech, Big Data. Mục tiêu của công ty là trở thành nhà cung cấp dịch vụ tài chính hàng đầu tại Việt Nam, mang đến các giải pháp tài chính linh hoạt và phù hợp với phong cách sống của người dân, từ đó gia tăng giá trị và lợi ích cho khách hàng, đồng thời là cơ sở để tối ưu hóa nền tảng hạ tầng, tiệm cận với nhu cầu ngày càng đa dạng từ người tiêu dùng.',
                'address_id' => 1,
                'detail_address' => 'Tầng 12A tòa Tháp Tây, tòa nhà Lotte Center, số 54 Liễu Giai, Phường Cống Vị, Quận Ba Đình, Thành phố Hà Nội, Việt Nam',
                'renumeration_policy' => '',
                'tax_code' => '0304741634008',
                'password' => '123123123',
            ],
            [
                'name' => 'FPT Software',
                'link' => 'https://www.fpt-software.com/',
                'email' => Str::random(5).'@gmail.com',
                'image' => 'https://blog.topcv.vn/wp-content/uploads/2018/09/fpt-software.png',
                'description' => 'FPT Software là công ty thành viên thuộc Tập đoàn FPT. Được thành lập từ năm 1999, FPT Software hiện là công ty chuyên cung cấp các dịch vụ và giải pháp phần mềm cho các khách hàng quốc tế, với hơn 25.500 nhân viên, hiện diện tại 27 quốc gia trên toàn cầu. Nhiều năm liền, FPT Software được bình chọn là Nhà Tuyển dụng được yêu thích nhất và nằm trong TOP các công ty có môi trường làm việc tốt nhất châu Á.',
                'address_id' => 1,
                'detail_address' => 'Tòa nhà FPT Cầu Giấy, phố Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam',
                'renumeration_policy' => '',
                'tax_code' => '0101601092',
                'password' => '123123123',
            ],
            [
                'name' => 'Công ty Cổ phần VNEXT SOFTWARE',
                'link' => 'http://vnext.vn/vn/',
                'email' => Str::random(5).'@gmail.com',
                'image' => 'https://haymora.com/upload/images/cong_nghe_thong_tin/software/vnext_software/cong-ty-co-phan-cong-nghe-vnext-logo.jpg',
                'description' => 'WE CARE. WE COMMIT. WE ARE YOUR TRUE PARTNER.

                SỰ PHÁT TRIỂN:

                Năm 2008, VNEXT SOFTWARE khởi nghiệp với chỉ 7 thành viên - những người trẻ đầy nhiệt huyết và đam mê công việc cùng nhau góp sức xây dựng công ty. Đến đầu năm 2019, chúng tôi đã xây dựng được một đội ngũ nhân sự đông đảo với hơn 250 thành viên được chia thành các đội thực hiện dự án chuyên biệt.

                CHÚNG TÔI LUÔN LUÔN CẬP NHẬT VÀ ĐẦU TƯ VỀ MẶT CÔNG NGHỆ:

                Chúng tôi luôn cập nhật những công nghệ tiên tiến và hiện đại để áp dụng cho những sản phẩm chúng tôi phát triển

                CHÚ TRỌNG ĐÀO TẠO, SÁNG TẠO KHÔNG NGỪNG:

                Chúng tôi rất coi trọng vấn đề đào tạo nhân sự. Hơn 100 nhân sự đang làm việc tại VNEXT là những thành viên với năng lực và trình độ chuyên môn cao được tuyển chọn một cách nghiêm túc, chặt chẽ.

                Không dừng ở đó, khi gia nhập VNEXT, các thành viên luôn được tạo điều kiện học tập và nâng cao trình độ chuyên môn của mình cùng với một chính sách đào tạo hợp lý. Đến nay chúng tôi đã có tới 4 Kỹ sư Công nghệ thông tin đạt chứng chỉ ZCE PHP (Zend Certified Engineer), 5 Kỹ sư đạt chứng chỉ ISTQB (International Software Testing Qualifications Board). Để đáp ứng cho công việc với hơn 90% đối tác là Nhật Bản, việc học tập để nâng cao năng lực tiếng Nhật cũng được chúng tôi đề cao. Bằng chứng là chúng tôi mở riêng những lớp đào tạo tiếng Nhật ngay tại VNEXT dành cho nhân viên công ty và rất nhiều các thành viên đã đạt được những trình độ nhất định từ N5 đến N2 qua các lớp học này.

                Ngoài ra, chúng tôi cũng không ngừng thúc đẩy sự học hỏi để mỗi thành viên được cống hiến và tạo ra dấu ấn của riêng mình trên con đường phát triển của Công ty.

                ĐƯỢC GHI NHẬN VÀ QUAN TÂM:

                Tại VNEXT, khi mỗi thành viên nỗ lực cống hiến vì sự phát triển của Công ty – họ được ghi nhận bởi sự tưởng thưởng về vật chất, động viên về tinh thần và tạo điều kiện để sự cống hiến và đóng góp ngày càng trở nên to lớn và ý nghĩa. Hơn thế, tổ chức luôn thấu hiểu mỗi cá nhân cần gì để họ yên tâm công tác và gắn bó lâu dài với Công ty.

                Chúng tôi luôn tuân thủ và thực hiện đầy đủ các chính sách, chế độ theo quy định của Luật lao động. Bên cạnh đó, chúng tôi còn áp dụng các chính sách phúc lợi đặc biệt với mục tiêu đảm bảo và cân bằng cuộc sống, đảm bảo sức khỏe của từng cán bộ nhân viên của VNEXT.

                Chúng tôi luôn chú trọng sự tiện ích, điều kiện tốt về cơ sở vật chất cho từng nhân viên trong công ty bằng cách cải thiện văn phòng làm việc. Mỗi bàn làm việc đều có nhiều cây xanh, hỗ trợ nhân viên mua nước ngay tại Văn phòng bằng máy bán nước tự động, có nhà vệ sinh thông minh..vv…

                VĂN HÓA CỞI MỞ VÀ ĐOÀN KẾT:

                VNEXT từ lâu đã hình thành một nét văn hóa cởi mở và thân thiện. Ở đó, không còn khoảng cách giữa Quản lý và Nhân viên, không còn sự khác biệt về tuổi tác…chỉ có một điểm chung duy nhất là cùng cháy hết mình với tinh thần đồng đội sâu sắc và đoàn kết. Chúng tôi tin tưởng rằng, chính từ sự thân thiện này đã giúp chúng tôi có một Tập thể vô cùng gắn kết và tôn trọng lẫn nhau, từ đó tạo nên một nền móng cho văn hóa VNEXT nói riêng và sự phát triển bền vững cho VNEXT nói chung.

                Ngoài ra, các VNEXTers còn có dịp giao lưu và vui chơi cùng nhau với vô vàn các chương trình thường niên hàng năm: Các sự kiện tập thể vào các dịp lễ trong năm, nghỉ mát, teambuilding, gameshow nội bộ,…',
                'address_id' => 1,
                'detail_address' => 'Tầng 18 - Tháp C - Tòa nhà Central Point- 219 Trung Kính- Cầu Giấy- Hà Nội',
                'renumeration_policy' => '',
                'tax_code' => '0108585266',
                'password' => '123123123',
            ],
            [
                'name' => 'Công ty TNHH CJ CGV Việt Nam',
                'link' => 'https://www.cgv.vn/vn/about-cgv/',
                'email' => Str::random(5).'@gmail.com',
                'image' => 'https://cdn.nhanlucnganhluat.vn/uploads/images/AFF6482B/logo/2019-12/cgv.png',
                'description' => 'CJ CGV là đơn vị thuộc CJ Group, một trong top 5 cụm rạp chiếu phim lớn nhất toàn cầu và là nhà phát hành, cụm rạp chiếu phim lớn nhất Việt Nam. Tính đến tháng 5/2016, CGV Việt Nam hiện đang sở hữu 32 cụm rạp trên khắp 11 tỉnh thành trong cả nước. Mục tiêu của chúng tôi là trở thành hình mẫu công ty điển hình đóng góp cho sự phát triển không ngừng của ngành công nghiệp điện ảnh Việt Nam. CJ CGV đã tạo nên khái niệm độc đáo về việc chuyển đổi rạp chiếu phim truyền thống thành tổ hợp văn hóa “Cultureplex”, nơi khán giả không chỉ đến thưởng thức điện ảnh đa dạng thông qua các công nghệ tiên tiến như IMAX, 4DX, Dolby Atmos, cũng như thưởng thức ẩm thực hoàn toàn mới và khác biệt trong khi trải nghiệm dịch vụ chất lượng nhất tại CGV. Thông qua những nỗ lực trong việc xây dựng chương trình Lớp học làm phim TOTO, CGV Art House; cùng việc tài trợ cho các hoạt động liên hoan phim lớn trong nước như Liên hoan Phim quốc tế Hà Nội, Liên hoan Phim Việt Nam, CJ CGV Việt Nam mong muốn sẽ khám phá và hỗ trợ phát triển cho các nhà làm phim trẻ tài năng của Việt Nam. Chúng tôi cũng tập trung quan tâm đến đối tượng khán giả ở các khu vực không có điều kiện tiếp cận nhiều với điện ảnh, bằng cách tạo cơ hội để họ có thể thưởng thức những bộ phim chất lượng cao thông qua các chương trình vì cộng đồng như Trăng cười và Điện ảnh cho mọi người. Bên cạnh đó, CJ CGV Việt Nam luôn tuân thủ hệ thống kinh doanh chuyên nghiệp và minh bạch, đảm bảo môi trường làm việc công bằng đối với các đối tác kinh doanh. CJ CGV Việt Nam sẽ tiếp tục cuộc hành trình bền bỉ trong việc góp phần xây dựng một nền công nghiệp điện ảnh Việt Nam ngày càng vững mạnh hơn cùng các khách hàng tiềm năng, các nhà làm phim, các đối tác kinh doanh uy tín, và cùng toàn thể xã hội.',
                'address_id' => 1,
                'detail_address' => 'Tầng B1, TTTM Vincom Mega Mall Times City, số 458, Phố Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội, Việt Nam',
                'renumeration_policy' => '',
                'tax_code' => '0303675393-001',
                'password' => '123123123',
            ],
            [
                'name' => 'Tổ chức Giáo dục quốc tế Langmaster',
                'link' => 'http://www.langmaster.edu.vn/',
                'email' => Str::random(5).'@gmail.com',
                'image' => 'https://langmaster.edu.vn/storage/images/2022/09/28/genz-ava.webp',
                'description' => 'Tổ chức giáo dục quốc tế Langmaster được thành lập nhằm giúp thế hệ trẻ Việt Nam bắt nhịp với xu hướng hội nhập quốc tế và nhu cầu sử dụng tiếng Anh sâu rộng qua các chương trình giáo dục.

                Bên cạnh đó, Langmaster mong muốn đem đến một môi trường làm việc giúp các bạn trẻ có thể trải nghiệm, vừa tích lũy được kinh nghiệm thực tế thay vì chỉ học lý thuyết trên ghế nhà trường. Lộ trình: Đào tạo - Thực hành - Nhận kết quả - Thăng tiến

                Môi trường trẻ trung, năng động, được đào tạo từ những kĩ năng nhỏ nhất: Cách viết một email, trình bày văn bản, cách sử dụng ngôn ngữ cơ thể, giao tiếp bằng ánh mắt, thuyết trình mà không một ngôi trường nào đào tạo cho bạn. ',
                'address_id' => 1,
                'detail_address' => 'Số 30, ngách 2, ngõ 76 Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam',
                'renumeration_policy' => '',
                'tax_code' => '0105560993',
                'password' => '123123123',
            ],
        ];
        foreach ($data as $item) {
            $company = Company::create($item);
            Activation::create([
                'user_id' => $company->id,
                'token' => hash_hmac('sha256', Str::random(40), config('app.key')),
                'valid' => false,
                'active' => true,
            ]);
            $user = User::create([
                'fullname' => Str::random(10),
                'email' => Str::random(5).'@gmail.com',
                'password' => '123123123',
                'birth_year' => 4,
                'gender' => 2,
                'role' => 2,
                'company_id' => $company->id,
                'hraccepted' => 2,
            ]);
            Activation::create([
                'user_id' => $user->id,
                'token' => hash_hmac('sha256', Str::random(40), config('app.key')),
                'valid' => false,
                'active' => true,
            ]);
        }
    }
}
