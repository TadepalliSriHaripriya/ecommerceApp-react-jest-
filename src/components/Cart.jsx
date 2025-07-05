import React from "react";
import "../styles/Cart.css";

const Cart = ({ cartItems, removeFromCart }) => {
  const grouped = cartItems.reduce((acc, item) => {
    acc[item.id] = acc[item.id] || { ...item, quantity: 0 };
    acc[item.id].quantity += 1;
    return acc;
  }, {});

  const total = Object.values(grouped).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>🛒 Cart Summary</h2>
      {Object.keys(grouped).length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {Object.values(grouped).map((item) => (
              <li key={item.id}>
                <strong>{item.name}</strong> x {item.quantity} = ₹
                {(item.price * item.quantity).toLocaleString()}
                <button onClick={() => removeFromCart(item.id)}>❌</button>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{total.toLocaleString()}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
