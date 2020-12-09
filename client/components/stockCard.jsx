import React, { Component, useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/gobalState.jsx";
import {numberWithCommas} from "../utils/formatFuncs.js"
function StockCard({ stock }) {
  const { deleteStock } = useContext(GlobalContext);

  const sign = stock.profitLoss < 0 ? "-" : "+";

  return (
    <div className="stock">
      <li
        className={stock.profitLoss >= 0 ? "plus-border" : "minus-border"}
        id="stock"
      >
        <table>
          <tbody>
            <tr id="head-table">
              <th>Ticker</th>
              <th>Stock Price</th>
              <th>Shares</th>
              <th>Profit/Loss</th>
              <th>Entry Price</th>
            </tr>
            <tr id="body-table">
              <th>{stock.ticker.toUpperCase()}</th>
              <th>${numberWithCommas(Math.abs(stock.price).toFixed(2))}</th>
              <th>{numberWithCommas(stock.qty)}</th>
              <th>
                <span className={stock.profitLoss >= 0 ? "plus" : "minus"}>
                  {sign}${numberWithCommas(Math.abs(stock.profitLoss).toFixed(2))}
                </span>
              </th>
              <th>${numberWithCommas(Math.abs(stock.entryPrice).toFixed(2)) }</th>
            </tr>
          </tbody>
        </table>
        <button onClick={() => deleteStock(stock._id)} className="delete-btn">
          Delete
        </button>
      </li>
    </div>
  );
}

export default StockCard;
