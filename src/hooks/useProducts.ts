import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { getRamdonProduct } from "../helpers/getRamdonProduct";
import { getRamdonProductByCategory } from "../services/getRamdonProductByCategory"
import { Product } from "../types/types";

export const useProducts = (products:Product[]) => {

    const [product, setProduct] = useState<Product | null | undefined>(null)
    const { idSite, idCategory }  = useParams<{idCategory?: string, idSite?: string}>();

    useEffect(() => {
        getRamdonProductByCategory(idCategory, idSite)
            .then( res => {
            const { results } = res
            setProduct(getRamdonProduct(results, products))
        })

    }, [products, idCategory, idSite])

    return { product }
}
