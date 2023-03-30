import Header from './shared/Header.js';
import Footer from './shared/Footer.js';
import './style/App.css';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
};

export default App;
