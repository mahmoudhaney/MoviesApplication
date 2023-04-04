import React from 'react';
import '../style/Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div class="container">
                
                <p>&copy; 2023 <span><Link to={'/'}>MOVIES</Link></span> All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;