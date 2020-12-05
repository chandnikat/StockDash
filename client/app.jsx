import React, { Component } from "react";
import { render } from "react-dom";
import styles from "./scss/application.scss";
import Dashboard from "./components/dashboard.jsx";
import StocksDisplay from "./components/stocksDisplay.jsx";
import Header from "./components/header.jsx";
import Balance from "./components/balance.jsx";

//App COMPONENT:
function App() {
  return (
    <div id="app">
      <Header />
      <div classNamne="container">
        <Dashboard />
        <Balance/>
        <StocksDisplay />
      </div>
    </div>
  );
}

//Render:
render(<App />, document.querySelector("#root"));
