export const getRamdonProductByCategory = (category:string | undefined, idSite:string | undefined) => {
    
    return  fetch(`https://api.mercadolibre.com/sites/${idSite}/search?category=${category}`)
    .then(res => res.json())
}
