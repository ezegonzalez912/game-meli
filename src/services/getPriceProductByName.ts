import { Product } from "../types/types"

export const getProductByName = async (name:string):Promise<Product> => {

    const product = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${name}&limit=1`)
    .then(res => res.json())

    return product
}