import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import About from "./pages/About";

ReactDOM.render(
  <BrowserRouter>
    <Route
      render={({ location }) => (
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/about" component={About} />
        </Switch>
      )}
    />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
