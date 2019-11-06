import React from "react";
import { Switch, Route } from "react-router-dom";
import Dash from "./components/Dash";
import Edit from "./components/Edit";
import Cart from "./components/Cart";

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
