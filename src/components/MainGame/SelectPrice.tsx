import { Product } from "../../types/types";
import { PricesButtonList } from "../PricesButtonList";
import { Skeleton } from "../Skeleton";

interface Props {
  product: Product;
  setProducts: (products: Product[] | any) => void;
  setPoints: (number: number | any) => void;
}

export const SelectPrice:React.FC<Props> = ({ product, setProducts, setPoints }) => {
  if (!product) {
    return <Skeleton height={"60"} width={"100%"} />;
  }

  return (
    <PricesButtonList
      setProducts={setProducts}
      product={product}
      setPoints={setPoints}
    />
  );
};
