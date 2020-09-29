import React, { Component } from "react";
import "./App.css";

import Soma from "./components/Soma";
import Multiplicacao from "./components/Multiplicacao";
import Maior from "./components/Maior";
import Navigate from "./components/Navigate";

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <h1>Redux calculadora</h1>

        <div className="line">
          <Navigate />
        </div>

        <div className="line">
          <Soma />
          <Multiplicacao />
          <Maior />
        </div>
      </div>
    );
  }
}
