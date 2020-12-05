import React, { Component } from "react";

function StockCard({stock}) {
  return (
    <li className="minus">
          {stock.ticker} <span>$133.00</span> <span>{stock.qty}</span> <span>+$400</span>{" "}
          <span>{stock.entryPrice}</span> <button className="delete-btn">Delete</button>
        </li>
  );
}

export default StockCard;
