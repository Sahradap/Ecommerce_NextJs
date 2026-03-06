import React from 'react'

export default function Footer() {

  return (
    <div>
 <footer className="bg-secondary text-white pt-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>ECart</h5>
          </div>
          <div className="col-md-3 text-start">
            <h5>Help</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/product" className="text-light text-decoration-none">Products</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-3 text-start">
            <h5>Shop with Us</h5>
            <p>Your Account</p>
            <p>Your Orders</p>
            <p>Your Addresses</p>
            <p>Your Lists</p>
          </div>
          <div className="col-md-3 text-start">
            <h5>Contact</h5>
            <p>info@ecart.com</p>
            <p>+971 567893100</p>
            <p>Dubai, UAE</p>
          </div>

        </div>
        </div>
    </footer>
    </div>
  )
}
