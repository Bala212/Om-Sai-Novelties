import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-auto">
      <p className="mb-0">
        © {new Date().getFullYear()} Om Sai Novelties | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
