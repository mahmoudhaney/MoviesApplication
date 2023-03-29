import Header from './shared/Header.js';
import Footer from './shared/Footer.js';
import './style/App.css';
import ProductList from './pages/product/ProductList.js';

const App = () => {
  return (
    <>
      <Header />
      <ProductList/>
      <Footer />
    </>
  )
};

export default App;
