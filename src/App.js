import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/About';
import { Routes, Route } from "react-router-dom"
import Products from './components/Products';
import Cart from './components/Cart';
import Order from './components/Order';
import Profile from './components/Profile';

function App() {
  return (
    <>
        <Navbar/>
    <Routes>
    {/* Home  */}
    <Route path="/" element={ <Home/> } />
    {/* About Us */}
    <Route path="/about" element={ <AboutUs/> } />
    {/* Product Page */}
    <Route path="/product" element={ <Products/> } />
    {/* Cart Page */}
    <Route path="/cart" element={ <Cart/> } />
    {/* Order Page */}
    <Route path="/order" element={ <Order/> } />
    {/* Profile Page */}
    <Route path="/profile" element={ <Profile/> } />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
