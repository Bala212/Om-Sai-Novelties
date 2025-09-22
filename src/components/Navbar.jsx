import React from "react";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg shadow-sm py-3" style={{ backgroundColor: "#2A8DC7" }}>
    <div className="container">
      {/* Brand / Shop Name */}
      <a className="navbar-brand fw-bold text-white fs-3 d-flex align-items-center" href="/">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZydq3J8-lt1ckG-Qe217-fuTmx0tiVCksZqGVw5nC1MM5n8lmOYF-TF3ixVlzmrXhYS0WxUJuRNHkWJyQYUT_L6m6tpnuwRzOOcGpukpoLLpAPqVh2pNntiUm8AkEZy8s3THEZPy4GVE/s1600/Sai+baba+images+photos+(69).jpg"
          alt="Om Sai Novelties"
          className="me-2"
          style={{ height: "40px", width: "40px", objectFit: "fill", borderRadius: "50%" }}
        />
        Om Sai Novelties
      </a>


      {/* Desktop links */}
      <div className="d-flex align-items-center">
        <a className="nav-link fw-semibold text-white mx-3 fs-5" href="/">Home</a>
        <a className="nav-link fw-semibold text-white mx-3 fs-5" href="/products">Products</a>
        <a className="nav-link fw-semibold text-white mx-3 fs-5" href="/about">About</a>
        <a className="nav-link fw-semibold text-white mx-3 fs-5" href="/contact">Contact</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
