import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { selectItem } from '../features/cart/cartSlice';
import Loader from "./Loader";
import Home from './Home';
import ProductDetails from './ProductDetails';
import Category from './Category';
import Cart from './Cart';
import Checkout from './Checkout';
import NotFound from './NotFound';
import Success from './Success';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from "framer-motion";
import Login from "./Login";

function Pages() { 
    const items = useSelector(selectItem);

    // Store cart data to local storage for persistence.
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(items));
    }, [items]);

    const location = useLocation();

    return (
        <>
            {location.pathname !== '/' && <Navbar />}  
            <AnimatePresence mode='wait'>
                <Routes key={location.pathname} location={location}>
                    <Route path='/' element={<Loader />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/products/:id' element={<ProductDetails />} />
                    <Route path='/products/category/:categoryname' element={<Category />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/success' element={<Success />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </AnimatePresence>
            
            {location.pathname !== '/' && <Footer />} 
            
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}

export default Pages;
