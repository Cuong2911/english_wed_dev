import React from 'react';

import './Home.css';
import Button from '../Button/Button';

const Home = () => {
    return (
        <div className='home-container bg-primary-home'>
            <div className="container">
                <div className="home-content">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-5">
                                <img src="/assets/img/home-bg.png" alt="home-bg" />
                            </div>
                            <div className="col-2"></div>
                            <div className="col-5">
                                <div className="card bg-transparent">
                                    <div className="card-body">
                                        <h5 className="card-title text-color-primary fs-3 mt-4">Chào mừng bạn đến với Learn English</h5>
                                        <p className="card-text text-color-primary fs-1 lh-1 fw-bold mt-4">Hệ Thống Học Tiếng Anh Thông Minh</p>
                                        <Button className='mt-4' textButton='Bắt đầu học ngay!'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-bg-sub">
                <div className='home-bg-cloud' />
            </div>
        </div>
    );
};

export default Home;
