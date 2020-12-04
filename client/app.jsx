import React, { Component } from "react";
import { render } from "react-dom";
import styles from "./scss/application.scss";
import Dashboard from "./components/dashboard.jsx";
import StocksDisplay from "./components/stocksDisplay.jsx";

//Dashboard COMPONENT:
class App extends Component {
  render() {
    return (
      <div id="app">
        <Dashboard/>
        <StocksDisplay/>
      </div>
    );
  }
}







//Render:
render(<App />, document.querySelector('#root'));