import React from "react";
import "../styles/Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>🏠 Shipping Address</h2>
      <form className="address-form">
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Street Address" required />
        <input type="text" placeholder="City" required />
        <input type="text" placeholder="Postal Code" required />
        <input type="text" placeholder="Country" required />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
