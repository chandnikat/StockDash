import React, { Component } from "react";

function StockCard({stock}) {
  const sign = stock.profitLoss < 0 ? "-" : "+";
  return (
    <>

    <li className= {stock.profitLoss >= 0 ? "plus-border" : "minus-border"}>
    <h5>Ticker | Price | Shared | Profit/loss | Entry Price</h5><br/>
          {stock.ticker} <span>${stock.price}</span> <span>{stock.qty}</span> <span className= {stock.profitLoss >= 0 ? "plus" : "minus"}>{sign}${Math.abs(stock.profitLoss)}</span> <span>{stock.entryPrice}</span> <button className="delete-btn">Delete</button>
        </li>
        </>
  );
}

export default StockCard;
