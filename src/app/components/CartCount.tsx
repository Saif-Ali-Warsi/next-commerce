"use client";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartCount() {
  const cart = useContext(CartContext);

  if (!cart) {
    throw new Error("CartProvider is missing");
  }

  const cartCount = cart.state.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <>
      <Link href="/cart">Cart ({cartCount})</Link>
    </>
  );
}

export default CartCount;
