import React from 'react'
import './Footer.css'


export default function Footer() {
  return (
    <div>        
        <div className='footer1'>
            Support Line : +234 803 2744 865
        </div>        
        
        <div className='footer'>
            <div className='col'>
                <h4>Get to Know Us</h4>
                <p>About Amazon</p>
                <p>blog</p>
            </div>

            <div className='col'>
                <h4>Make Money with Us</h4>
                <p>Sell Products on Amazon</p>
                <p>Sell Apps on Amazon</p>
                <p>Become an Affiliate</p>
            </div>

            <div className='col'>
                <h4>Amazon Payment Products</h4>
                <p>Shop with points</p>
                <p>Amazon Business Cards</p>
            </div>

            <div className='col'>
                <h4>Let us Help You</h4>
                <p>Your Account</p>
                <p>Your Orders</p>
                <p>Shipping Rates</p>
                <p>Help</p>
            </div>
        </div>  

        <div className='copyright'>
        <hr/> 
            Designed by GigoCode
        </div>
    </div>
  )
}
