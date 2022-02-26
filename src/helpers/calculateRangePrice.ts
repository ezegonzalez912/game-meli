export const calculateRangePrice = (price: number) => {
   const priceDifference = (price * 20) / 100;
 
   const pricesHigher = [
     price + priceDifference,
     price + priceDifference * 2,
     price + priceDifference * 3,
     price + priceDifference * 4,
   ].sort(() => (Math.random() > 0.5 ? 1 : -1));
 
   const pricesLower = [
     price - priceDifference,
     price - priceDifference * 2,
     price - priceDifference * 3,
     price - priceDifference * 4,
   ].sort(() => (Math.random() > 0.5 ? 1 : -1));
 
   const optionPrices = [pricesLower[0], pricesHigher[0]];
 
   const optionPricesRamdon = optionPrices.sort(() =>
     Math.random() > 0.5 ? 1 : -1
   );
 
   const optionPricesRamdonAddPrice = optionPricesRamdon.slice(0, 2);
 
   const optionPricesEnd = optionPricesRamdonAddPrice.sort((a, b) => a - b);
 
   const [minPrice, maxPrice] = optionPricesEnd;
 
   return { minPrice, maxPrice };
 };
 