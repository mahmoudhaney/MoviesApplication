import React from 'react';
import './style/Contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <h2 className="contact-title">Contact</h2>
                <p>Less is more work</p>
                <form novalidate>
                    <label for="validationCustom01">Your Name</label>
                    <input type="text" id="validationCustom01" required />

                    <label for="validationCustom03">Email</label>
                    <input type="text" id="validationCustom03" required />

                    <label for="validationCustom05">Message</label>
                    <textarea cols="20" rows="8" type="text" id="validationCustom05" required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;