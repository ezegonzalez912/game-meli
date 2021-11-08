import { useState } from "react"
import { useCurrency } from "../hooks/useCurrency";
import { usePrices } from "../hooks/usePrices"
import { Product } from "../types/types";

interface Props {
    setProducts: (products:Product[] | any) => void;
    product: Product;
}

export const PricesButtonList: React.FC<Props> = ({setProducts, product}) => {

    const { prices } = usePrices(product);
    const { price, permalink } = product;

    const [status, setStatus] = useState<boolean>(false)
    const [resetGame, setResetGame] = useState<boolean>(false)
    const [buttonActive, setButtonActive] = useState<string | null>(null)

    const currency = useCurrency();

    const ckeckStatus = (priceCheck:number, e:any) => {
        if(priceCheck === price){
            setStatus(true)
            setTimeout(() => {
                setProducts((products:Product[]) => [product, ...products])
                setStatus(false)
            }, 500)
        }else{
            setButtonActive(e.target.id)
            setStatus(true)
            setResetGame(true)
        }
    }

    const restardGame = () => {
        setButtonActive(null)
        setResetGame(false)
        setStatus(false)
        setProducts([])
    }

    return (
        <div style={{width:"100%",display:"flex",flexDirection:"column",gap:"5px"}}>
            <h2>Acierta el precio:</h2>
            <section className="buttons_list">
                {
                    prices.map((priceOption, index) => (
                        <button 
                            id={`${index}`}
                            key={priceOption} onClick={(e) => ckeckStatus(priceOption, e)} 
                            disabled={status}
                            className={`btn ${status && `btn-${priceOption === price ? 'success' : 'danger'}`}
                                            ${buttonActive === `${index}` && 'btn-error'}`}
                        >
                            {currency && currency.symbol}
                            {Math.trunc(priceOption).toLocaleString('en-US', {style: 'currency',currency: 'USD'}).slice(1, -1)}
                            {/* {priceOption === price && "a"} */}
                        </button>
                    ))
                }
            </section>
            {
                resetGame && 
                <div className="buttons_list" style={{gridTemplateColumns:"1fr 1fr"}}>
                    <button className="btn" onClick={restardGame}>Seguir jugando</button>
                    <a className="btn" href={permalink} target="_blank" rel="noreferrer">Comprar</a>
                </div>
            }
        </div>
    )
}
