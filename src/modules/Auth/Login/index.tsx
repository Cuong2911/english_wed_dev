import { useState } from 'react';

import './Login.css';
import { Layout } from '../components';
import { ROUTES } from '../../../configs/routes';

const Login = () => {
    const [emailInput, setEmailInput] = useState("");

    return (
        <Layout>

            <div className="row">
                <div className="col-12">
                    <div className="mb-4">
                        <h3>Đăng nhập</h3>
                        <p>Bạn chưa có tài khoản?<a href={ROUTES.signup} className='ms-1'>Đăng ký</a></p>
                    </div>
                </div>
            </div>
            <form action="POST">
                <div className="row gy-3 overflow-hidden">
                    <div className="col-12">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" required />
                            <label htmlFor="email" className="form-label">Email</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" name="password" id="password" value="" placeholder="Password" required />
                            <label htmlFor="password" className="form-label">Mật Khẩu</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" name="remember_me" id="remember_me" />
                            <label className="form-check-label text-secondary" htmlFor="remember_me">
                                Ghi nhớ đăng nhập
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-grid">
                            <button className="btn btn-primary btn-lg bg-form-btn boder-color-primary-dark" type="submit">Đăng nhập</button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end mt-4">
                        <a href="#!">Forgot password</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default Login;
