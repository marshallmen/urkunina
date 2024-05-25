import React from 'react';
import '../styles/Cart.css';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <p>{item.name} x {item.quantity}</p>
        </div>
      ))}
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
