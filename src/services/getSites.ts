export const getSites = async () => {
    
  try {
    const response = await fetch("https://api.mercadolibre.com/sites/");
    
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