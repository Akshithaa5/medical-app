import React, { useRef, useContext } from "react";
import classes from "./Form.module.css";
import CartContext from "../../Store/Cart-Context";

const Form = () => {
  const crtx = useContext(CartContext);
  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();

  const addProductHandler = (e) => {
    e.preventDefault();
    const obj = {
      name: nameRef.current.value, // Use user input for name
      description: descriptionRef.current.value, // Use user input for description
      price: Number(priceRef.current.value),
    };
    crtx.addListItem(obj);
  };

  return (
    <form className={classes.form}>
      <label>Medicine Name</label>
      <input type="text" ref={nameRef} placeholder="Enter medicine name" />
      <label>Description</label>
      <input type="text" ref={descriptionRef} placeholder="Enter description" />
      <label>Price</label>
      <input ref={priceRef} type="number" min="0" />
      <button onClick={addProductHandler}>Add Product</button>
    </form>
  );
};

export default Form;
