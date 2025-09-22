import React from "react";

const Home = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-custom">Welcome to Om Sai Novelties</h1>
        <p className="lead text-muted">
          Your one-stop shop for personalized ornaments, sacred threads, and spiritual items that bring blessings and joy.
        </p>
      </div>

      {/* Highlights */}
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <img
              src="https://m.media-amazon.com/images/I/711FP1IB0XL._SY625_.jpg"
              className="card-img-top"
              alt="Personalized Ornaments"
            />
            <div className="card-body">
              <h5 className="card-title text-custom">Personalized Ornaments</h5>
              <p className="card-text">
                Beautifully crafted ornaments customized with your unique touch – perfect for gifting or cherishing forever.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <img
              src="https://m.media-amazon.com/images/I/41AlcE+c1KL._SY300_SX300_QL70_FMwebp_.jpg"
              className="card-img-top"
              alt="Blessed Sacred Threads"
            />
            <div className="card-body">
              <h5 className="card-title text-custom">Blessed Sacred Threads</h5>
              <p className="card-text">
                A symbol of protection, purity, and divine grace.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <img
              src="https://2.imimg.com/data2/FH/MR/IMFCP-4103635/images-spiritual-20products-1000x1000.jpg"
              className="card-img-top"
              alt="Spiritual Items"
            />
            <div className="card-body">
              <h5 className="card-title text-custom">Spiritual Items</h5>
              <p className="card-text">
                Sacred collections that inspire peace and positivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
