import React, { Component } from "react";

function StocksDisplay() {
  return (
    <div id="stocksDisplay">
      <h3>Current Stocks:</h3>
      <h5>Ticker | Price | Shared | Profit/loss | Cost Basis / Share</h5>
      <ul id="list" class="list">
        <li class="minus">
          AAPl <span>$133.00</span> <span>15</span> <span>+$400</span>{" "}
          <span>$114</span> <button className="delete-btn">Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default StocksDisplay;
