import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ cartCount, searchTerm, onSearch }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <h2 className="brand-name">ShoppingZone</h2>
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search for products, brands and more"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="navbar-search"
      />

      <div className="navbar-icons">
        <Link to="/login" className="icon-link">
          <FaUser size={18} />
          <span>Login</span>
        </Link>
        <Link to="/cart" className="icon-link">
          <FaShoppingCart size={18} />
          <span>Cart ({cartCount})</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;