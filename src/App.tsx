import { AppRouter } from './AppRouter'
import { DataProvider } from './context/DataContext'

export const App = () => {
    return (
        <>
            <DataProvider>
                <AppRouter />
            </DataProvider>
        </>
    )
}
