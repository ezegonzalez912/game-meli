import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCategories } from "../services/getCategories";
import { Category } from "../types/types";

export const useCategories = () => {

    const { idSite }  = useParams<{idSite: string}>();

    const [categories, setCategories] = useState<Category[] | null>(null);
    
    useEffect(() => {
        getCategories(idSite)
        .then(res => setCategories(res.sort((a:Category, b:Category) => a.name > b.name ? 1 : -1)))
    }, [idSite])
    
    return categories;
}
