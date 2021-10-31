import { Product } from "../types/types"

export const getRamdonProduct = (products: Product[], myProducts: Product[]) => {

    const getNumberRamdon = () => Math.floor(Math.random() * products.length)
    
    let numberRamdon = getNumberRamdon()

    if(products.length === myProducts.length) return undefined

    // eslint-disable-next-line
    while(myProducts.some(product => product.permalink === products[numberRamdon].permalink)){
        numberRamdon = getNumberRamdon()
    }

    return products[numberRamdon]
}
