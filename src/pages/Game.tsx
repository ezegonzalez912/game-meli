import { useState } from "react";
import { Product } from "../types/types";
import { MainGame } from "../components/MainGame/MainGame";
import { ProductsHistory } from "../components/ProductsHistory";
import { Scoreboard } from "../components/Scoreboard/Scoreboard";
import { Modal } from "../components/Modal/Modal";

export const Game = () => {

    const [products, setProducts] = useState<Product[]>([])

    return (
        <>
            <Modal />
            <main className="game-container">
                <MainGame products={products} setProducts={setProducts}/>
                <ProductsHistory products={products}/>
                <Scoreboard setProducts={setProducts} />
            </main>
        </>
    )
}
