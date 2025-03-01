import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./index.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Navbar cartCount={cart.length} openCart={() => setIsCartOpen(true)} />
      <ProductList addToCart={addToCart} />
      {isCartOpen && (
        <div className="cart-overlay">
          <div className="cart-container">
            <Cart cart={cart} removeFromCart={removeFromCart} />
            <button className="close-cart-btn" onClick={() => setIsCartOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
