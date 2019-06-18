import React from "react";
import { Redirect, Route } from "react-router-dom";

import store from "../store";

const RouteComponent = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      <Component {...props} />
    }
  />
);

export default RouteComponent;
