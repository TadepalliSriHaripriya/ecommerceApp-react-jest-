import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import ProductCard from './ProductCard';
import Cart from './Cart';
import productsData from '../data/products';

function Home({ cartItems, addToCart, removeFromCart, searchTerm, setSearchTerm, category, setCategory }) {
  const [sortBy, setSortBy] = useState("");
  const navigate = useNavigate();

  const filteredProducts = productsData
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === "All" || product.category === category)
    )
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <>
      <Navbar
        cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
      />

      <div className="filter-bar">
        <select
          className="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
        </select>

        <select
          className="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Rating: High to Low</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />

      {cartItems.length > 0 && (
        <button className="checkout-btn" onClick={() => navigate('/checkout')}>
          Proceed to Checkout →
        </button>
      )}
    </>
  );
}

export default Home;
