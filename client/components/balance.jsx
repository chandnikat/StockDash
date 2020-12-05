import React, { Component, useContext } from "react";
import { GlobalContext } from "../context/gobalState.jsx";

//Header COMPONENT:
function Balance() {
  const { stocks } = useContext(GlobalContext);

  //Total profit/Loss Calc:
  const amounts = stocks.map((stock) => stock.profitLoss);
  const total = amounts.reduce((acc, item) => (acc += item), 0);
  const sign = total < 0 ? "-" : "+";

  //Individual Profit/Loss Calc:
  const profit = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const loss = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="balance-container">
      {/* Total Profit/Loss */}
      <div className="total-container">
        <h4 id="balance-header">Total Profit/Loss</h4>
        <h1 id="balance" className={total >= 0 ? "plus" : "minus"}>
          {sign}${Math.abs(total).toFixed(2)}
        </h1>
      </div>

      {/* Individual Profit/Loss */}
      <div className="total-container" id="profit-container">
        <div className="inside-profit-container">
          <h3>Profit</h3>
          <p className="plus">+$${Math.abs(profit).toFixed(2)}</p>
        </div>
        <div className="inside-profit-container">
          <h3>Loss</h3>
          <p className="minus">-$${Math.abs(loss).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default Balance;
