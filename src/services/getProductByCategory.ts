import { Product } from "../types/types";

export const getProductByCategory = async (categories:string[], idSite:string) => {

    const products: Product[]= []

    try {

        for (const category of categories) {
            const response = await fetch(`https://api.mercadolibre.com/sites/${idSite}/search?category=${category}`)
            if(response.status === 200){
                const { results } = await response.json();
                products.push(...results)
            } else if(response.status === 404){
                console.log("404");
            } else{
                console.log("500");
            }
        }
  
        return products;
        
    } catch (error) {
      console.log(error);
      return products;
    }

  }