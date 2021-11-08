export const getCategories = async (idSite: string) => {
    
    try {
      const response = await fetch(`https://api.mercadolibre.com/sites/${idSite}/categories`)
      
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