import React from "react";
import { MainPage, CartPage } from "../pages";
import AppHeader from "../app-header";
import WithRestoService from "../hoc";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Background from "./food-bg.jpg";
import "./app.css";

const App = ({ RestoService }) => {
  console.log(
    RestoService.getMenuItems().then(myJson => {
      console.log(JSON.stringify(myJson));
    })
  );
  return (
    <Router>
      <div
        style={{
          background: `url(${Background}) center center/cover no-repeat`,
          height: `100vh`
        }}
        className="app"
      >
        <AppHeader total={50} />
        <Route
          path="/"
          exact
          component={() => <h1>Выберете блюдо в меню</h1>}
        />
        <Route path="/main-page" component={MainPage} />
        <Route path="/cart-page" component={CartPage} />
      </div>
    </Router>
  );
};

export default WithRestoService()(App);
