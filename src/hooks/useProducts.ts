import { useEffect, useState } from "react"
import { useHistory, useLocation, useParams } from "react-router";
import { getProductByCategory } from "../services/getProductByCategory"
import { Product } from "../types/types";
import queryString from "query-string";

export const useProducts = (productNumber:number) => {

    const { idSite }  = useParams<{idCategory: string, idSite: string}>();
    const [products, setProducts] = useState<Product[]>([])

    const location = useLocation();
    const history = useHistory();
    const { q } = queryString.parse(location.search);

    useEffect(() => {
        if(!q){
            return history.push("/");
        }else {
            const categories = Array.isArray(q) ? [...q] : [q];
            getProductByCategory(categories, idSite)
            .then((res:Product[]) => {
                const sortedProducts = res.sort(() => Math.random() - 0.5);
                setProducts(sortedProducts);
            })
            .catch(err => console.log(err))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idSite])

    return products[productNumber];
}