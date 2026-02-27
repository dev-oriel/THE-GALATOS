import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState(null);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    setLastAddedItem(product);
    setShowPreview(true);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const hidePreview = () => setShowPreview(false);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        showPreview,
        lastAddedItem,
        addToCart,
        openCart,
        closeCart,
        hidePreview,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
