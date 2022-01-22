import { Switch } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Route } from "./Route";

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/signup" component={ SignUp } />
        <Route isPrivate path="/dashboard" component={ Dashboard } />
    </Switch>
);