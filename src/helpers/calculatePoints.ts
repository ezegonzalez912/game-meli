export const calculatePoints = (
  selectedPrice: number,
  productPrice: number
) => {
  const difference = Math.abs(productPrice - selectedPrice);
  const percentaje = (100 / productPrice) * difference;
  const points = Math.round(1000 - percentaje * 10);

  if (points < 0) {
    return 0;
  }

  return points;
};
