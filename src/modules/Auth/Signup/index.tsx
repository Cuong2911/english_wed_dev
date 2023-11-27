import { useState } from 'react';

import './Signup.css';
import { Layout } from '../components';
import { ROUTES } from '../../../configs/routes';

const Signup = () => {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [rePasswordInput, setRePasswordInput] = useState("");
    const emailInputHandle = (value: string) => {
        setEmailInput(value);
    };
    const passwordInputHandle = (value: string) => {
        setPasswordInput(value);
    };
    const rePasswordInputHandle = (value: string) => {
        setRePasswordInput(value);
    };

    const onSignup = () => {
        alert(`dang ky! \n email: ${emailInput} \n pass: ${passwordInput} \n re pass: ${rePasswordInput}`);
    };


    return (
        <Layout>

            <div className="row">
                <div className="col-12">
                    <div className="mb-4">
                        <h3>Đăng ký</h3>
                        <p>Bạn đã có tài khoản?<a href={ROUTES.login} className='ms-1'>Đăng nhập</a></p>
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
                        <input
                            type="password"
                            className="form-control p-3 mb-3"
                            name="password"
                            id="rePassword"
                            value={rePasswordInput}
                            placeholder="Nhập lại mật khẩu"
                            required
                            onChange={e => rePasswordInputHandle(e.target.value)}
                        />
                    </div>
                    <div className="col-12">
                        <div className="d-grid">
                            <button className="btn btn-primary btn-lg bg-form-btn boder-color-primary-dark" type="submit" onClick={onSignup}>Đăng ký</button>
                        </div>
                    </div>
                </div>
            </form>
        </Layout>
    )
};

export default Signup;
