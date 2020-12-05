import React, { Component, useContext } from "react";
import { GlobalContext } from "../context/gobalState.jsx";

function StockCard({ stock }) {
  const { deleteStock } = useContext(GlobalContext);

//~ Will need to update 100 to stock.price once price available. 
  let profitLoss = (100 * stock.qty) - (stock.entryPrice*stock.qty)

  const sign = profitLoss < 0 ? "-" : "+";
  return (
    <>
      <li className={profitLoss >= 0 ? "plus-border" : "minus-border"}>
        <h5>Ticker | Price | Shared | Profit/loss | Entry Price</h5>
        <br />
        {stock.ticker} <span>$100</span> <span>{stock.qty}</span>{" "}
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
