import { Product } from "../types/types"
import { CardProduct } from "./CardProduct"

interface Props {
    products: Product[];
}

export const ProductsHistory: React.FC<Props>= ({products}) => {
    return (
        <div className="game-card_container">
            <nav className="navbar_container" style={{justifyContent:"center"}}>
                <p>Productos</p>
            </nav>
            <section className="product-history_content">
                {
                    products.map((product:Product, index) => (
                        <CardProduct key={index} product={product}/>
                    ))
                }
            </section>
        </div>
    )
}
