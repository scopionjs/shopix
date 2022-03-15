import React from "react";
export let CartContext = React.createContext();
export default function Cart({ children }) {
  let [cartItems, setCartItems] = React.useState([]);
  let values = {
    cartItems,
    setCartItems,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}
