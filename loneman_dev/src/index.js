import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
render(
  // Wrap the <App /> in a provider
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
