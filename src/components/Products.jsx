import React from "react";

const Products = () => {
  // Dummy product list
  const products = [
    { id: 1, name: "Ganesh Idol", price: "₹500", img: "https://lavanshiarts.com/wp-content/uploads/2019/10/MAF-108-WATERMARK-600x840.jpg" },
    { id: 2, name: "Diwali Diyas", price: "₹150", img: "https://m.media-amazon.com/images/I/61wAyNU8oZL._SX679_.jpg" },
    { id: 3, name: "Sai Baba Idol", price: "₹1200", img: "https://m.media-amazon.com/images/I/61mLfeCkDWL._SX679_.jpg" },
    { id: 4, name: "Mala's", price: "₹800", img: "https://m.media-amazon.com/images/I/71I84HG74qL._SY879_.jpg" },
  ];

  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center text-custom mb-5">Our Products</h1>
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <div className="card shadow-sm h-100">
              <img src={product.img} className="card-img-top" alt={product.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="text-muted">{product.price}</p>
                <button className="btn btn-warning text-white fw-semibold">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
