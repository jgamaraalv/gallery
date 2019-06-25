import React from "react";
import { Route } from "react-router-dom";

const RouteComponent = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} />} />
);

export default RouteComponent;
