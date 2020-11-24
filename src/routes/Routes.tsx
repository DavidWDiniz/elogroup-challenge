import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import CreateLead from "../pages/CreateLead";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Register}/>
                <PrivateRoute path="/dashboard" component={Dashboard}/>
                <PrivateRoute path="/create-lead" component={CreateLead}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
