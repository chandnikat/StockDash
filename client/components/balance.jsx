import React, { Component, useContext } from "react";
import { GlobalContext } from "../context/gobalState.jsx";

//Header COMPONENT:
function Balance() {
  const { stocks } = useContext(GlobalContext);

  const amount = stocks.map((stock) => stock.profitLoss);
  const total = amount.reduce((acc, item) => (acc += item), 0);
  const sign = total < 0 ? "-" : "+";

  return (
    <div className="balance-container">
      <div className="total-container">
        <h4 id="balance-header">Total Profit/Loss</h4>
        <h1 id="balance" className={total >= 0 ? "plus" : "minus"}>{sign}${Math.abs(total).toFixed(2)}</h1>
      </div>
      <div className="total-container" id="profit-container">
        <div className="inside-profit-container">
          <h3>Profit</h3>
          <p className="plus">+$25.00</p>
        </div>
        <div className="inside-profit-container">
          <h3>Loss</h3>
          <p className="minus">-$5.00</p>
        </div>
      </div>
    </div>
  );
}

export default Balance;
