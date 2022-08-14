export const discount = (price, discount) => {
  const percentage = discount / 100;
  return price - price * percentage;
};
