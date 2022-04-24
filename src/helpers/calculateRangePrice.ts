export const calculateRangePrice = (price: number) => {
   const priceDifference = (price * 20) / 100;
 
   const pricesHigher = [
    price + priceDifference,
    price + priceDifference * 2,
    price + priceDifference * 3,
    price + priceDifference * 4,
    price + priceDifference * 5,
  ].sort(() => 0.5 - Math.random());

  const pricesLower = [
    price - priceDifference,
    price - priceDifference * 2,
    price - priceDifference * 3,
    price - priceDifference * 4,
    price - priceDifference * 5,
  ].sort(() => 0.5 - Math.random());

  const minNumberRandom = Math.floor(Math.random() * (price - pricesLower[0]) + pricesLower[0]);
  const maxNumberRandom = Math.floor(Math.random() * (pricesHigher[0] - price) + price);

  const [minPrice, maxPrice] = [minNumberRandom, maxNumberRandom];

  const priceMid = Math.floor((minPrice + maxPrice) / 2);

  return { minPrice, maxPrice, priceMid };
 };
 