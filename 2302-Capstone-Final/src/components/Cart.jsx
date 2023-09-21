import React from 'react';
import { useCart } from '../contexts/CartContext';
import './App.css'

const Cart = () => {
    const { cartItems, removeFromCart } = useCart();
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <div>{item.title}</div>
            <div>Price: ${item.price}</div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;