import React from "react";

import { Switch } from "react-router-dom";

import Route from "./Route";

import Home from "../pages/Home";
import Cart from "../pages/Cart";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" exact component={Cart} />
    </Switch>
  );
};

export default Routes;
