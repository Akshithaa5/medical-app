import React from "react";

const CartContext = React.createContext({
  addCartItems: [],
  addListItems: [],
  addListItem: () => {},
});

export default CartContext;