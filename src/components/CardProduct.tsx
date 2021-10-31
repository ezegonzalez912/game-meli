import { Product } from "../types/types"

interface Props {
    product: Product;
}

export const CardProduct: React.FC<Props>= ({product}) => {

    const { title, thumbnail, price, permalink} = product;

    return (
        <div className="product-card_container">
            <img src={thumbnail} alt={title} />
            <section>
                <p title={title}>{title.length > 67 ? `${title.slice(0,67)}...` : title}</p>
                <h1>{price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h1>
                <a href={permalink} target="_blank" rel="noreferrer">Ver producto</a>
            </section>
        </div>
    )
}
