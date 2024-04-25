import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa"; // Import the cart icon from react-icons/fa
import classes from "./Header.module.css";
import CartContext from "../../Store/Cart-Context";

const Header = (props) => {
  const { cartItemCount } = useContext(CartContext); // Get cart item count from context

  return (
    <>
      <header className={classes.header}>
        <h1>Medical Shop</h1>
        <button className={classes.btn} onClick={props.onClick}>
          <FaShoppingCart /> Cart ({cartItemCount})
        </button>
      </header>
    </>
  );
};

export default Header;
