import React, { Component } from "react";

//Header COMPONENT:
function Balance() {
  return (
    <div className="balance-container">
      <div className="total-container">
        <h4 id="balance-header">Total Profit/Loss</h4>
        <h1 id="balance">$0.00</h1>
      </div>
      <div className="total-container">
        <div>
          <h4>Profit</h4>
          <p id="profit" className="profit-loss">
            +$0.00
          </p>
        </div>
        <div>
          <h4>Loss</h4>
          <p id="loss" className="profit-loss">
            -$0.00
          </p>
        </div>
      </div>
    </div>
  );
}

export default Balance;
