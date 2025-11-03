import React, { useState, useEffect } from 'react'
import {CartContext} from './CartContext'

const CartProvider = ({children}) => {
    // Initialize cart from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart63");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart63", JSON.stringify(cart));
  }, [cart]);

  // Function to add item to cart
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  // Function to remove item from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const cartLength = cart.length;

  return (
    <CartContext.Provider value={{ cart, cartLength, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};


export default CartProvider
