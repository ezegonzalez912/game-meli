import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useProducts } from "../hooks/useProducts";
import { Product } from "../types/types";
import { Images } from "./Images";
import { PricesButtonList } from "./PricesButtonList";
import logo from "../assets/logo.png";
import { useData } from "../hooks/useData";
import { Skeleton } from "./Skeleton";
import { useState } from "react";

interface Props {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

export const MainGame: React.FC<Props> = ({ products, setProducts }) => {

  const [resetGame, setResetGame] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);

  const { idSite } = useParams<{ idSite: string }>();

  const { site, categories } = useData();

  const product = useProducts(products.length, resetGame);

  return (
    <div className="game-card_container">
      <nav className="navbar_container">
        <Link to="/">
          <img src={logo} alt="MercadoLibre-Logo" />
        </Link>
        <p>
          Puntaje: <b>{products.length}</b>
        </p>
      </nav>
      {product === undefined ? (
        <div className="score-max">
          <p>¡Llegaste al puntaje máximo!</p>
          <Link className="btn" to={`/site/${idSite}`}>
            Prueba con otra categoría
          </Link>
        </div>
      ) : (
        <main className="maingame_content">
          <div style={{ width: "100%" }}>
            <section className="data_container">
              <p>{site.name}</p>
              {categories.map((category) => (
                <p key={category.id}>{category.name}</p>
              ))}
            </section>
            {product ? (
              <h1 className="maingame_content_title">{product?.title}</h1>
            ) : (
              <Skeleton height={"25"} width={"100%"} />
            )}
          </div>
          {product ? (
            <Images
              id={product?.catalog_product_id}
              thumbnail={product?.thumbnail}
            />
          ) : (
            <Skeleton height={"300"} width={"100%"} />
          )}
          {product ? (
            <PricesButtonList
              setProducts={setProducts}
              product={product}
              setPoints={setPoints}
              setResetGame={setResetGame}
              resetGame={resetGame}
            />
          ) : (
            <Skeleton height={"60"} width={"100%"} />
          )}
        </main>
      )}
    </div>
  );
};
