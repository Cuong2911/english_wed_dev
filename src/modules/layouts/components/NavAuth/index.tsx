
import { ROUTES } from '../../../../configs/routes';
import './NavAuth.css';

interface userLogin {
    id: string;
    name: string;
    avatar: string;
    gmail: string;
};

interface Props {
    user: string;
}

const NavAuth = (props: Props) => {
    const { user } = props;
    const userInfor: userLogin = JSON.parse(user);
    console.log(userInfor);
    
    const logoutHandle = () => {
        console.log('log-out');
        
    }

    return (
        <div className='nav-auth'>
            <div className=''>
                Xin chào 
                <span className="fw-bold">{userInfor.name}</span>
            </div>
            <div className='nav-user ms-2'>
                <img className="nav-user-avatar" src={userInfor.avatar}/>
                <ul className='nav-user-info'>
                    <span className='nav-user-info-head'>
                        <img className="avt" src={userInfor.avatar}/>
                        <div className='desc'>
                            <h4>{userInfor.name}</h4>
                            <p>{userInfor.gmail}</p>
                        </div>
                    </span>
                    <li>
                        <a href={ROUTES.home}>Hồ sơ của tôi</a>
                    </li>
                    <li>
                        <a href={ROUTES.home}>Bài học của tôi</a>
                    </li>
                    <li>
                        <a href={ROUTES.home}>Điểm của tôi</a>
                    </li>
                    <li>
                        <a href={ROUTES.home}>Cài đặt</a>
                    </li>
                    <span className='nav-user-info-logout' onClick={logoutHandle}>
                        Đăng xuất
                    </span>
                </ul>
            </div>
        </div>
    )
}

export default NavAuth;
