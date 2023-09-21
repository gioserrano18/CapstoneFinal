import React, { useState, useEffect } from 'react';
import FilterOptions from './FilterOptions';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  return (
    <div className="product-list-container">
        <div className="product-list">
        <FilterOptions sortProducts={setProducts} />
        <h2>Products</h2>
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    <div>{product.title}</div>
                    <div>Price: ${product.price}</div>
                </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default ProductList;