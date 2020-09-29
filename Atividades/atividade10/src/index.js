import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

import { Provider } from 'react-redux'
import StoreConfig from './store/StoreConfig'

ReactDOM.render(
  <Provider store = {StoreConfig()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
