
import './Signup.css';
import { Layout } from '../components';

const Signup = () => {
    return (
        <Layout>

            <div className="row">
                <div className="col-12">
                    <div className="mb-4">
                        <h3>Sign in</h3>
                        <p>Don't have an account? <a href="#!">Sign up</a></p>
                    </div>
                </div>
            </div>
            <form action="#!">
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
                            <label htmlFor="password" className="form-label">Password</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" name="remember_me" id="remember_me" />
                            <label className="form-check-label text-secondary" htmlFor="remember_me">
                                Keep me logged in
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-grid">
                            <button className="btn btn-primary btn-lg" type="submit">Log in now</button>
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

export default Signup;
