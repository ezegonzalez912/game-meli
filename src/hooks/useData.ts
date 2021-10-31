import { useEffect, useState } from "react"
import { Category, Data, Site } from "../types/types"

export const useData = (data: Data) => {

    const [sites, setSites] = useState<Site[] | null>(null)
    const [categories, setCategories] = useState<Category[] | null>(null)

    useEffect(() => {
        fetch("https://api.mercadolibre.com/sites/")
        .then(res => res.json())
        .then(res => setSites(res))
    }, [])

    useEffect(() => {
        if(data.site.id !== ""){
            fetch(`https://api.mercadolibre.com/sites/${data.site.id}/categories`)
            .then(res => res.json())
            .then(res => setCategories(res))
        }
    }, [data])

    return { sites, categories }
}
