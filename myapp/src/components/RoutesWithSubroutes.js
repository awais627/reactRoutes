import * as React from "react";
import { Route, Switch } from "react-router-dom";

const RouteWithSubRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes &&
        routes.map((route) => (
          <Route
            path={route.path}
            exact={route.exact}
            key={route.path}
            render={(props) => {
              if (!route.private) {
                // pass the sub-routes down as props
                return <route.component {...props} routes={route.routes} />;
              } else {
                // authenticate user and return component to render else return redirect
              }
            }}
          />
        ))}
    </Switch>
  );
};

export default RouteWithSubRoutes;
