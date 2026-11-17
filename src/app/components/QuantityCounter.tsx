"use client";

import { useState } from "react";

function QuantityCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count <= 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <button onClick={handleDecrement}>-</button>
      {count}
      <button onClick={handleIncrement}>+</button>
    </>
  );
}

export default QuantityCounter;
