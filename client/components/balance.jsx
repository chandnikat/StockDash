import React, { Component } from "react";
// export const GlobalContext = createContext(initialState);

//Header COMPONENT:
function Balance() {
  // const {stocks} = useContext(GlobalContext)

  return (
    <div className="balance-container">
      <div className="total-container">
        <h4 id="balance-header">Total Profit/Loss</h4>
        <h1 id="balance">$0.00</h1>
      </div>
      <div className="total-container" id="profit-container">
        <div className="inside-profit-container">
          <h3>Profit</h3>
          <p className="plus">
            +$25.00
          </p>
        </div>
        <div className="inside-profit-container">
          <h3>Loss</h3>
          <p  className="minus">
            -$5.00
          </p>
        </div>
      </div>
    </div>
  );
}

export default Balance;
