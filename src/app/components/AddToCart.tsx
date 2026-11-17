"use client";
import { useContext } from "react";
import { buttonStyles } from "../../../src/utils/buttonStyle";
import { CartContext } from "../context/CartContext";

type Props = {
  productId: number;
  title: string;
  price: number;
};

function AddToCart({ productId, title, price }: Props) {
  const cart = useContext(CartContext);

  if (!cart) {
    throw new Error("CartProvider is missing");
  }

  const { dispatch } = cart;

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: productId,
        title,
        price,
        quantity: 1,
      },
    });
  };

  return (
    <>
      <button onClick={handleAddToCart} className={buttonStyles.button}>
        <span className={buttonStyles.span}>Add to Cart</span>
      </button>
    </>
  );
}

export default AddToCart;
