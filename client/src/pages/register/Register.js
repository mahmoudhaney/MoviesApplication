import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className="register section-padding">
            <div className="container form-center">
                <h2 className="section-title">Register</h2>
                <p>Less is more work</p>
                <form novalidate>
                    <label for="validationCustom01">Name</label>
                    <input type="text" id="validationCustom01" required />

                    <label for="validationCustom02">Email</label>
                    <input type="email" id="validationCustom02" required />

                    <label for="validationCustom03">Password</label>
                    <input type="password" id="validationCustom03" required />

                    <button className='general-btn form-btn' type="submit">Register</button>
                    <div className="divider">
                        <hr /> <span>OR</span> <hr />
                    </div>
                    <Link to={'/login'}><button className='general-btn form-btn'>Login</button></Link>
                </form>
            </div>
        </div>
    );
};

export default Register;