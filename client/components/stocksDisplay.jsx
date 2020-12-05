import React, { Component, useContext } from "react";
import { GlobalContext } from "../context/gobalState.jsx";
import StockCard from "./stockCard.jsx";

function StocksDisplay() {
  const { stocks } = useContext(GlobalContext);

  return (
    <div id="stocksDisplay">
      <h3>Current Stocks:</h3>
      <ul id="list" className="list">
        {stocks.map((stock) => (
          <StockCard key={stock.id} stock={stock} />
        ))}
      </ul>
    </div>
  );
}

export default StocksDisplay;
