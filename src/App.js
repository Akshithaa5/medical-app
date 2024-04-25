import React, { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import ContextProvider from "./Store/ContextProvider";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartShown, setCartShown] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0); // State to track the number of items in the cart

  const cartHandler = () => {
    setCartShown((prev) => !prev);
  };

  return (
    <ContextProvider>
      {cartShown && <Cart onClick={cartHandler} />}
      <Header onClick={cartHandler} cartItemCount={cartItemCount} /> {/* Pass cart item count as prop */}
      <main>
        <Form updateCartItemCount={setCartItemCount} /> {/* Pass function to update cart item count */}
        <List />
      </main>
    </ContextProvider>
  );
}

export default App;
