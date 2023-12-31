
import './Home.css';
import { ROUTES } from '../../configs/routes';
import { Button } from '../../components';
import { HomeBG, HomeContent } from './components';


const Home = () => {
    return (
        <div className="home-page mb-5 pb-5">
            <HomeBG />
            <HomeContent />

            <div className="container">
                <div className="banner-home-end bg-color-primary-dark ">
                    <div className="row">
                        <div className="col-8">
                            <h1 className="text-color-primary mt-1">Bắt đầu miễn phí, hoặc tham gia với Premium!</h1>
                            <p className="text-color-primary mt-1">Tham gia vào cộng đồng thành viên Premium để bắt đầu hành trình chinh phục tiếng Anh ngay bây giờ. Chỉ từ 99.000₫ mỗi tháng!</p>
                            <Button textButton='Bắt đầu học miễn phí ngay' className='text-color-primary mt-1' btnLink={ROUTES.login}/>
                        </div>
                        <div className="col-4">
                            <div className="panner-img">
                                <img src="https://www.voca.vn/assets/images/premium/premium.svg?n=1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
