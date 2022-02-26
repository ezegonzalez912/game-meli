import { useEffect, useState } from "react";
import { getSites } from "../services/getSites";
import { Site } from "../types/types";

export const useSite = () => {
    const [sites, setSites] = useState<Site[] | null>(null);

    useEffect(() => {
        getSites().then(res => {
            console.log(res)
            setSites(res.sort((a:Site, b:Site) => a.name > b.name ? 1 : -1))
        })
    }, [])

    return sites;
}
