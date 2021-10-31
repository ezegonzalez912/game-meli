import { createContext, useState } from "react";
import { Data } from "../types/types";

interface ContextProps {
    data: Data,
    setData: (data: Data) => void
}

interface Props {
    children: JSX.Element
}

export const DataContext = createContext({} as ContextProps);

export const DataProvider: React.FC<Props> = ({children}) => {

    const [data, setData] = useState<Data>({
        site: {
            id: "",
            name: ""
        },
        category: {
            id: "",
            name: ""
        }
    })

    return(
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    )
}