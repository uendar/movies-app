import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import App from "./App";
import { render } from "react-dom";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
