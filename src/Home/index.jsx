import React from 'react';
//import { Carousel } from 'react-bootstrap';
import Carousel from "../Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const Home = () => {
  return (
    <div className='margin'>
    <Carousel/>
    <div className='here'>
        <div className='container'>
            <img className='kk' src='chicken.jpg' alt='chicken'/>
            <div>
            <h1 className='hhh'>Chicken</h1> 
            <ul>
                <li>No preservatives</li>
                <li>Finest quality ingredient</li>
                <li>Generations old family recipe</li>
                <li>Tastes good and excellent with rice, chapatis, dosas, pav, spread on bread etc</li>
                <li>Excellent source of protein     </li>
                <li>Handcrafted</li>
            </ul>
            </div>
        </div>
        <div className='container'>
            <img className='kk' src='prawn.jpg' alt='Prawns'/>
            <div>
            <h1 className='hhh'>Prawns</h1> 
            <ul>
                <li>No preservatives</li>
                <li>Finest quality ingredient</li>
                <li>Generations old family recipe</li>
                <li>Tastes good and excellent with rice, chapatis, dosas, pav, spread on bread etc</li>
                <li>Excellent source of protein     </li>
                <li>Handcrafted</li>
            </ul>
            </div>
        </div>
        <div className='container'>
            <img className='kk' src='mutton.jpg' alt='Mutton'/>
            <div>
            <h1 className='hhh'>Mutton</h1> 
            <ul>
                <li>No preservatives</li>
                <li>Finest quality ingredient</li>
                <li>Generations old family recipe</li>
                <li>Tastes good and excellent with rice, chapatis, dosas, pav, spread on bread etc</li>
                <li>Excellent source of protein     </li>
                <li>Handcrafted</li>
            </ul>
            </div>
        </div>
        
    </div>
    </div>
  );
};

export default Home;
