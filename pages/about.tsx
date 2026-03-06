import React from 'react'

export default function AboutPage() {
  return (
   <>
   <div className="container bg-secondary text-white mt-4 py-2">
        <h3 className="mb-1">About Us</h3>
      </div>
      <div>
        <p className="container mt-5">
          Welcome to our store! We are dedicated to providing high-quality
          products at affordable prices. Our focus is on customer satisfaction,
          secure payments, and fast delivery. We aim to make your online
          shopping experience simple, safe, and enjoyable.
        </p>
      </div>
      <div className="container mt-4">
        <h5 className="mb-3 fw-bold">Why Choose Us</h5>
        <div className="row">
          <div className="col-md-3 col-6 mb-3">
            <i className="bi bi-award  fs-3 "></i>
            <p className="small mt-2">Quality Products</p>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <i className="bi bi-truck fs-3 text-success"></i>
            <p className="small mt-2">Fast Delivery</p>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <i className="bi bi-shield-check fs-3 text-info"></i>
            <p className="small mt-2">Secure Payments</p>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <i className="bi bi-headset fs-3 text-warning"></i>
            <p className="small mt-2">24/7 Support</p>
          </div>
        </div>
      </div>
   </>
  )
}
