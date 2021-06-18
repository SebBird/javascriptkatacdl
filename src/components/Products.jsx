import React from "react";
import styled from "styled-components";
import Item from "./Item";

const Checkout = styled.div`
  width: 100%;
`;

const Banner = styled.div`
  text-align: center;
  border-bottom: 2px solid black;
`;

const AllProducts = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Products = ({ productList, setQuantity }) => {
  return (
    <Checkout>
      <Banner>
        <h1>Checkout System</h1>
      </Banner>
      <AllProducts>
        {productList.map((product) => (
          <Item
            product={product}
            key={product.item}
            setQuantity={setQuantity}
          />
        ))}
      </AllProducts>
    </Checkout>
  );
};

export default Products;
