
import { Button } from '../../../../components';
import { ROUTES } from '../../../../configs/routes';
import {NavAuth} from '../index';

import './Navbar.css';

const Navbar = () => {

    const user:string = localStorage.getItem("user-profile") || '';
    
    return (
        <>
            <nav className="navbar fixed-top  navbar-expand-lg navbar-light bg-color-primary py-3">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-4">
                        Learn English
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-color-dark active" aria-current="page" href={ROUTES.home}>Trang chủ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-color-dark" href={ROUTES.home}>Học tập</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-color-dark" href={ROUTES.home}>Kiểm tra</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-color-dark" href={ROUTES.home}>Trò chơi</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-color-dark" href={ROUTES.home}>Giới thiệu</a>
                            </li>
                        </ul>
                    </div>

                    {
                        user !=='' ? 
                        <NavAuth user={user}/>
                        : <div className="buttons">
                            <Button textButton='Đăng Nhập' btnLink='/login'/>
                            <Button textButton='Đăng Ký' btnLink='/sign-up'/>
                        </div>
                    }
                </div>
            </nav>
        </>
    );
};

export default Navbar;
