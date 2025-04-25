'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // 🔁 Listen to localStorage changes in other tabs/components
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'cart') {
        const updatedCart = JSON.parse(e.newValue) || [];
        setCartItems(updatedCart);
      }
    };
    window.addEventListener('storage', handleStorageChange);

    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const addToCart = (item) => {
    const exists = cartItems.find(i => i.slug === item.slug);
    let updatedCart;

    if (exists) {
      updatedCart = cartItems.map(i =>
        i.slug === item.slug ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      updatedCart = [...cartItems, { ...item, quantity: 1 }];
    }

    setCartItems(updatedCart);
  };

  const removeFromCart = (slug) => {
    const updatedCart = cartItems.filter(item => item.slug !== slug);
    setCartItems(updatedCart);
  };

  const clearCart = () => setCartItems([]);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
