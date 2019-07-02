import React from "react";
import { MainPage, CartPage } from "../pages";
import AppHeader from "../app-header";
import { Switch, Route } from "react-router-dom";

import Background from "./food-bg.jpg";
import "./app.css";

const App = () => {
  return (
    <div
      style={{
        background: `url(${Background}) center center/cover no-repeat`
      }}
      className="app"
    >
      <AppHeader total={10} />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/cart-page" component={CartPage} />
      </Switch>
    </div>
  );
};

export default App;
