import React, { useState } from 'react';

const Client = ({ products, setProducts }) => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showPayButton, setShowPayButton] = useState(false);

  const listAvailableProducts = () => {
    const availableProducts = products.filter(product => product.stock > 0);
    console.log('Available Products for Sale:', availableProducts);
  };

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
    setTotalAmount(totalAmount + product.price);
    setShowPayButton(true);
  };

  const removeFromCart = (productId) => {
    const removedItem = cart.find(item => item.id === productId);
    if (removedItem) {
      setCart(cart.filter(item => item.id !== productId));
      setTotalAmount(totalAmount - (removedItem.price * removedItem.quantity));
    }
    setShowPayButton(cart.length > 1);
  };

  const finalizePurchase = () => {
    console.log('Cart Items:', cart);
    console.log('Total to Pay:', totalAmount);
  };

  const pay = () => {
    setProducts(products.map(product => {
      const cartItem = cart.find(item => item.id === product.id);
      return cartItem ? { ...product, stock: product.stock - cartItem.quantity } : product;
    }));
    setCart([]);
    setTotalAmount(0);
    setShowPayButton(false);
    console.log('Purchase completed');
  };

  return (
    <div>
      <h2>Client Panel</h2>
      <button onClick={listAvailableProducts}>List Available Products</button>
      <div>
        {products.filter(product => product.stock > 0).map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h3>Cart</h3>
      {cart.map(item => (
        <div key={item.id}>
          <p>{item.name} x {item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <p>Total: ${totalAmount.toFixed(2)}</p>
      <button onClick={finalizePurchase}>Finalize Purchase</button>
      {showPayButton && <button onClick={pay}>Pay</button>}
    </div>
  );
};

export default Client;
