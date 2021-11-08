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
                    products.length > 0 ?
                    products.map((product:Product, index) => (
                        <CardProduct key={index} product={product}/>
                    ))
                    : <p style={{textAlign: "center", marginTop: "25px"}}>~ Comienza a jugar ~</p>
                }
            </section>
        </div>
    )
}
