import React, { Component } from "react";
import { render } from "react-dom";
import styles from "./scss/application.scss";
import Dashboard from "./components/dashboard.jsx";
import StocksDisplay from "./components/stocksDisplay.jsx";
import Header from "./components/header.jsx";
import Balance from "./components/balance.jsx";
import { GlobalProvider } from "./context/gobalState.jsx";

//App COMPONENT:
function App() {
  return (
    <GlobalProvider id="app">
      <Header />
      <div className="container">
        <Dashboard />
        <Balance />
        <StocksDisplay />
      </div>
    </GlobalProvider>
  );
}

//Render:
render(<App />, document.querySelector("#root"));
