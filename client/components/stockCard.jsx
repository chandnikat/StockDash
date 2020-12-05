import React, { Component } from "react";

function StockCard({stock}) {
  const sign = stock.profitLoss < 0 ? "-" : "+";
  return (
    <li className="stockCard">
          {stock.ticker} <span>$133.00</span> <span>{stock.qty}</span> <span>{sign}${stock.profitLoss}</span> <span>{stock.entryPrice}</span> <button className="delete-btn">Delete</button>
        </li>
  );
}

export default StockCard;
