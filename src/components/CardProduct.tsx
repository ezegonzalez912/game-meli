import { useCurrency } from "../hooks/useCurrency";
import { Product } from "../types/types";

interface Props {
  product: Product;
}

export const CardProduct: React.FC<Props> = ({ product }) => {
  const { title, thumbnail, price, permalink, points } = product;

  const currency = useCurrency();

  return (
    <div className="product-card_container">
      <img src={thumbnail} alt={title} />
      <section>
        <p title={title}>
          {title.length > 67 ? `${title.slice(0, 67)}...` : title}
        </p>
        <h1>
          {currency &&
            currency.symbol +
              Math.trunc(price)
                .toLocaleString("en-US", { style: "currency", currency: "USD" })
                .slice(1, -1)}
        </h1>
        <p>
          Puntos: <b>{points}</b>
        </p>
        <a href={permalink} target="_blank" rel="noreferrer">
          Comprar
        </a>
      </section>
    </div>
  );
};
