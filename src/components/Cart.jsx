import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-image" />
            <div className="cart-details">
              <h3>{item.title}</h3>
              <p>{item.description.substring(0, 50)}...</p>
              <p><strong>${item.price}</strong></p>
              <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                Remove from Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
