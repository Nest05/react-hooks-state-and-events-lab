import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(true);

  function handleAddToCart(){
    setInCart(inCart => !inCart);
  }

  return (
    <li className= {inCart ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "add" : "remove"} onClick={handleAddToCart}>{inCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
