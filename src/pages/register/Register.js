import React from 'react';
import { Link } from 'react-router-dom';
import './style/Register.css'


const Register = () => {
    return (
        <div className="register">
            <div className="container">
                <h2 className="register-title">Register</h2>
                <p>Less is more work</p>
                <form novalidate>
                    <label for="validationCustom01">Name</label>
                    <input type="text" id="validationCustom01" required />

                    <label for="validationCustom01">Email</label>
                    <input type="email" id="validationCustom01" required />

                    <label for="validationCustom03">Password</label>
                    <input type="password" id="validationCustom03" required />

                    <button type="submit">Register</button>
                    <div className="divider">
                        <hr /> <span>OR</span> <hr />
                    </div>
                    <Link to={'/login'}><button>Login</button></Link>
                </form>
            </div>
        </div>
    );
};

export default Register;