import React from "react";

const Item = ({ product }) => {
  const { item, basePrice, specialOffer } = product;

  return (
    <div>
      <h3>{item}</h3>
      <p>Price: {basePrice}</p>
      <div>
        <input type="number" min="0" placeholder={0} />
        <button>Add to basket</button>
      </div>
    </div>
  );
};

export default Item;
