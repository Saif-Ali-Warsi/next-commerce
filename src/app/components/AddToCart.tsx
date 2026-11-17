"use client";
import { buttonStyles } from "../../../src/utils/buttonStyle";

type Props = {
  productId: number;
  price: number;
};

function AddToCart({ productId, price }: Props) {
  const handleAddToCart = () => {
    console.log("Product Id:", productId);
    console.log("Price:", price);
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
