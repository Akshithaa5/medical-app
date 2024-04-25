import React, { useState } from "react";
import CartContext from "./Cart-Context";

const ContextProvider = (props) => {
  const [list, setList] = useState([]);
  const [cart, setCart] = useState([]);

  const addListItemHandler = (item) => {
    setList((prevItem) => {
      return [...prevItem, item];
    });
  };

  const addItemToCart = (item) => {
    setCart((prevItems) => {
      return [...prevItems, item];
    });
  };

  const removeListItem = (name) => {
    setList((prevItems) => {
      return prevItems.filter((item) => item.name !== name);
    });
  };

  const orderNowHandler = () => {
    setCart([]);
  };

  // Calculate total number of items in the cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const context = {
    CartItems: cart,
    ListItems: list,
    addListItem: addListItemHandler,
    addToCart: addItemToCart,
    removeListItem: removeListItem,
    orderNow: orderNowHandler,
    cartItemCount: cartItemCount, // Add cartItemCount to context
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
