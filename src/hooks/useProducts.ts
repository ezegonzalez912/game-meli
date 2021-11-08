import { useEffect, useState } from "react"
import { useHistory, useLocation, useParams } from "react-router";
import { getRamdonProduct } from "../helpers/getRamdonProduct";
import { getProductByCategory } from "../services/getProductByCategory"
import { Product } from "../types/types";
import queryString from "query-string";

export const useProducts = (products:Product[]) => {

    const [product, setProduct] = useState<Product | null | undefined>(null)
    const { idSite, idCategory }  = useParams<{idCategory: string, idSite: string}>();

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
                const randomProduct = getRamdonProduct(res, products);
                setProduct(randomProduct);
            })
            .catch(err => console.log(err))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products, idCategory])

    return product;
}
