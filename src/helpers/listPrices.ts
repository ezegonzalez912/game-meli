export const listPrices = (price:number):number[] => {

    const priceDifference = ((price * 20) / 100)
    const pricesHigher = [price + priceDifference, price + (priceDifference*2), price + (priceDifference*3), price + (priceDifference*4)]
    const pricesLower = [price - priceDifference, price - (priceDifference*2), price - (priceDifference*3), price - (priceDifference*4)]
    const optionPrices = [...pricesHigher, ...pricesLower]
    const optionPricesRamdon = optionPrices.sort(() => (Math.random() > .5) ? 1 : -1)
    const optionPricesRamdonAddPrice = [price, ...optionPricesRamdon].slice(0,3)
    const optionPricesEnd = optionPricesRamdonAddPrice.sort(() => (Math.random() > .5) ? 1 : -1)

    return optionPricesEnd
}