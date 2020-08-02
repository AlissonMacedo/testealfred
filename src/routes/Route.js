import React from "react";

import { Route, Redirect } from "react-router-dom";

const RouteWrapper = ({ component: Component, isprivate, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default RouteWrapper;
