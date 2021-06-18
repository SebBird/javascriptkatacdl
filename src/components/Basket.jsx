import React from "react";

const Basket = ({ quantities }) => {
  return (
    <div>
      <h2>Basket</h2>
      <div>
        {Object.entries(quantities).map((item) =>
          item[1] > 0 ? (
            <div key={item}>
              <p>
                {item[0]} x {item[1]}
              </p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Basket;
