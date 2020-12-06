import React, { Component, useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/gobalState.jsx";

function StockCard({ stock }) {
  const { deleteStock } = useContext(GlobalContext);

  let profitLoss = stock.price * stock.qty - stock.entryPrice * stock.qty;

  const sign = profitLoss < 0 ? "-" : "+";

  // //API request:
  // const token = "Q0PFL2R0GZ167DNF";
  // let symbol = stock.ticker;
  // // console.log(stock.ticker)
  // const url =
  //   "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
  //   symbol +
  //   "&apikey=" +
  //   token;

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("INSIDE " + symbol, data["Global Quote"]["05. price"]);
  //       let lastPrice = data["Global Quote"]["05. price"];
  //       setPrice(lastPrice);
  //     })
  //     .catch(err => console.log("API ERROR: " + err))
  // });

  return (
    <div className="stock">
      <li className={profitLoss >= 0 ? "plus-border" : "minus-border"} id="stock">
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
            <th>${Math.abs(stock.price).toFixed(2)}</th>
            <th>{stock.qty}</th>
            <th>
              <span className={profitLoss >= 0 ? "plus" : "minus"}>
                {sign}${Math.abs(profitLoss).toFixed(2)}
              </span>
            </th>
            <th>${Math.abs(stock.entryPrice).toFixed(2)}</th>
            
          </tr>
          </tbody>
        </table>
        <button
                onClick={() => deleteStock(stock.id)}
                className="delete-btn">
                Delete
              </button>
      </li>
    </div>
  );
}

export default StockCard;
