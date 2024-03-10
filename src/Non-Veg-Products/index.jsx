import React from 'react'
import './index.css'
function Non_veg_products() {
  return (
    <>
        
        <div className="card">
        
            <div className='card1'>
            <img className='image' src="mutton.jpg" alt="Tamato" />
            <h1 className='name'>Mutton</h1>
            <p className='price'>500</p>
            </div>
            <div className='card1'>
            <img className='image' src="prawn.jpg" alt="Tamato" />
            <h1 className='name'>Prawns</h1>
            <p className='price'>500</p>
            </div>
            <div className='card1'>
            <img className='image' src="chicken.jpg" alt="Tamato" />
            <h1 className='name'>Chicken</h1>
            <p className='price'>400</p>
            </div>
            
            
        </div>
        </>
  )
}

export default Non_veg_products;