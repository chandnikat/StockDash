import React, { Component, useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/gobalState.jsx";

function StockCard({ stock }) {
  const [price, setPrice] = useState(0);
  const { deleteStock } = useContext(GlobalContext);

  //~ Will need to update 100 to stock.price once price available.
  let profitLoss = 100 * stock.qty - stock.entryPrice * stock.qty;

  const sign = profitLoss < 0 ? "-" : "+";

  //API request:
  const token = "Q0PFL2R0GZ167DNF";
  let symbol = stock.ticker;
  // console.log(stock.ticker)
  const url =
    "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
    symbol +
    "&apikey=" +
    token;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("INSIDE " + symbol, data["Global Quote"]["05. price"]);
        let lastPrice = data["Global Quote"]["05. price"];
        setPrice(lastPrice);
      });
  });

  console.log("OUTSIDE " + symbol, price);
  let currentPrice =price

  return (
    <>
      <li className={profitLoss >= 0 ? "plus-border" : "minus-border"}>
        <h5>Ticker | Price | Shared | Profit/loss | Entry Price</h5>
        <br />
        {stock.ticker} <span>${Math.abs(currentPrice).toFixed(2)}</span> <span>{stock.qty}</span>{" "}
        <span className={profitLoss >= 0 ? "plus" : "minus"}>
          {sign}${Math.abs(profitLoss)}
        </span>{" "}
        <span>{stock.entryPrice}</span>{" "}
        <button onClick={() => deleteStock(stock.id)} className="delete-btn">
          Delete
        </button>
      </li>
    </>
  );
}

export default StockCard;
