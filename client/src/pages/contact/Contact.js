import React from 'react';

const Contact = () => {
    return (
        <div className="contact section-padding">
            <div className="container form-center">
                <h2 className="section-title">Contact</h2>
                <p>Less is more work</p>
                <form novalidate>
                    <label for="validationCustom01">Your Name</label>
                    <input type="text" id="validationCustom01" required />

                    <label for="validationCustom03">Email</label>
                    <input type="text" id="validationCustom03" required />

                    <label for="validationCustom05">Message</label>
                    <textarea cols="20" rows="8" type="text" id="validationCustom05" required></textarea>

                    <button className='general-btn form-btn' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;