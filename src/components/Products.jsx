import React from "react";
import Item from "./Item";

const Products = ({ productList }) => {
  return (
    <div>
      <div>
        <h1>Checkout System</h1>
      </div>
      <div>
        {productList.map((product) => (
          <Item product={product} key={product.item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
