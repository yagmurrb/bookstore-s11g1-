import React from "react";
import { ScProduct } from "./scParts";
import { useCart } from "../contexts/CartContext";
const Product = (props) => {
  const { addItem } = useCart();
  return (
    <ScProduct>
      <img
        crossOrigin="anonymous"
        src={props.product.image}
        alt={`${props.product.title} book`}
      />
      <div className="details">
        <h1 className="title">{props.product.title}</h1>
        <div className="footer">
          <p className="price">${props.product.price}</p>
          <button onClick={() => addItem(props.product)}>Add to cart</button>
        </div>
      </div>
    </ScProduct>
  );
};

export default Product;
