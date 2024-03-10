import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Nav from './NavBar/index'

import Aboutus from './AboutUs'
import ContactUs from './ContactUs'
import Home from './Home';
import Footer from './Footer';
import VEGProducts from './Products';
import Non_veg_products from './Non-Veg-Products'
function App() {
  
  return (
    <>
    
  
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/contact' element={<ContactUs/>}></Route>
      <Route path="/about" element={<Aboutus/>}></Route>
      <Route path="/products" element={<VEGProducts/>}></Route>
      <Route path='/non_veg_products' element={<Non_veg_products/>}></Route>
    </Routes>
    <Nav/> 
    <Footer/>
   
    </>
  )
}

export default App
