import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
     <footer className='section-p1'>
        <div className='col'>
            <h3 className='logo'>M.Usman</h3>
            <h4>Contact</h4>
            <p><strong>Address:</strong> Attock, Pakistan </p>
            <p><strong>Phone:</strong> +923098928912 </p>
            <p><strong>Email:</strong> tusman878@gmail.com </p>
            <div className='follow'>
                <h4>Follow us</h4>
                <div className='icon'>

                </div>

            </div>
        </div>

        <div className="col">
                <h4>About</h4>
                <a href="">About us</a>
                <a href="">Delivery Information</a>
                <a href="">Privacy Policy</a>
                <a href="">Terms & Conditions</a>
                <a href="">Contact Us</a>
        </div>

        <div className="col">
                <h4>My Account</h4>
                <a href="">Sign In</a>
                <a href="">View Cart</a>
                <a href="">My Wishlist</a>
                <a href="">Track My Order</a>
                <a href="">Help</a>
        </div>

        <div class="copyright">
                <p>© 2023, Usman - React Restaurant Website | All rights reserved</p>
            </div>

     </footer>
  )
}

export default Footer;
