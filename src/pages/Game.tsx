import { useContext, useState } from "react";
import { Redirect } from "react-router";
import { DataContext } from "../context/DataContext";
import { Product } from "../types/types";
import { MainGame } from "../components/MainGame";
import { ProductsHistory } from "../components/ProductsHistory";

export const Game = () => {

    const [products, setProducts] = useState<Product[]>([])
    const { data } = useContext(DataContext);

    if(data.site.id === "") return <Redirect to="/" />

    return (
        <main className="game-container">
            <MainGame products={products} setProducts={setProducts}/>
            <ProductsHistory products={products}/>
        </main>
    )
}
