import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StoreProvider } from "./Store";
import App from "./App";
import "typeface-roboto";

ReactDOM.render(
  <StoreProvider>
    <Router>
      <Route component={App} />
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);
