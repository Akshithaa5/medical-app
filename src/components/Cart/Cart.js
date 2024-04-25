import React, { useState, useContext, useEffect } from "react";
import Modal from "./Modal";
import CartContext from "../../Store/Cart-Context";
import classes from './Cart.module.css';

const Cart = (props) => {
    const crtx = useContext(CartContext);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        const totalAmount = crtx.CartItems.reduce((accumulator, item) => {
            return accumulator + Number(item.price * item.quantity);
        }, 0);
        setAmount(totalAmount);
    }, [crtx.CartItems]);

    const orderNow = () => {
        crtx.orderNow();
    }

    const cartItem = (
      <ul>
        {crtx.CartItems.map((item) => {
          return (
            <li key={item.id}>
              {item.name}-{item.description}-{item.price}-{item.quantity}
            </li>
          );
        })}
      </ul>
    );

  return (
    <Modal onClick={props.onClick}>
      <h2>Cart</h2>
      {cartItem}
      <div className={classes.amount}>
        <span>Total Amount</span>
        <span>{amount}</span>
      </div>
      <button onClick={orderNow}>Order Now</button>
    </Modal>
  );
};

export default Cart;
