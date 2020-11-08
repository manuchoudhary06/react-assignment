import React from "react";
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
} from "react-router-dom";

import { ROUTE_CONSTANTS } from "../shared/constants";
import { Login, Dashboard, NotFound } from "../screens";

const Router = () => {
	const access_token = localStorage.getItem("isLoggedIn") || false
    return (
        <BrowserRouter>
        	<Switch>
	            <Route
	            	exact
	            	path={ROUTE_CONSTANTS.ROOT}
	            	render={props => {
	            		return (
	            			access_token ? <Redirect to={ROUTE_CONSTANTS.DASHBOARD} /> : <Redirect to={ROUTE_CONSTANTS.LOGIN} />
	            		)
	            	}}
	            />
	            <Route
	            	exact
	            	path={ROUTE_CONSTANTS.LOGIN}
	            	component={Login}
	            />
	            <Route
	            	exact
	            	path={ROUTE_CONSTANTS.DASHBOARD}
	            	component={Dashboard}
	            />
	            <Route
	            	exact
	            	path={ROUTE_CONSTANTS.NOT_FOUND}
	            	component={NotFound}
	            />
	            <Redirect to={ROUTE_CONSTANTS.NOT_FOUND} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;