
import './Layout.css';
import { ROUTES } from '../../../../configs/routes';

interface Props {
    children: JSX.Element | JSX.Element[];
}

const Layout = (props: Props) => {
    const { children } = props;

    return (
        <section className="bg-primary py-3 py-md-5 py-xl-8 login-page bg-primary-home">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-12 col-md-6 col-xl-7">
                        <div className="d-flex justify-content-center ">
                            <div className="col-12 col-xl-9">
                                <span className='fw-boild h1 fs-1 auth-layout-logo' >
                                    <a href={ROUTES.home} className='text-color-dark'>Learn English</a>
                                </span>
                                <hr className="border-primary-subtle mb-4 boder-color-primary-dark" />
                                <h2 className="h3 mb-4">Học tiếng anh ngay hôm nay.</h2>
                                <p className="lead mb-5">Never stop learning because life never stops teaching.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-5">
                        <div className="card border-0 rounded-4">
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Layout;
