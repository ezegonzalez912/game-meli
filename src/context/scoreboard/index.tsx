import { createContext, useState } from "react"

interface Props {
    children: JSX.Element;
}

interface ContextProps {
    scoreboard: any,
    setScoreboard: any;
}

export const scoreboardContext = createContext({} as ContextProps);

export const ScoreboardProvider: React.FC<Props> = ({children}) => {

    const [scoreboard, setScoreboard] = useState([])

    const data = {
        scoreboard, 
        setScoreboard, 
    }

    return (
        <scoreboardContext.Provider value={data}>
            {children}
        </scoreboardContext.Provider>
    )
}
