import React from 'react';
import '../styles/ProductItem.css';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
