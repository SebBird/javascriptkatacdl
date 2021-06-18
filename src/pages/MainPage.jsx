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

  const setNewProductQuantities = (item, quantity) => {
    // Update the corresponding product in the basketQuantities, and recalculate the new total price
    let newBasketQuantities = { ...basketQuantities };
    newBasketQuantities[item] += quantity;
    setBasketQuantities(newBasketQuantities);
  };

  const resetBasket = () => {
    // Set the quantities back to the original empty product list.
    setBasketQuantities(allProducts);
  };

  return (
    <div>
      <Products
        productList={ProductList}
        setQuantity={setNewProductQuantities}
      />
      <Basket quantities={basketQuantities} resetBasket={resetBasket} />
    </div>
  );
};

export default MainPage;
