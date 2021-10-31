import { useEffect, useState } from "react"
import { listPrices } from "../helpers/listPrices"
import { Product } from "../types/types"

export const usePrices = (product:Product) => {

    const [prices, setPrices] = useState<number[]>([])

    useEffect(() => {
        setPrices(listPrices(product.price))
    }, [product])

    return { prices }
}
