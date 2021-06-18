const toMoney = (number) => {
  return number.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });
};

export default toMoney;
