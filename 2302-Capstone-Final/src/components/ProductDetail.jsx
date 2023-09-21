import React, { useState, useEffect, useContext } from 'react';
import { useCart } from '../contexts/CartContext';
import { useParams } from 'react-router-dom';


const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    alert('Item added to cart!');
  };

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <div>Category: {product.category}</div>
      <div>Price: ${product.price}</div>
      <div>Description: {product.description}</div>
      <img src={product.image} alt={product.title} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;