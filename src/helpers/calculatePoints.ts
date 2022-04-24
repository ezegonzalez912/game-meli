export const calculatePoints = (
  productPrice: number, 
  selectedPrice: number,
  minPrice: number,
  maxPrice: number
) => {
  const difference = Math.abs(productPrice - selectedPrice);
  const percentaje = (difference * 100) / (maxPrice - minPrice)
  const points = Math.round(1000 - percentaje * 20);

  if (points < 0) {
    return 0;
  }

  return points;
};
