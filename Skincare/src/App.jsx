import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Skintype from './pages/Bestsellers';
import Sales from './pages/Sales';      
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Checkout from './pages/Checkout';
import Search from './pages/Search';
import Wishlist from './pages/Wishlist';  
import { ToastContainer } from 'react-toastify';
import store from './Store/store';
import { Provider } from 'react-redux';
import Bestsellers from './pages/Bestsellers';
import { SearchProvider } from './context/SearchContext';

function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
        <SearchProvider>
        <Navbar />
        <ToastContainer position="top-right" autoClose={1000} />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/skintype" element={<Skintype />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path='/bestsellers' element={<Bestsellers />} />
         
        </Routes>
         </SearchProvider>
        <Footer />
      </Router>
     
      </Provider>
    </>
  );
}

export default App
