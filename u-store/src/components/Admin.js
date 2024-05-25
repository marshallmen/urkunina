import React, { useState } from 'react';
import ProductForm from './ProductForm';

const Admin = ({ products, setProducts }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(""); // Agrega estado para la cantidad

  const createProduct = (product) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
  };

  const modifyProduct = (updatedProduct) => {
    setProducts(products.map(product => product.id === updatedProduct.id ? updatedProduct : product));
    setSelectedProduct(null);
  };

  const addStock = (productId, quantity) => {
    setProducts(products.map(product =>
      product.id === productId ? { ...product, stock: product.stock + parseInt(quantity, 10) } : product
    ));
  };

  const listProducts = () => {
    console.log('Available Products:', products);
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <ProductForm onSave={createProduct} />
      {selectedProduct && <ProductForm product={selectedProduct} onSave={modifyProduct} />}
      <button onClick={listProducts}>List Products</button>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <input
              type="number"
              placeholder="Quantity"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button onClick={() => addStock(product.id, quantity)}>Add Stock</button>
            <button onClick={() => setSelectedProduct(product)}>Modify</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
