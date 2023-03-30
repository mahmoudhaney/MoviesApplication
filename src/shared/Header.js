import '../style/Header.css'
import image from '../assets/images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className='logo'><a href="/"><img src={image} alt="LOGO" /></a></div>
                <nav>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/contact'}>Contact Us</Link></li>
                        <li><Link to={'/login'}>Login</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;