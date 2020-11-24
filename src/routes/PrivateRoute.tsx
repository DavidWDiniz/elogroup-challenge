import React from "react";
import {Redirect, Route, RouteProps} from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
    component: React.ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={({location}) =>
                localStorage.getItem("@Logged") ? (
                    <Component/>
                ) : (
                    <Redirect to={{
                        pathname: "/",
                        state: {from: location},
                    }}/>
                )
            }
        />
    );
}

export default PrivateRoute;
