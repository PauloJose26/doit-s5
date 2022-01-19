import { Switch, Route } from "react-router-dom";

import { Login } from "../pages/Login";

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={ Login } />
    </Switch>
);