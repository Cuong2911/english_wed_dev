
import './HomeContent.css';
import { CardCustom } from "../../../../components";

interface IdataAboutHomePage {
  headContent: string;
  descContent: string;
}

const dataAboutHomePage: Array<IdataAboutHomePage> =[
  {
    headContent: "Cách học tiếng Anh thông minh!",
    descContent: "Học tiếng Anh một cách vui vẻ, hiệu quả thông qua những phương pháp học đã được kiểm chứng.",
  },
  {
    headContent: "Hơn 500+ khóa học tiếng Anh",
    descContent: "Sẵn sàng chinh phục mọi mục tiêu với các khóa học tiếng Anh theo kỹ năng, chứng chỉ, giao tiếp, tiếng Anh trên lớp, tiếng Anh thương mại, tiếng Anh du lịch,..",
  },
  {
    headContent: "Lộ trình học được Cá nhân hoá",
    descContent: "Với công nghệ máy học thông minh, hệ thống sẽ tự động đưa ra gợi ý, đề xuất và cho phép bạn học được điều chỉnh, lựa chọn nội dung, cấp độ học tập phù hợp.",
  },
  {
    headContent: "Nhắc nhở học mỗi ngày",
    descContent: "Hệ thống thư điện tử (email) cùng các tính năng nhắc nhở ôn tập định kỳ giúp bạn học duy trì thói quen học tiếng Anh hiệu quả.",
  },
  {
    headContent: "Kiểm tra trình độ miễn phí",
    descContent: "Giúp bạn biết được chính xác trình độ tiếng Anh của mình trước, trong và xuyên suốt quá trình học.",
  },
  {
    headContent: "Chương trình học chuẩn quốc tế",
    descContent: "Dựa trên khung tham chiếu và đánh giá năng lực ngoại ngữ Châu Âu (Common European Framework of Reference)",
  },
  {
    headContent: "Dành cho mọi đối tượng",
    descContent: "Nội dung, phương pháp học tập được VOCA thiết kế tương thích cho cả học sinh, sinh viên, và người đi làm.",
  },
  {
    headContent: "Hơn 2 triệu học viên",
    descContent: "Bao gồm cả sinh viên, học sinh, người đi làm và du học sinh tại nhiều nước trên thế giới theo học VOCA mỗi ngày.",
  },
  {
    headContent: "Học tiếng Anh tiện lợi: mọi lúc, mọi nơi!",
    descContent: "Hỗ trợ học trên đa thiết bị (máy tính, điện thoại thông minh), với đầy đủ các phiên bản trên cả website, ứng dụng (iPhone, android)",
  },
];

const index = () => {
  const urlImage = "https://www.voca.vn/assets/images/home/";
  return (
    <div className="container home-content-container ">
      {
        dataAboutHomePage.map((data,index) => {
          return <div className="mt-5 mb-5">
            <CardCustom
              isImageLeft={index % 2 !== 0}
              imgSrc={`${urlImage}home-${index+1}.svg`}
              imgSize='small'
              headContent={data.headContent}
              descContent={data.descContent}
              typeCard="info"
            />
          </div>
        })

      }

    </div>
  );
};

export default index;
