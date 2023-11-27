import { useState } from 'react';
import { redirect } from 'react-router-dom';

import './Login.css';
import { Layout } from '../components';
import { ROUTES } from '../../../configs/routes';

const Login = () => {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const emailInputHandle = (value: string) => {
        setEmailInput(value);
    };
    const passwordInputHandle = (value: string) => {
        setPasswordInput(value);
    };

    const onLogin = () => {
        alert(`dang nhap! \n email: ${emailInput} \n pass: ${passwordInput}`);
    };

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
            <form>
                <div className="row gy-3 overflow-hidden">
                    <div className="col-12">
                        <input
                            type="email"
                            className="form-control p-3 mb-3"
                            value={emailInput}
                            name="email"
                            id="email"
                            placeholder="Nhập email"
                            required
                            onChange={e => emailInputHandle(e.target.value)}
                        />
                    </div>
                    <div className="col-12">
                        <input
                            type="password"
                            className="form-control p-3 mb-3"
                            name="password"
                            id="password"
                            value={passwordInput}
                            placeholder="Nhập mật khẩu"
                            required
                            onChange={e => passwordInputHandle(e.target.value)}
                        />
                    </div>
                    <div className="col-12">
                        <div className="d-grid">
                            <button className="btn btn-primary btn-lg bg-form-btn boder-color-primary-dark" type="submit" onClick={onLogin}>Đăng nhập</button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end mt-4">
                        <a href={ROUTES.login}>Quên mật khẩu?</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default Login;
