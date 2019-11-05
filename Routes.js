import React from "react";
import { Switch, Route } from "react-router-dom";
import Dash from "./src/components/Dash";
import Edit from "./src/components/Edit";
import Cart from "./src/components/Cart";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dash} />
      <Route to="/edit/:id" component={Edit} />
      <Route to="/add" component={Edit} />
      <Route to="/cart" component={Cart} />
    </Switch>
  );
}
