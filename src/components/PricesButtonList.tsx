import { useEffect, useMemo, useState } from "react";
import { calculatePoints } from "../helpers/calculatePoints";
import { calculateRangePrice } from "../helpers/calculateRangePrice";
import { formatPrice } from "../helpers/formatPrice";
import { useCurrency } from "../hooks/useCurrency";
import { Product } from "../types/types";
import { InputRange } from "./InputRange";
import { InputRangeCheck } from "./inputRangeCheck";

interface Props {
  setProducts: (products: Product[] | any) => void;
  product: Product;
  setPoints: (number: number | any) => void;
}

const namespace = "select-price";

export const PricesButtonList: React.FC<Props> = ({
  setProducts,
  product,
  setPoints,
}) => {
  const { price } = product;

  function handlePrice(e: any) {
    setRangePrice(parseInt(e.target.value));
  }

  const [rangePrice, setRangePrice] = useState<number>(0);
  const [currentPoints, setCurrentPoints] = useState<number | null>(null);

  const { minPrice, maxPrice, priceMid } = useMemo(
    () => calculateRangePrice(price),
    [price]
  );

  useEffect(() => setRangePrice(priceMid), [priceMid]);	

  const verifyPrice = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const points = calculatePoints(price, rangePrice, minPrice, maxPrice);
    setCurrentPoints(points);
  };
  
  const nextProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPoints(
      (prevPoints: number) => prevPoints + (currentPoints ? currentPoints : 0)
    );
    const currentProduct = {...product, points: currentPoints};
    setProducts((products: Product[]) => [...products, currentProduct]);
    setCurrentPoints(null);
  };

  const currency = useCurrency();

  const format = (number: number) =>
    `${currency?.symbol}${formatPrice(number)}`;

  return (
    <div className={`${namespace}__container`}>
      {currentPoints === null ? (
        <form onSubmit={verifyPrice}>
          <h2 className={`${namespace}__container__title`}>
            Precio seleccionado:
            <b>{format(rangePrice)}</b>
          </h2>
          <InputRange
            min={minPrice}
            max={maxPrice}
            value={rangePrice}
            onChange={handlePrice}
            format={format}
          />
          <button className={`${namespace}__container__button`} type="submit">
            Verificar
          </button>
        </form>
      ) : (
        <form onSubmit={nextProduct}>
          <h2 className={`${namespace}__container__title`}>
            Puntos:
            <b>{currentPoints}</b>
          </h2>
          <InputRangeCheck
            min={minPrice}
            max={maxPrice}
            value={rangePrice}
            price={price}
            format={format}
          />
          <button className={`${namespace}__container__button`} type="submit">
            Continuar
          </button>
        </form>
      )}
    </div>
  );
};
