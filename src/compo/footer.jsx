// import React from 'react'
import './file.css'
function footer() {
  return (
    <>
    <footer>
      <div className='container'>
        <div className='UprFooter row'> 
          <div className='col text-white d-flex flex-column gap-3'>
            <a className="navbar-brand logo text-white" href="/">Exclusive</a>
            <a className="title text-white" href="/">Subscribe</a>
            <p>Get 10% off your first order</p>
            <div className='footr-mail'> <input className="form-control me-2" type="email" placeholder="Enter your email" aria-label="Search"/><img src='images/icon-send.png' alt=''></img></div>

          </div>
          <div className='col d-flex flex-column gap-3'>
          <a className="title text-white" href="/">Support</a>
          <a className="text-white" href="/">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a>
          <a className="text-white" href="/">exclusive@gmail.com</a>
          <a className="text-white" href="/">+88015-88888-9999</a>
          </div>
          <div className='col d-flex flex-column gap-3'>
          <a className="title text-white" href="/">Account</a>
          <a className=" text-white" href="/">My Account</a>
          <a className=" text-white" href="/">Login / Register</a>
          <a className=" text-white" href="/">Cart</a>
          <a className=" text-white" href="/">Wishlist</a>
          <a className=" text-white a" href="/">Shop</a>
         
          </div>
          <div className='col d-flex flex-column gap-3'>
          <a className="title text-white" href="/">Quick Link</a>
          <a className="text-white" href="/">Privacy Policy</a>
          <a className="text-white" href="/">Terms Of Use</a>
          <a className="text-white" href="/">FAQ</a>
          <a className="text-white" href="/">Contact</a>
          </div>
          <div className='col d-flex flex-column gap-3'>
          <a className="title text-white" href="/">Download App</a>
          <span>Save $3 with App New User Only</span> 
            <div className='d-flex flex-wrap g-3'>
              <img src='images/Qrcode.png' alt=''></img>
              <div className='d-flex flex-column flex-wrap g-2'>
              <img src='images/GooglePlay.png' alt=''></img>
              <img src='images/download-appstore.png' alt=''></img>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className='LwrFooter'>
          <div>
            <p>©Copyright Rimel 2022. All right reserved</p>
          </div>
        </div>
    </footer>
    </>
  )
}

export default footer