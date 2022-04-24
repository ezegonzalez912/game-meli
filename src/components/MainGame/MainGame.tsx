import { useProducts } from "../../hooks/useProducts";
import { Product } from "../../types/types";
import { useEffect, useState } from "react";
import { Header } from "./Header";
import { DataGame } from "./DataGame";
import { ProductTitle } from "./ProductTitle";
import { ProductImage } from "./ProductImage";
import { SelectPrice } from "./SelectPrice";
import { FinishGame } from "./FinishGame";
import { useData } from "../../hooks/useData";

interface Props {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

export const MainGame: React.FC<Props> = ({ products, setProducts }) => {
  const [points, setPoints] = useState<number>(0);

  useEffect(() => {
    if(products.length === 0) {
      setPoints(0);
    }
  }, [products]);

  const product = useProducts(products.length);

  const { site, categories } = useData();

  return (
    <div className="game-card_container">
      <Header points={points} productNumber={products.length} />
      <button onClick={() => {setPoints(points + 1000)}}>+1000</button>
      <main className="maingame_content">
        {products.length === 10 ? (
          <FinishGame points={points} setProducts={setProducts} site={site} categories={categories} />
        ) : (
          <>
            <div style={{ width: "100%" }}>
              <DataGame site={site} categories={categories} />
              <ProductTitle title={product?.title} />
            </div>
            <ProductImage
              id={product?.catalog_product_id}
              thumbnail={product?.thumbnail}
            />
            <SelectPrice
              product={product}
              setProducts={setProducts}
              setPoints={setPoints}
            />
          </>
        )}
      </main>
    </div>
  );
};
