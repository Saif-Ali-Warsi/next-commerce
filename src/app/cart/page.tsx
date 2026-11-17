"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const cart = useContext(CartContext);

  if (!cart) {
    throw new Error("CartProvider is missing");
  }

  const { state, dispatch } = cart;

  const totalPrice = state.items.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

  return (
    <>
      <h1>Shopping Cart</h1>

      {state.items.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        state.items.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>

            <p>Price: ${item.price}</p>

            <p>Quantity: {item.quantity}</p>

            <button
              onClick={() =>
                dispatch({
                  type: "DECREASE_QUANTITY",
                  payload: item.id,
                })
              }
              disabled={item.quantity === 1}
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() =>
                dispatch({
                  type: "INCREASE_QUANTITY",
                  payload: item.id,
                })
              }
            >
              +
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item.id,
                })
              }
            >
              Remove
            </button>
          </div>
        ))
      )}

      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
    </>
  );
}

export default Cart;
