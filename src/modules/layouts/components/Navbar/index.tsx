
import { Button } from '../../../../components';
import { ROUTES } from '../../../../configs/routes';
import {NavAuth} from '../index';

import './Navbar.css';

interface Props {
    itemActive: string;
}

const Navbar = (props:Props) => {
    const { itemActive } = props;

    const user:string = localStorage.getItem("user-profile") || '';
    
    console.log(itemActive);
    

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
                                <a className={`nav-link text-color-dark ${itemActive === ROUTES.home ? 'active' : ''}`} href={ROUTES.home}>Trang chủ</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-color-dark ${itemActive === ROUTES.learning ? 'active' : ''}`} href={ROUTES.learning}>Học tập</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-color-dark ${itemActive === ROUTES.exam ? 'active' : ''}`} href={ROUTES.exam}>Kiểm tra</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-color-dark ${itemActive === ROUTES.game ? 'active' : ''}`} href={ROUTES.game}>Trò chơi</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-color-dark ${itemActive === ROUTES.about ? 'active' : ''}`} href={ROUTES.about}>Giới thiệu</a>
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
