import React, { Component, useContext, useEffect } from "react";
import { GlobalContext } from "../context/gobalState.jsx";
import StockCard from "./stockCard.jsx";
import Modal from "./modal.jsx";

function StocksDisplay() {
  const { stocks, getStocks } = useContext(GlobalContext);

  useEffect(() => {
    getStocks();
  }, []);

  return (
    <div id="stocksDisplay">
      <h3>Current Stocks:</h3>
      <ul id="list" className="list">
        {stocks.map((stock) => (
          <StockCard key={stock._id} stock={stock} />
        ))}
      </ul>
    </div>
  );
}

export default StocksDisplay;
