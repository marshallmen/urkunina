import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Admin from './components/Admin';
import Client from './components/Client';
import Footer from './components/Footer';
import productsData from './products.json';
import './styles/App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="App">
      <Header />
      <Admin products={products} setProducts={setProducts} />
      <Client products={products} setProducts={setProducts} />
      <Footer />
    </div>
  );
};

export default App;
