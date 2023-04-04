import React from 'react';
import './style/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login">
            <div className="container">
                <h2 className="login-title">Login</h2>
                <p>Less is more work</p>
                <form novalidate>
                    <label for="validationCustom01">Email</label>
                    <input type="email" id="validationCustom01" required />

                    <label for="validationCustom03">Password</label>
                    <input type="password" id="validationCustom03" required />

                    <button type="submit">Login</button>
                    <div className="divider">
                        <hr /> <span>OR</span> <hr />
                    </div>
                    <Link to={'/register'}><button>Register</button></Link>
                </form>
            </div>
        </div>
    );
};

export default Login;