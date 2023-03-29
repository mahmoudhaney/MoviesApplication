import '../style/Header.css'
import image from '../assets/images/logo.png'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className='logo'><a href="../pages/product/ProductList.js"><img src={image} alt="LOGO" /></a></div>
                <nav>
                    <ul>
                        <li><a href="../pages/product/ProductList.js">Home</a></li>
                        <li><a href="../pages/product/ProductList.js">About</a></li>
                        <li><a href="../pages/product/ProductList.js">Contact Us</a></li>
                        <li><a href="../pages/product/ProductList.js">Login</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;