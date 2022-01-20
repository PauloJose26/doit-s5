import { Switch } from "react-router-dom";

import { Login } from "../pages/Login";
import { Route } from "./Route";

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={ Login } />
    </Switch>
);