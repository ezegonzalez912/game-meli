export const getCurrencies = async(id:string) => {
    
    try {
        const response = await fetch(`https://api.mercadolibre.com/currencies/${id}`);
        
        if(response.status === 200){
            return await response.json();
        } else if(response.status === 404){
            console.log("404");
        } else{
            console.log("500");
        }
    
      } catch (error) {
        console.log(error);
      }

}