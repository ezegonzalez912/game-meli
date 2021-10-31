import { useState } from "react"
import { usePrices } from "../../hooks/usePrices"
import { Product } from "../../types/types";

interface Props {
    setProducts: (products:Product[] | any) => void;
    product: Product;
}

export const PricesButtonList: React.FC<Props> = ({setProducts, product}) => {

    const { prices } = usePrices(product);
    const { price, permalink } = product;

    const [status, setStatus] = useState<boolean>(false)
    const [resetGame, setResetGame] = useState<boolean>(false)

    const ckeckStatus = (priceCheck:number) => {
        if(priceCheck === price){
            setStatus(true)
            setTimeout(() => {
                setProducts((products:Product[]) => [product, ...products])
                setStatus(false)
            }, 500)
        }else{
            setStatus(true)
            setResetGame(true)
        }
    }

    const restardGame = () => {
        setResetGame(false)
        setStatus(false)
        setProducts([])
    }   

    return (
        <div style={{width:"100%",display:"flex",flexDirection:"column",gap:"5px"}}>
            <h2>Adivina el precio:</h2>
            <section className="buttons_list">
                {
                    prices.map(priceOption => (
                        <button 
                            key={priceOption} onClick={() => ckeckStatus(priceOption)} 
                            disabled={status}
                            className={`btn ${status && `btn-${priceOption === price ? 'success' : 'danger'}`}`}
                            >
                            {Math.trunc(priceOption).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                        </button>
                    ))
                }
            </section>
            {
                resetGame && 
                <div className="buttons_list" style={{gridTemplateColumns:"1fr 1fr"}}>
                    <button className="btn" onClick={restardGame}>Reiniciar</button>
                    <a className="btn" href={permalink} target="_blank" rel="noreferrer">Ver producto</a>
                </div>
            }
        </div>
    )
}
