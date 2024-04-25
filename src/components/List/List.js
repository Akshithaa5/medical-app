import React, { useContext, useRef } from "react";
import classes from "./List.module.css";
import CartContext from "../../Store/Cart-Context";

const List = () => {
  const crtx = useContext(CartContext);

  // Create ref for quantity inputs
  const qtyRef = useRef();

  const quantityHandler = (item) => {
    const quantity = qtyRef.current.value;
    crtx.removeListItem(item.name);
    crtx.addToCart({ ...item, quantity: Number(quantity) });
  };

  return (
    <div className={classes.list}>
      <h2>List Items</h2>
      <ul>
        {crtx.ListItems.map((item) => (
          <li key={item.id}>
            <span>Name: {item.name}</span>{" "}
            <span>Description: {item.description}</span>
            <span>Price: {item.price}</span>
            <input
              ref={qtyRef}
              type="number"
              min="1"
              max="20"
              defaultValue="1"
            />
            <button onClick={() => quantityHandler(item)}>Add To Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
