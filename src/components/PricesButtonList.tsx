import { useMemo, useState } from "react"
import { calculatePoints } from "../helpers/calculatePoints";
import { calculateRangePrice } from "../helpers/calculateRangePrice";
import { useCurrency } from "../hooks/useCurrency";
import { usePrices } from "../hooks/usePrices"
import { Product } from "../types/types";

interface Props {
    setProducts: (products:Product[] | any) => void;
    product: Product;
    setPoints: (number: number | any) => void;
    setResetGame: (boolean: boolean) => void;
    resetGame: boolean;
}

export const PricesButtonList: React.FC<Props> = ({setProducts, product, setPoints, resetGame, setResetGame}) => {

    const { price } = product;

    const [status, setStatus] = useState<boolean>(false)

    const currency = useCurrency();

    const [rangePrice, setRangePrice] = useState<number>(0);

    const handlePrice = () => {
        setProducts((products:Product[]) => [...products, product]);
        const points = calculatePoints(price, rangePrice);
        setPoints((prevPoints:number) => prevPoints + points);
    }

    const {minPrice, maxPrice} = useMemo(() => calculateRangePrice(price), [product])

    return (
        <div style={{width:"100%",display:"flex",flexDirection:"column",gap:"5px"}}>
            <h2>Acierta el precio:</h2>
            <form onSubmit={handlePrice}>
                <input type="range" title={`${rangePrice}`} value={rangePrice} onChange={(e:any) => setRangePrice(e.target.value)} min={minPrice} max={maxPrice}></input>
                <button>Listo</button>
            </form>
        </div>
    )
}
