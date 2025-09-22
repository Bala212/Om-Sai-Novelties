import React from "react";

const Contact = () => {
  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center text-custom mb-4">Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <h5 className="fw-semibold">Address:</h5>
          <p className="text-muted">Sutar Lane, Near Dwarkamal, Shirdi-423109, Maharashtra</p>

          <h5 className="fw-semibold">Phone:</h5>
          <p className="text-muted">+91 9511959898, +91 7744955657, +91 9307867879, +91 9921813133</p>

          <h5 className="fw-semibold">Email:</h5>
          <p className="text-muted">omsainovelties@example.com</p>

          {/* Embedded Map */}
          <iframe
            title="Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3754.7611150144617!2d74.4775421!3d19.7653015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDQ1JzU1LjEiTiA3NMKwMjgnMzkuMiJF!5e0!3m2!1sen!2sin!4v1757253006880!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>
        <div className="col-md-6">
          <h5 className="fw-semibold">Send us a Message:</h5>
          <form className="mt-3">
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email" required />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-warning text-white fw-semibold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
