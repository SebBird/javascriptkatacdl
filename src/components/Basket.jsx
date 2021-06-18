import React from "react";
import styled from "styled-components";
import Button from "./Button";

const BasketContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

const BasketDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  background: #b8b8b8;
  border: 3px solid black;
  border-radius: 5px;
`;

const BasketItem = styled.div`
  text-align: right;
  font-size: 0.8rem;
`;

const Basket = ({ quantities, resetBasket }) => {
  return (
    <BasketContainer>
      <BasketDiv>
        <h2>Basket</h2>
        <div>
          {Object.entries(quantities).map((item) =>
            item[1] > 0 ? (
              <BasketItem key={item}>
                <p>
                  {item[0]} x {item[1]}
                </p>
              </BasketItem>
            ) : null
          )}
        </div>
        <Button wording={"Reset Basket"} func={resetBasket} />
      </BasketDiv>
    </BasketContainer>
  );
};

export default Basket;
