import React, { useState } from "react";
import ProductList from "../assets/ProductList";
import Products from "../components/Products";
import Basket from "../components/Basket";

let allProducts = {};

// Create a simple object, with properties consisting of all the item names imported from ProductList
ProductList.forEach(({ item }) => {
  allProducts[item] = 0;
});

const MainPage = () => {
  const [basketQuantities, setBasketQuantities] = useState(allProducts);

  return (
    <div>
      <Products productList={ProductList} />
      <Basket />
    </div>
  );
};

export default MainPage;
