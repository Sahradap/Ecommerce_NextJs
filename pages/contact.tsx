import React from 'react'

export default function Contact() {
  return (
    <div>
      <div>
      <div className="container bg-secondary text-white mt-4 py-2">
        <h3 className="mb-1">Contact Us</h3>
      </div>
      <div>
        <p className="container mt-4">
          We are here to help! If you have any questions, feedback, or need
          assistance with your order, feel free to reach out to us. Our support
          team will get back to you as soon as possible.
        </p>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 col-6">
            <i className="bi bi-envelope  fs-3 text-primary "></i>
            <p className="small mt-2">support@ecart.ocm</p>
          </div>
          <div className="col-md-4 col-6">
            <i className="bi bi-telephone fs-3 text-success"></i>
            <p className="small mt-2">+971 567893100</p>
          </div>
          <div className="col-md-4 col-6">
            <i className="bi bi-geo-alt fs-3 text-info"></i>
            <p className="small mt-2">ABC street,Dubai,UAE</p>
          </div>
        </div>
        <div className="container mt-4 bg-light py-3 px-3">
          <h6 className="fw-bold">Customer Support Hours</h6>
          <p className="text-muted">
            Monday - Saturday: 9:00 AM - 6:00 PM
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}
