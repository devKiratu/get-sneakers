import React from "react";

export default function Cart() {
  return (
    <div className="cart">
      <header>
        <h4>Cart</h4>
      </header>
      <hr className="line" />
      <div className="cart-items">
        <p>Your cart is empty.</p>
      </div>
    </div>
  );
}
