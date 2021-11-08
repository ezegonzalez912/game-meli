import { useEffect, useState } from "react"
import { Category, Site } from "../types/types"
import { useParams, useLocation } from 'react-router'
import queryString from "query-string";
import { getSites } from "../services/getSites";
import { getCategories } from "../services/getCategories";

export const useData = () => {

    const { idSite }  = useParams<{idCategory: string, idSite: string}>();

    const location = useLocation();

    const { q } = queryString.parse(location.search);

    const [site, setSite] = useState<Site>({id: '', name: '', default_currency_id:''});
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const categoriesURL = Array.isArray(q) ? [...q] : [q];

        getSites()
        .then(res => {
            const site = res.filter((site:Site) => site.id === idSite)
            setSite(site[0])
        })

        getCategories(idSite)
        .then(res => {
            const category = res.filter((category:Category) => categoriesURL.includes(category.id))
            setCategories(category)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { site, categories };
}
