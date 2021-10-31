import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { useProducts } from "../../hooks/useProducts";
import { Product } from "../../types/types";
import { Images } from "./Images";
import { PricesButtonList } from "./PricesButtonList";

interface Props {
    products: Product[];
    setProducts: (products: Product[]) => void;
}

export const MainGame: React.FC<Props> = ({products, setProducts}) => {

    const { data } = useContext(DataContext);
    const {site, category} = data;

    const { product } = useProducts(products)

    return (
            <div className="game-card_container">
                <nav className="navbar_container">
                    <Link to="/">
                        <img src="/logo.png" alt="" />
                    </Link>
                    <p>Puntaje: {products.length}</p>
                </nav>
                {
                    product === undefined ? 
                        <div className="score-max">
                            <p>Llegaste al puntaje maximo!</p>
                            <Link className="btn" to="/">Prueba con otra categoria</Link>
                        </div>
                    :
                    <main className="maingame_content">
                        <div style={{width:"100%"}}>
                            <section className="data_container">
                                <p>{site.name}</p>
                                <p>{category.name}</p>
                            </section>
                            <h1 className="maingame_content_title">{product?.title}</h1>
                        </div>
                        <Images id={product?.catalog_product_id} thumbnail={product?.thumbnail}/>
                        {product && <PricesButtonList setProducts={setProducts} product={product}/>}
                    </main>
                }
            </div>
    )
}
