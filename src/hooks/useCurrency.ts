import { useEffect, useState } from "react"
import { getCurrencies } from "../services/getCurrencies"
import { Currency } from "../types/types";
import { useData } from "./useData";

export const useCurrency = () => {

    const { site } = useData();

    const [currency, setCurrency] = useState<Currency | null>(null)

    useEffect(() => {
        if(site && site.name !== ""){
            getCurrencies(site.default_currency_id)
            .then(res => setCurrency(res))
        }
    }, [site])

    return currency;
}
