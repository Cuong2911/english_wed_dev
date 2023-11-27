
import './Footer.css';
import { ROUTES } from '../../../../configs/routes';
import { Button } from '../../../../components';

const index = () => {
    return (
        <div className="footer-container bg-color-primary-dark text-color-primary">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-12 footer-start" >
                        <h4 className="px-3">Học tiếng Anh.</h4>
                        <Button textButton='Bắt đầu' btnLink={ROUTES.login}/>
                    </div>
                </div>
                <div className="row pt-5 pb-3 footer-body">
                    <div className="col-4">
                        <ul>
                            <li className='fw-normal fs-5'>Tác Giả</li>
                            <li>Nguyễn Dũng</li>
                            <li>Sinh viên đại học Bách Khoa Hà Nội</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <ul>
                            <li className='fw-normal fs-5'>Liên Hệ</li>
                            <li>
                                <i className="fa fa-phone-square" aria-hidden="true"></i>
                                <span className='mx-3'>
                                    Hotline/zalo: 0123456789
                                </span>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100006065266848">
                                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                    <span className='mx-3'>
                                        Facebook: Nguyễn Dũng
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="https://gmail.com">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <span className='mx-3'>
                                        Gmail: Nguyendung@gmail.com
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <ul>
                            <li className='fw-normal fs-5'>Bản quyền</li>
                            <li>@Thuộc Nguyễn Dũng</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
