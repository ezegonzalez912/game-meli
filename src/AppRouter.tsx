import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Game } from "./pages/Game";
import { SelectCategories } from "./pages/SelectCategories";
import { SelectCountry } from "./pages/SelectCountry";

export const AppRouter = () => {
    return (
    <Router>
        <Switch>
            <Route exact path="/" component={SelectCountry}/>
            <Route exact path="/:idSite/" component={SelectCategories}/>
            <Route exact path="/site/:idSite/categories" component={Game}/>
            <Redirect to="/" />
        </Switch>
    </Router>
    )
}
