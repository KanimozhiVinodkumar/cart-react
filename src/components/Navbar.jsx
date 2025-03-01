import React from "react";

const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="navbar">
      <h1>FakeStore</h1>
      <button onClick={openCart} className="cart-btn">
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
