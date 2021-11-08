export const getImages = async(id:string | undefined) => {
    
    try {
        const response = await fetch(`https://api.mercadolibre.com/products/${id}`);
        
        if(response.status === 200){
            return await response.json();
        } else if(response.status === 404){
            console.log("Imagen del producto no encontrada");
        } else{
            console.log("500");
        }
    
      } catch (error) {
        console.log(error);
      }

}
