export const formatPrice = (price:number) => {

   return Math.trunc(price).toLocaleString('en-US', {style: 'currency', currency: 'USD'}).slice(1, -1)
}
