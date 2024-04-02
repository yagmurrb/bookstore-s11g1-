/*
import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const a = 111;

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage('s11g1', []);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (id) => {
    const newCart = [...cart];
    const indexToRemove = newCart.findIndex((item) => item.id === id);

    newCart.splice(indexToRemove, 1);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartContext = createContext();
export default CartContextProvider;
*/

import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// import { CartContext } from './CartContext';

export const CartContext = createContext();

// const a = '1234';

export function CartContextProvider({ children }) {
  const [cart, setCart] = useLocalStorage("s11g1", []);
  // const { addItem } = useContext(CartContext);

  const addItem = (item) => {
    // verilen itemi sepete ekle
    setCart([...cart, item]);
  };

  const removeItem = (orderIndex) => {
    console.log("remove", orderIndex);
    const filteredCart = cart.filter((_, i) => {
      return i !== orderIndex;
    });

    setCart(filteredCart);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
