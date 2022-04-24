export const getImages = async(id:string | undefined) => {
    
    try {
        const response = await fetch(`https://api.mercadolibre.com/products/${id}`);
        
        if(response.status === 200){
            return await response.json();
        }
    
      } catch (error) {
        console.log(error);
      }

}
