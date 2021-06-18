import React, { useState } from "react";
import ProductList from "../assets/ProductList";
import toMoney from "../assets/toMoney";
import Products from "../components/Products";
import Basket from "../components/Basket";

let allProducts = {};

// Create a simple object, with properties consisting of all the item names imported from ProductList
ProductList.forEach(({ item }) => {
  allProducts[item] = 0;
});

const MainPage = () => {
  const [basketQuantities, setBasketQuantities] = useState(allProducts);
  const [total, updateTotal] = useState(toMoney(0));

  const setNewProductQuantities = (item, quantity) => {
    // Update the corresponding product in the basketQuantities, and recalculate the new total price
    let newBasketQuantities = { ...basketQuantities };
    newBasketQuantities[item] += quantity;
    updateTotal(calculateTotal(ProductList, newBasketQuantities));
    setBasketQuantities(newBasketQuantities);
  };

  const calculateTotal = (productList, quantities) => {
    let total = 0;

    productList.forEach(({ item, basePrice }) => {
      // If the current product quantity is zero, move onto the next product
      if (quantities[item] === 0) return;

      total += quantities[item] * basePrice;
    });

    return toMoney(total);
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
      <Basket
        quantities={basketQuantities}
        total={total}
        resetBasket={resetBasket}
      />
    </div>
  );
};

export default MainPage;
