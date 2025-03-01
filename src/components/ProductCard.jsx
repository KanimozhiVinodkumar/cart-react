import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2>{product.title.substring(0, 20)}...</h2>
      <p>{product.description.substring(0, 50)}...</p>
      <p><strong>${product.price}</strong></p>
      <button onClick={() => addToCart(product)} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
