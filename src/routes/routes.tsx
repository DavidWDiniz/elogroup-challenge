import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import CreateLead from "../pages/CreateLead";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Register} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/create-lead" component={CreateLead} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
