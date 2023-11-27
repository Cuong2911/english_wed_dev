
import './HomeBG.css';
import { ROUTES } from '../../../../configs/routes';
import { CardCustom } from '../../../../components';

const index = () => {
    return (
        <div className='home-container bg-primary-home'>
            <div className="container">
                <div className="home-content">
                    <CardCustom
                        isImageLeft
                        imgSrc="/assets/img/home-bg.png"
                        headContent="Chào mừng bạn đến với Learn English"
                        descContent="Hệ Thống Học Tiếng Anh Thông Minh"
                        btnTitle='Bắt đầu học ngay!'
                        btnLink={ROUTES.login}
                        typeCard='primary'
                    />
                </div>
            </div>

            <div className="home-bg-sub">
                <div className='home-bg-cloud' />
            </div>
        </div>
    );
};

export default index;
