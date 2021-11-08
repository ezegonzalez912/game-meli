import { useState } from "react";
import { Product } from "../types/types";
import { MainGame } from "../components/MainGame";
import { ProductsHistory } from "../components/ProductsHistory";

export const Game = () => {

    const [products, setProducts] = useState<Product[]>([])

    return (
        <main className="game-container">
            <MainGame products={products} setProducts={setProducts}/>
            <ProductsHistory products={products}/>
        </main>
    )
}
