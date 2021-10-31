import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Game } from "./pages/Game";
import { SelectData } from "./pages/SelectData";

export const AppRouter = () => {
    return (
    <Router>
        <Switch>
            <Route exact path="/" component={SelectData}/>
            <Route exact path="/site/:idSite/category/:idCategory" component={Game}/>
            <Redirect to="/" />
        </Switch>
    </Router>
    )
}
