
import './CardCustom.css';
import Button from "../Button/Button";

interface Props {
  isImageLeft?: boolean;
}

const index = (props: Props) => {
  const {isImageLeft = false} = props;
  

  return (
    <div className="container card-custom-container">
      <div className="row">
        {
        isImageLeft ? <div className="col-6">
          <img src="/assets/img/home-bg.png" />
        </div> : <></>
        }
        
        <div className="col-6">
          <div className="card bg-transparent">
            <div className="card-body">
              <h5 className="card-title text-color-primary fs-3 mt-4">Chào mừng bạn đến với Learn English</h5>
              <p className="card-text text-color-primary fs-1 lh-1 fw-bold mt-4">Hệ Thống Học Tiếng Anh Thông Minh</p>
              <Button className='mt-4' textButton='Bắt đầu học ngay!' />
            </div>
          </div>
        </div>

        {
        isImageLeft ? <div className="col-6">
          <img src="/assets/img/home-bg.png" />
        </div> : <></>
        }
      </div>
    </div>
  );
};

export default index;
