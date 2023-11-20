
import {Button} from '../../../components';
import './Navbar.css';

const index = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-color-primary py-3">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-4 text-color-primary" href="#">
                        Learn English
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Trang chủ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Học tập</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Kiểm tra</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Trò chơi</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Giới thiệu</a>
                            </li>
                        </ul>
                        <div className="buttons">
                            <Button textButton='Đăng Nhập'/>
                            <Button textButton='Đăng Ký'/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default index;
