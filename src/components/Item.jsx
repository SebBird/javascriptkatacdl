import React, { useState } from "react";
import styled from "styled-components";
import toMoney from "../assets/toMoney";
import Button from "./Button";

const ItemDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 200px;
  background: #b8b8b8;
  border: 2px solid black;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  padding: 1rem;
  margin: 1rem;
`;

const Special = styled.p`
  font-size: 0.7rem;
  color: red;
  font-weight: bold;
`;

const Inputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 50%;
`;

const NumberInput = styled.input`
  padding: 2px;
  width: 50%;
  margin: 5px;
`;

const Item = ({ product, setQuantity }) => {
  const { item, basePrice, specialOffer } = product;

  const [productQuantity, updateProductQuantity] = useState(0);

  return (
    <ItemDiv>
      <h3>{item}</h3>
      <p>Price: {toMoney(basePrice)}</p>
      <Special>
        {specialOffer
          ? `Multibuy! Purchase ${specialOffer.specialQuantity} for ${toMoney(
              specialOffer.specialPrice
            )}`
          : ""}
      </Special>
      <Inputs>
        <NumberInput
          type="number"
          min="0"
          placeholder={productQuantity}
          onChange={(e) =>
            updateProductQuantity(
              e.target.value > 0 ? Number(e.target.value) : 0
            )
          }
        />
        <Button
          wording={"Add to basket"}
          func={() => setQuantity(item, productQuantity)}
        />
      </Inputs>
    </ItemDiv>
  );
};

export default Item;
