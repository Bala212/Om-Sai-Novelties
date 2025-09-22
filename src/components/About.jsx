import React from "react";

const About = () => {
  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center text-custom mb-4">About Us</h1>
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src="/shop.jpeg"
            alt="Shop"
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-6">
          <p className="lead text-muted">
            At <span className="fw-bold text-dark">Om Sai Novelties</span>, we
            have been serving our customers with love, creativity, and devotion
            for over a decade. From festive décor to unique gifts, our goal is to
            bring joy to your celebrations.
          </p>
          <p className="text-muted">
            Whether it’s Diwali, Ganesh Chaturthi, or a special family event,
            we’re here to make your moments more memorable with our handpicked
            novelties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
