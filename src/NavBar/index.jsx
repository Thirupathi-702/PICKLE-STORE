import React from 'react';
import { Link } from "react-router-dom";
import './index.css'
function Nav() {
  return (
    <div className='navclass'>
    <ul className="nav">
      <img className='logo' src='logo.jpg' alt='logo' />
      <Link to="/"><li>HOME</li></Link>
      <Link to="/about"><li>ABOUT US</li></Link>
      {/* <Link to="/products"><li>PRODUCTS</li></Link> */}
      <Link to="#"><li><div className="dropdown">
      <span>PRODUCTS</span>
      <div className="dropdown-content">
      <Link to="/products"><p>VEG_PICKLES</p></Link>
      <Link to='/non_veg_products'><p>NON_VEG_PICKLES</p></Link>
      </div>
      </div></li></Link>
      <Link to="/contact"><li>CONTACT US</li></Link>
    </ul>
    </div>
  )
}

export default Nav