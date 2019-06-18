import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch } from "react-router-dom";

import history from "./history";

import Route from "./route";

import asyncComponent from "../components/AsyncComponent";
const Main = asyncComponent(() => import("../pages/Main"));

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" exact component={Main} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
